import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import pageData from "../../pageData/data";
import AllUsersProfile from "./AllUsersProfile";

const AllUsers = () => {
  const { userContext } = useContext(AppContext);
  const [user] = userContext;
  const [users, setUsers] = useState([]);
  const { backend } = pageData;
  const { admin } = user;
  useEffect(() => {
    fetch(`${backend}/users/all`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [backend]);

  return (
    <div>
      {admin ? (
        <div className="d-flex justify-content-center flex-wrap mt-4 mb-4">
          {users.map((everyUser) => (
            <AllUsersProfile key={everyUser._id} everyUser={everyUser} />
          ))}
        </div>
      ) : (
        <div> You are not an admin </div>
      )}
    </div>
  );
};

export default AllUsers;
