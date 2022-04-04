import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../App";
import pageData from "../../pageData/data";

const EventEdit = () => {
  let navigate = useNavigate();
  const { userContext } = useContext(AppContext);
  const [user] = userContext;
  const { name, phone } = user;
  const { backend } = pageData;

  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [participants, setParticipants] = useState();

  useEffect(() => {
    fetch(`${backend}/event/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data[0]);
        setParticipants(event.participants);
      });
  }, [id, event.participants, backend]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateEvent = (event) => {
    fetch(`${backend}/event/update/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  const onSubmit = (event) => {
    event.participants = participants;
    alert("Update event?");
    updateEvent(event);
    //navigate(`/event/${id}`);
    navigate("/event/editSuccess");
  };
  const handleChange = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="m-4 p-3 border rounded" style={{ width: "22rem" }}>
        <h3>Update Event info!</h3>
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
              defaultValue={event.eventName}
              placeholder="E.g: myEvent"
              {...register("eventName", {
                required: true,
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
              defaultValue={event.eventVenue}
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
              defaultValue={event.eventDate}
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
              defaultValue={event.eventTime}
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
              defaultValue={event.eventOtherInfo}
              {...register("eventOtherInfo", {})}
              onChange={handleChange}
              onClick={handleChange}
            />

            <input
              className="btn btn-primary m-2"
              type="submit"
              value="Update"
            />

            <a href={`/event/${id}`} className="btn btn-primary m-2">
              Back
            </a>

            <small className="text-danger mb-4">* = Required!</small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventEdit;
