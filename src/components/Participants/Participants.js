import React, { useEffect, useState } from "react";
import pageData from "../../pageData/data";

const Participants = () => {
  const [participants, setParticipants] = useState();
  const [totalParticipant, setTotalParticipant] = useState();
  const [tableShow, setTableShow] = useState(false);
  const { backend } = pageData;

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    fetch(`${backend}/2022/participants/all`)
      .then((res) => res.json())
      .then((data) => {
        data.sort(compare);
        setParticipants(data);
        console.log(data);
        if (data.length > 0) {
          setTableShow(true);
          setTotalParticipant(data.length);
        }
      });
  }, [backend]);

  return (
    <div className="d-flex justify-content-center">
      <div className="m-4 p-3 border rounded" style={{ width: "50rem" }}>
        <div>
          <h1>Already Joined!</h1>
          <div>
            {tableShow && (
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Name!</th>
                    <th scope="col" className="d-none d-md-table-cell">
                      Phone
                    </th>
                    <th scope="col" className="d-none d-md-table-cell">
                      Player
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
                        {participant.phone && participant.phone}
                      </td>
                      <td className="d-none d-md-table-cell">
                        {participant.player && participant.player}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {tableShow && <p>Total Participants: {totalParticipant}</p>}
            {!tableShow && <p>No sign ups yet!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participants;
