import React, { useContext } from "react";
import { AppContext } from "../../App";
import ProfileImage from "../ProfileImage/ProfileImage";

const Profile = () => {
  const { userContext } = useContext(AppContext);
  const [user] = userContext;
  const { name, email, phone, tshirt, address, player } = user;
  return (
    <div className="gimme-space">
      <div className="d-flex justify-content-center mt-4 mb-4">
        <div>
          <h3>User Profile</h3>
          <div className="card text-center" style={{ width: "20rem" }}>
            <div className="card-body">
              <ProfileImage user={user} />
              {name && <h5 className="">{name}</h5>}
              {email && (
                <div className="d-flex justify-content-center">
                  <ion-icon name="send"></ion-icon>
                  <p className="ms-2">{email}</p>
                </div>
              )}
              {phone && (
                <div className="d-flex justify-content-center">
                  <ion-icon name="call"></ion-icon>
                  <p className="ms-2">{phone}</p>
                </div>
              )}
              {tshirt && (
                <div className="d-flex justify-content-center">
                  <ion-icon name="shirt"></ion-icon>
                  <h6 className="ms-2">size {tshirt}</h6>
                </div>
              )}
              {player && (
                <div className="d-flex justify-content-center">
                  <ion-icon name="star"></ion-icon>
                  <h6 className="ms-2">{player}</h6>
                </div>
              )}
              {address && (
                <div className="d-flex justify-content-center">
                  <ion-icon name="home"></ion-icon>
                  <p className="ms-2">{address}</p>
                </div>
              )}
              <div className="d-flex justify-content-center">
                <a href="/editProfilePic" className="btn btn-primary me-2">
                  Edit Picture
                </a>
                <a href="/editProfile" className="btn btn-primary">
                  Edit Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
