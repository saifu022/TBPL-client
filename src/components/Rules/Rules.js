import React from "react";
import rulesImage from "./../../images/TBPL2021Rules.jpg";
import pageData from "./../../pageData/data";

const Rules = () => {
  const { rules } = pageData;
  const { rulesLink } = rules;
  return (
    <div className="w-100">
      <img
        className="img-fluid"
        src={rulesLink || rulesImage}
        alt="Reload the page to see rules"
      />
    </div>
  );
};

export default Rules;
