import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import pageData from "../../pageData/data";

const NewEventCreatorForm = () => {
  let navigate = useNavigate();
  const { userContext } = useContext(AppContext);
  const [user] = userContext;
  const { name, phone } = user;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerUser = (event) => {
    fetch(`${pageData.backend}/event/add`, {
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

  const onSubmit = (event) => {
    console.log(event);
    event.participants = [];
    alert("You have created a public event!");
    registerUser(event);
    navigate("/event/createNewSuccess");
  };

  const handleChange = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="m-4 p-3 border rounded" style={{ width: "22rem" }}>
        <h3>Create New Event!</h3>
        <div className="m-2 d-flex justify-content-center">
          <form
            className="d-flex flex-column"
            style={{ width: "18rem" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="m-0">
              Event Name <span className="text-danger">*</span>
              {errors.eventName && (
                <span className="text-danger">Required</span>
              )}
            </p>
            <input
              className="border mb-3 text-center"
              placeholder="E.g: myEvent"
              {...register("eventName", {
                required: true,
                //pattern: /^\S+$/i,
              })}
            />

            <p className="m-0">
              Venue <span className="text-danger">*</span>
              {errors.eventVenue && (
                <span className="text-danger">Required</span>
              )}
            </p>
            <input
              className="border mb-3 text-center"
              placeholder="E.g: Bommari, Hervanta."
              {...register("eventVenue", {
                required: true,
              })}
            />

            <p className="m-0">
              Date <span className="text-danger">*</span>
              {errors.eventDate && (
                <span className="text-danger">Required</span>
              )}
            </p>
            <input
              className="border mb-3 text-center"
              type="date"
              {...register("eventDate", {
                required: true,
              })}
            />

            <p className="m-0">
              Time <span className="text-danger">*</span>
              {errors.eventTime && (
                <span className="text-danger">Required</span>
              )}
            </p>
            <input
              className="border mb-3 text-center"
              type="time"
              {...register("eventTime", {
                required: true,
              })}
            />

            <p className="m-0">Host:</p>
            <input
              defaultValue={name}
              className="border mb-3 text-center"
              {...register("eventHost", {})}
            />

            <p className="m-0 ">Host Contact:</p>
            <input
              defaultValue={phone}
              className="border mb-3 text-center"
              placeholder="E.g: +358 465636528"
              {...register("eventHostPhone", {})}
            />

            <p className="m-0 ">Other info</p>
            <textarea
              className="border mb-3"
              {...register("eventOtherInfo", {})}
              onChange={handleChange}
            />

            <input
              className="btn btn-primary"
              type="submit"
              value="Create Event!"
            />

            <small className="text-danger mb-4">* = Required!</small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewEventCreatorForm;
