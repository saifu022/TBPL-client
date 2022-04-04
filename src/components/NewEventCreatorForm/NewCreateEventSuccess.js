import React from "react";
import BasicSingleCard from "../../basic-components/BasicSingleCard";

const NewCreateEventSuccess = () => {
  const title = "Event created successfully!";
  const text = "";
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

export default NewCreateEventSuccess;
