import React, { useContext } from "react";
import { AppContext } from "../../App";
import { useForm } from "react-hook-form";
import pageData from "../../pageData/data";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";

const EditProfile = () => {
  const { userContext } = useContext(AppContext);
  const [user, setUser] = userContext;
  const { register, handleSubmit } = useForm();
  const { name, email, phone, tshirt, address, player } = user;
  const { backend } = pageData;
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
      ...data,
    };
    setUser(newUser);
    newUser._id && delete newUser._id;
    updateUser(newUser);
    navigate("/profile");
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="m-4 p-3 border rounded" style={{ width: "22rem" }}>
        <h3>Edit Profile Info</h3>
        <div className="m-2 d-flex justify-content-center">
          <form
            className="d-flex flex-column"
            style={{ width: "18rem" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="m-0">
              Name <span className="text-danger">*</span>
            </p>
            <input
              className="border mb-3 text-center"
              defaultValue={name}
              {...register("name", {
                required: true,
              })}
            />
            <h6 className="mb-3">Email: {email}</h6>
            <p className="m-0">
              Phone <span className="text-danger">*</span>
            </p>
            <input
              className="border mb-3 text-center"
              placeholder="e.g.: +358405601033"
              defaultValue={phone}
              {...register("phone", {
                required: true,
                pattern:
                  /^((04[0-9]{1})(\s?|-?)|050(\s?|-?)|0457(\s?|-?)|[+]?358(\s?|-?)50|0358(\s?|-?)50|00358(\s?|-?)50|[+]?358(\s?|-?)4[0-9]{1}|0358(\s?|-?)4[0-9]{1}|00358(\s?|-?)4[0-9]{1})(\s?|-?)(([0-9]{3,4})(\s)?[0-9]{1,4})$/gm,
              })}
            />
            <p className="m-0">T-shirt size (EU)</p>
            <input
              defaultValue={tshirt}
              className="border mb-3 text-center"
              {...register("tshirt", {})}
            />
            <p className="m-0">Player Type:</p>
            <input
              defaultValue={player}
              placeholder="e.g: Bowler, Batsman, Supporter"
              className="border mb-3 text-center"
              {...register("player", {})}
            />

            <p className="m-0">Address:</p>
            <input
              defaultValue={address}
              className="border mb-3 text-center"
              {...register("address", {})}
            />
            <input className="btn btn-primary" type="submit" />
            <small className="text-danger mb-4">* = Required!</small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
