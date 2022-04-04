import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import pageData from "../../pageData/data";
import bg from "../../images/events_bg.avif";

const Events = () => {
  const { userContext } = useContext(AppContext);
  const [user] = userContext;
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`${pageData.backend}/events/all`)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  events.sort((a, b) =>
    a.eventDate > b.eventDate ? 1 : b.eventDate > a.eventDate ? -1 : 0
  );

  var sectionStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "contain",
  };

  return (
    <div className="gimme-space p-4" style={sectionStyle}>
      <h3>Events Happening Nearby</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {events.map((event) => (
          <div
            key={event._id}
            className="card rounded m-2"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              {event.eventName && (
                <div className="d-flex justify-content-center flex-wrap">
                  <h5 className="card-title me-2">{event.eventName}</h5>
                  {event.participants &&
                    event.participants.includes(user._id) && (
                      <span className="marker">Signed up!</span>
                    )}
                </div>
              )}

              {event.eventVenue && (
                <p className="card-text">{"Venue: " + event.eventVenue}</p>
              )}
              {event.eventDate && (
                <p className="card-text">{"Date: " + event.eventDate}</p>
              )}
              {event.eventTime && (
                <p className="card-text">{"Time: " + event.eventTime}</p>
              )}
              {event.eventDate && (
                <a href={`/event/${event._id}`} className="btn btn-primary">
                  Details
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
