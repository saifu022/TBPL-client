import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import pageData from "../../pageData/data";
import RegForm from "./RegForm";

const EidReg = () => {
  let navigate = useNavigate();
  const { userContext } = useContext(AppContext);
  const [user] = userContext;
  const { email } = user;
  const { backend } = pageData;
  const [participants, setParticipants] = useState([]);
  useEffect(() => {
    fetch(`${backend}/eid/2022/participants/all`)
      .then((res) => res.json())
      .then((data) => setParticipants(data));
  }, [backend]);
  const found = participants.find((participant) => participant.email === email);

  const handleLogIn = () => {
    navigate("/eid/2022/registration");
  };

  const HandleSignOut = () => {
    alert("We will miss you!! Please come anyway if you can manage?!");
    postDel(found);
    navigate("/eid/2022/signedOut");
  };

  const postDel = (event) => {
    fetch(`${backend}/eid/2022/participant/del/${found._id}`, {
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

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="m-4 p-3 border rounded" style={{ width: "50rem" }}>
          <h2 className="m-3 mb-4">Tampere Eid Festival!</h2>
          <p>
            The venue is booked for <b>Eid Festival</b> of Tam-Bangla community
            on 14th May 2022, Saturday. It has been a long COVID time, we had a
            gathering together. Lets make this festival colorful with your
            active participation.
          </p>
          <div>
            <p className="m-0">
              Venue: Kanjonin Koulu, Ruovedenkatu 7, 33720 Tampere.{" "}
              <a
                href="https://www.google.com/maps/dir//kanjonin+koulu/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x468edfa5f8c36b73:0x89ee87035556fb89?sa=X&ved=2ahUKEwjWycOft-n2AhUXAhAIHa1XBlkQ9Rd6BAgEEAQ"
                className="btn btn-info"
                target="_blank"
                rel="noreferrer"
              >
                map
              </a>
            </p>
            <p className="m-0">Date: 14th May, 2022 (Saturday)</p>
            <p className="m-0">Time: 5:00PM</p>
            <p className="m-0">
              Last Date of Registration: 30th April, 2022 (Saturday)
            </p>
            <p>Registration fee: 3 euros/adult </p>
          </div>
          <p>
            We are sorry if we could'nt reach you personally. With such a big
            family we have in Tampere, it is a tough job for us. Please mark
            your registration (with selecting what you can help with) below.
            We'll try to get back to you by the end of registration period.
          </p>
          <div>
            {!email ? (
              <button onClick={handleLogIn} className="btn btn-primary">
                Log In to register!
              </button>
            ) : found ? (
              <div className="col-12">
                <button className="btn btn-danger" onClick={HandleSignOut}>
                  Sign Out!
                </button>
                <a
                  href="/eid/2022/whoIsGoing"
                  className="btn btn-outline-info ms-2"
                >
                  Check who is going!
                </a>
              </div>
            ) : (
              <RegForm />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EidReg;
