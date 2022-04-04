import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../App";
import pageData from "../../pageData/data";

const EventDetails = () => {
  const navigate = useNavigate();
  const { userContext } = useContext(AppContext);
  const [user] = userContext;
  const { admin, email } = user;
  const [event, setEvent] = useState({});
  const [copied, setCopied] = useState(false);
  const { backend, frontend } = pageData;
  const { id } = useParams();
  useEffect(() => {
    fetch(`${backend}/event/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data[0]));
  }, [id, backend]);

  const postReg = (event) => {
    fetch(`${backend}/event/update/${id}`, {
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

  const postDel = (event) => {
    fetch(`${backend}/event/delete/${id}`, {
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

  const HandleRegistration = () => {
    event && event.participants.push(user._id);
    alert(`you are about to register to the event`);
    postReg(event);
    navigate("/event/signInSuccess");
    //todo
  };
  const HandleWithdrawRegistration = () => {
    for (var i = 0; i < event.participants.length; i++) {
      if (event.participants[i] === user._id) {
        event.participants.splice(i, 1);
      }
    }
    alert(`Delete registration from event?`);
    postReg(event);
    navigate("/eid/2022/signOutSuccess");
  };

  const HandleDeleteEvent = () => {
    alert("DELETE THE EVENT?!");
    alert("CONFIRMING DELETE THE EVENT?!");
    postDel(event);
    navigate("/event/deleteSuccess");
  };

  const HandleEditEvent = () => {
    navigate(`/events/edit/${id}`);
  };

  const handleLogIn = () => {
    navigate(`/event/reg/${id}`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${frontend}/event/${id}`);
    setCopied(true);
  };

  return (
    <div className="gimme-space d-flex justify-content-center flex-wrap">
      {!event.participants && <p>event not found!</p>}
      {event && event.participants && (
        <div className="card rounded m-2" style={{ width: "40rem" }}>
          <div className="card-body">
            {event.eventName && (
              <div>
                <h3 className="card-title">{event.eventName}</h3>
                {event.participants &&
                  event.participants.includes(user._id) && (
                    <span className="marker">Signed up!</span>
                  )}
              </div>
            )}
            {event.eventVenue && (
              <h6 className="card-text m-2">{"Venue: " + event.eventVenue}</h6>
            )}
            {event.eventDate && (
              <h6 className="card-text">{"Date: " + event.eventDate}</h6>
            )}
            {event.eventTime && (
              <h6 className="card-text">{"Time: " + event.eventTime}</h6>
            )}
            {event.eventOtherInfo && (
              <p className="card-text">{"Note: " + event.eventOtherInfo}</p>
            )}
            {event.eventHostPhone && (
              <a className="card-text" href={`tel:${event.eventHostPhone}`}>
                {"Host Contact: " + event.eventHostPhone}
              </a>
            )}
            <h6 className="m-2">
              Total Participants:{" "}
              {event.participants && event.participants.length}
            </h6>
            {copied && (
              <p className="text-danger">Event Link copied to clipboard!</p>
            )}
            {email ? (
              <div className="mt-4 d-flex align-items-center justify-content-center flex-wrap">
                {event.participants.includes(user._id) ? (
                  <button
                    onClick={HandleWithdrawRegistration}
                    className="btn btn-danger mx-4 my-2"
                  >
                    Sign Out!
                  </button>
                ) : (
                  <button
                    onClick={HandleRegistration}
                    className="btn btn-primary mx-4 my-2"
                  >
                    Sign Up!
                  </button>
                )}

                <button
                  className="btn btn-info mx-4 my-2"
                  onClick={handleCopyLink}
                >
                  Copy Link
                </button>

                {admin && (
                  <button
                    className="btn btn-danger mx-4 my-2"
                    onClick={HandleDeleteEvent}
                  >
                    Delete Event!
                  </button>
                )}
                {admin && (
                  <button
                    className="btn btn-primary mx-4 my-2"
                    onClick={HandleEditEvent}
                  >
                    Edit Event!
                  </button>
                )}
              </div>
            ) : (
              <>
                <button onClick={handleLogIn} className="btn btn-primary">
                  Log In to Sign Up!
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
