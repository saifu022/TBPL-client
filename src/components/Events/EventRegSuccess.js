import React from "react";
import BasicSingleCard from "../../basic-components/BasicSingleCard";

const EventRegSuccess = () => {
  const title = "Event Signup Success!";
  const text = "Your event registration is Successful.";
  const btnText = "Back to Events!";
  const btnLink = "/events";

  return (
    <div>
      <BasicSingleCard
        title={title}
        text={text}
        btnText={btnText}
        btnLink={btnLink}
      />
    </div>
  );
};

export default EventRegSuccess;
