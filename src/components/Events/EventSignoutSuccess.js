import React from "react";
import BasicSingleCard from "../../basic-components/BasicSingleCard";

const EventSignoutSuccess = () => {
  const title = "Sign Out Success!";
  const text =
    "Your event registration is CANCELED successfully. Please sign back in if it was by mistake.";
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

export default EventSignoutSuccess;
