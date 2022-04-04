import React, { useEffect, useState } from "react";
import pageData from "../../pageData/data";

const WhoIsGoingEid = () => {
  const [participants, setParticipants] = useState([]);
  const [tableShow, setTableShow] = useState(false);
  useEffect(() => {
    fetch(`${pageData.backend}/eid/2022/participants/all`)
      .then((res) => res.json())
      .then((data) => {
        setParticipants(data);
        //console.log(data);
        if (data.length > 0) {
          setTableShow(true);
        }
      });
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="m-4 p-3 border rounded" style={{ width: "50rem" }}>
          <h1>Who is going!</h1>
          <div>
            {tableShow && (
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Signed up!</th>
                    <th scope="col" className="d-none d-md-table-cell">
                      CAN Cook
                    </th>
                    <th scope="col" className="d-none d-md-table-cell">
                      can Help Cook
                    </th>
                    <th scope="col" className="d-none d-md-table-cell">
                      can Prepare Dessert
                    </th>
                    <th scope="col" className="d-none d-md-table-cell">
                      can Arrange Cultural
                    </th>
                    <th scope="col" className="d-none d-md-table-cell">
                      can Participate Cultural
                    </th>
                    <th scope="col" className="d-none d-md-table-cell">
                      can Help Cleaning
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map((participant) => (
                    <tr key={participant._id}>
                      <td>
                        <img
                          src={participant.photoUrl}
                          alt={participant.name}
                          className="profile-image profile-image-smaller"
                        />
                      </td>
                      <td>
                        {participant.name &&
                          participant.name.split(" ").slice(0, -1).join(" ")}
                      </td>
                      <td className="d-none d-md-table-cell">
                        {participant.canCook && "Yes"}
                      </td>
                      <td className="d-none d-md-table-cell">
                        {participant.canHelpCook && "Yes"}
                      </td>
                      <td className="d-none d-md-table-cell">
                        {participant.canPrepareDessert && "Yes"}
                      </td>
                      <td className="d-none d-md-table-cell">
                        {participant.canArrangeCultural && "Yes"}
                      </td>
                      <td className="d-none d-md-table-cell">
                        {participant.canParticipateCultural && "Yes"}
                      </td>
                      <td className="d-none d-md-table-cell">
                        {participant.canHelpCleaning && "Yes"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          {!tableShow && <p>No sign ups yet!</p>}
          <a href="/eid/2022" className="btn btn-primary">
            Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhoIsGoingEid;
