import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import pageData from "../../pageData/data";

const RegistrationForm = () => {
  const { userContext } = useContext(AppContext);
  const [user, setUser] = userContext;
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { backend } = pageData;
  const { phone, tshirt, player } = user;

  const onSubmit = (formData) => {
    const userData = { ...user, ...formData };
    const newUser = { ...user };
    newUser.registered2022 = true;

    console.log(userData);
    if (formData.phone) {
      newUser.phone = userData.phone;
    }
    if (formData.tshirt) {
      newUser.tshirt = userData.tshirt;
    }
    if (formData.player) {
      newUser.player = userData.player;
    }
    setUser(newUser);
    newUser._id && delete newUser._id;
    updateUser(newUser);
    console.log(newUser);
    registerParticipant(userData);
    navigate("/registration/signUpSuccess");
  };

  const registerParticipant = (userData) => {
    fetch(`${backend}/participant/add/2022`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
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
  return (
    <div>
      <div className="">
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-12">
            {!tshirt && (
              <>
                <label htmlFor="tshirt">T-shirt Size (EU):</label>
                <input
                  {...register("tshirt", { required: true })}
                  className="ms-2"
                  type="text"
                  name="tshirt"
                />
              </>
            )}
          </div>
          <div className="col-12">
            {!phone && (
              <>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  {...register("phone", { required: true })}
                  className="ms-2"
                  type="text"
                  name="phone"
                />
              </>
            )}
          </div>
          <div className="col-12">
            {!player && (
              <>
                <label htmlFor="player">Player Category:</label>
                <input
                  {...register("player", { required: true })}
                  className="ms-2"
                  type="text"
                  name="player"
                  placeholder="e.g: Bowler, Batsman"
                />
              </>
            )}
          </div>
          <div className="col-12">
            <input
              {...register("amAvailable", { required: true })}
              className="me-2"
              type="checkbox"
              name="amAvailable"
              value="Available for tournament!"
            />
            <label htmlFor="amAvailable">
              <span className="text-danger">*</span> I consent to be available
              for games between 10 June '22 5:00 PM and 12 June '22' 8 PM!
            </label>
          </div>

          <div className="col-12">
            <input
              type="submit"
              className="btn btn-primary"
              value="Register!"
            />
            {/* <a
              href="/2022/whoIsGoing"
              className="btn btn-outline-info ms-2"
            >
              Check who is Playing!
            </a> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
