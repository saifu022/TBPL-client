import React from "react";
import "./ProfileImage.css";

const ProfileImage = ({ user }) => {
  const { name, photoUrl } = user;
  return (
    <div className="image-container">
      {photoUrl ? (
        <img src={photoUrl} alt="profile" className="profile-account-image" />
      ) : (
        <div className="profile-account-image">{name ? name[0] : ""}</div>
      )}
    </div>
  );
};

export default ProfileImage;
