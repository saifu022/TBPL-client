import React from "react";
import BasicSingleCard from "../../basic-components/BasicSingleCard";

const EventDeleteSuccess = () => {
  const title = "Event deleted successfully!";
  const text =
    "If it was by mistake please create it again and ask people to join!";
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

export default EventDeleteSuccess;
