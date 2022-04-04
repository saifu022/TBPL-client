import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import pageData from "../../pageData/data";

const RegForm = () => {
  const { userContext } = useContext(AppContext);
  const [user, setUser] = userContext;
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { backend } = pageData;
  const { phone } = user;

  const onSubmit = (formData) => {
    const userData = { ...user, ...formData };
    const newUser = { ...user };
    if (formData.phone) {
      newUser.phone = userData.phone;
      setUser(newUser);
      newUser._id && delete newUser._id;
      updateUser(newUser);
    }
    //console.log(userData);
    registerParticipant(userData);
    navigate("/eid/2022/signInSuccess");
  };

  const registerParticipant = (event) => {
    fetch(`${backend}/eid/2022/participant/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(event),
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

  // const handleChange = (e) => {
  //   e.target.style.height = "inherit";
  //   e.target.style.height = `${e.target.scrollHeight}px`;
  // };

  return (
    <div className="">
      <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12">
          <label htmlFor="canCook">I can cook a Dish!</label>
          <input
            {...register("canCook")}
            className="ms-2"
            type="checkbox"
            name="canCook"
            value="can Cook"
          />
        </div>
        <div className="col-12">
          <label htmlFor="canHelpCook">I can help Cooking!</label>
          <input
            {...register("canHelpCook")}
            className="ms-2"
            type="checkbox"
            name="canHelpCook"
            value="Can Help Cooking!"
          />
        </div>
        <div className="col-12">
          <label htmlFor="canPrepareDessert">I can prepare a Dessert!</label>
          <input
            {...register("canPrepareDessert")}
            className="ms-2"
            type="checkbox"
            name="canPrepareDessert"
            value="Can Prepare Dessert!"
          />
        </div>
        <div className="col-12">
          <label htmlFor="canArrangeCultural">I can arrange Cultural!</label>
          <input
            {...register("canArrangeCultural")}
            className="ms-2"
            type="checkbox"
            name="canArrangeCultural"
            value="Can Arrange Cultural!"
          />
        </div>
        <div className="col-12">
          <label htmlFor="canParticipateCultural">
            I can participate in Cultural!
          </label>
          <input
            {...register("canParticipateCultural")}
            className="ms-2"
            type="checkbox"
            name="canParticipateCultural"
            value="Can Participate in Cultural!"
          />
        </div>
        <div className="col-12">
          <label htmlFor="canHelpCleaning">
            I can help cleaning after event!
          </label>
          <input
            {...register("canHelpCleaning")}
            className="ms-2"
            type="checkbox"
            name="canHelpCleaning"
            value="Can Help Cleaning!"
          />
          <p className="mt-2">
            We do understand if you cannot help us this time!
          </p>
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
          <input type="submit" className="btn btn-primary" value="Register!" />
          <a href="/eid/2022/whoIsGoing" className="btn btn-outline-info ms-2">
            Check who is going!
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegForm;
