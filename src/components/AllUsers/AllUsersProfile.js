import React, { useState } from "react";
import pageData from "../../pageData/data";
import ProfileImage from "../ProfileImage/ProfileImage";

const AllUsersProfile = ({ everyUser }) => {
  const [thisUser, setThisUser] = useState(everyUser);
  const { name, email, phone, tshirt, admin } = thisUser;
  const { backend, creator } = pageData;

  const updateUser = (thisUser) => {
    fetch(`${backend}/user/update`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(thisUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setThisUser(data);
      });
  };
  const makeAdmin = () => {
    thisUser.admin = true;
    updateUser(thisUser);
  };

  const removeAdmin = () => {
    thisUser.admin = false;
    updateUser(thisUser);
  };
  return (
    <div>
      <div>
        {email !== creator && (
          <div
            className="card text-center m-2"
            style={{ width: "20rem", height: "29rem" }}
          >
            <div className="card-body">
              <ProfileImage user={thisUser} />
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

              <div className="d-flex flex-wrap justify-content-center">
                {/* <a href="/editProfilePic" className="btn btn-primary m-2">
                Edit Picture
              </a> */}
                {/* <a href="/editProfile" className="btn btn-primary m-2">
                Edit Info
              </a> */}
                {admin && email !== creator && (
                  <button onClick={removeAdmin} className="btn btn-danger m-2">
                    Remove Admin!
                  </button>
                )}
                {!admin && (
                  <button onClick={makeAdmin} className="btn btn-primary m-2">
                    Make Admin!
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsersProfile;
