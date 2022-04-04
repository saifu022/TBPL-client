import React from "react";

const BasicSingleCard = ({ title, text, btnText, btnLink }) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="m-4 p-3 border rounded" style={{ width: "30rem" }}>
          <h2 className="m-3 mb-4">{title}</h2>
          <p>{text}</p>
          <a href={btnLink} className="btn btn-primary">
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BasicSingleCard;
