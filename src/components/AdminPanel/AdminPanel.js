import React, { useContext } from "react";
import { AppContext } from "../../App";
import CardSmall from "../../basic-components/card-small/CardSmall";

const AdminPanel = () => {
  const { userContext } = useContext(AppContext);
  const [user] = userContext;
  const { admin } = user;
  return (
    //all actions are listed in card format. Create a new card for new action and new components accordingly
    <div className="gimme-space">
      <h1>Admin panel</h1>
      {admin ? (
        <div className="d-flex flex-wrap justify-content-center align-items-center m-4 ">
          <CardSmall
            cardTitle="Create new Event"
            cardText="Create your own event and ask for attendance!"
            btnGoTo="/createnewevent"
            btnText="Create Event"
          />
          <CardSmall
            cardTitle="Users!"
            cardText="view and edit users info!"
            btnGoTo="/user/all"
            btnText="View users"
          />
        </div>
      ) : (
        <p>This profile does not have admin rights!</p>
      )}
    </div>
  );
};

export default AdminPanel;
