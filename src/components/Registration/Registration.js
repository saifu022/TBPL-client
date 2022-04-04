import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import pageData from "../../pageData/data";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
  let navigate = useNavigate();
  const { userContext } = useContext(AppContext);
  const [user, setUser] = userContext;
  const { email, registered2022 } = user;
  const { backend } = pageData;

  const handleLogIn = () => {
    navigate("/registration/form");
  };

  const postDel = (participant) => {
    fetch(`${backend}/participant/2022/del/${email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(participant),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const updateUser = (user) => {
    fetch(`${backend}/user/update`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  };

  const handleCancelSignOut = () => {
    const newUser = { ...user };
    newUser.registered2022 = false;
    setUser(newUser);
    newUser._id && delete newUser._id;
    updateUser(newUser);
    console.log(newUser);
    postDel(user);
    //navigate("");
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="m-4 p-3 border rounded" style={{ width: "50rem" }}>
          <h2 className="m-3 mb-4">TBPL 2022 Registration!</h2>
          <p>
            Tam-Bangla Premier League is back! This year we are introducing our
            own website and many more new dimension to the tournament! Please
            register by logging in and stay tuned for further action!
          </p>
          <div>
            <p className="m-0">
              Time: 10-12 June, 2022. (Second weekend of June)
            </p>
            <p className="m-0">
              Last date of registration: 1st May, 2022 (Sunday)
            </p>
            <p>
              Registration fee: 10 euros/player (to be collected after team
              formation)
            </p>
          </div>
          <div>
            {!email ? (
              <button onClick={handleLogIn} className="btn btn-primary">
                Log In to register!
              </button>
            ) : registered2022 ? (
              <button className="btn btn-danger" onClick={handleCancelSignOut}>
                Sign Out!
              </button>
            ) : (
              <RegistrationForm />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
