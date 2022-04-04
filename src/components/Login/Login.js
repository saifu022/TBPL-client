import React, { useContext } from "react";
import { AppContext } from "../../App";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import initializeAuthentication from "../../firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import pageData from "./../../pageData/data";
import "./Login.css";

/*if (firebase.apps.length === 0) {
  initializeAuthentication();
}*/

initializeAuthentication();

const Login = () => {
  const { userContext } = useContext(AppContext);
  const [user, setUser] = userContext;
  const navigate = useNavigate();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const registerUser = (user) => {
    fetch(`${pageData.backend}/user/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };
  const userUpdateAndRedirect = (userInfo) => {
    const { displayName, email, photoURL } = userInfo;
    const newUserInfo = {
      name: displayName,
      email: email,
      photoUrl: photoURL,
    };
    setUser(newUserInfo);
    registerUser(newUserInfo);
    navigate(from);
  };

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        userUpdateAndRedirect(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="login-container">
      <div className="logIn ">
        <div>
          <h1>Sign In!</h1> <br />
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleGoogleSignIn}
          >
            <ion-icon name="logo-google"></ion-icon> Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
