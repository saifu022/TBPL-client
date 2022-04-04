import React, { useContext } from "react";
import { AppContext } from "../../App";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./EditProfile.css";
import pageData from "../../pageData/data";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

const EditProfilePic = () => {
  const { userContext } = useContext(AppContext);
  const [user, setUser] = userContext;
  const { backend } = pageData;
  const [imageUrl, setImageUrl] = useState(null);
  const [proSpinner, setProSpinner] = useState(false);
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

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

  const onSubmit = (data) => {
    const newUser = {
      ...user,
      photoUrl: imageUrl,
    };
    setUser(newUser);
    newUser._id && delete newUser._id;
    updateUser(newUser);
    navigate("/profile");
  };

  const handleImageUpload = (event) => {
    setProSpinner(true);
    const imageData = new FormData();
    imageData.set("key", "ae0576e43bf23a5c7569f4095351d11e");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        setImageUrl(response.data.data.url);
        setProSpinner(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="d-flex justify-content-center gimme-space">
      <form className="profile-edit-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row mt-4">
          <h3>Edit profile Picture!</h3>
        </div>
        <div className="row">
          <div className="d-flex flex-column align-items-center">
            <label htmlFor="pp" className="form-label mb-2">
              Upload a new profile photo:
            </label>
            <input
              name="pp"
              type="file"
              onChange={handleImageUpload}
              className="form-control mb-2"
            />
            {imageUrl && (
              <>
                <h6>Preview</h6>
                <img
                  src={imageUrl}
                  alt="no file selected"
                  className="profile-account-image mb-2"
                />
              </>
            )}
            <p>
              * for better looking, upload an square and background removed
              picture!
            </p>
            {proSpinner && (
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
              </div>
            )}
            {imageUrl && (
              <input type="submit" className={`btn btn-primary submit-btn `} />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfilePic;
