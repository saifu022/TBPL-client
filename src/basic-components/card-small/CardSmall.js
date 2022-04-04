import React from "react";

const CardSmall = (props) => {
  const { cardTitle, cardText, btnGoTo, btnText } = props;
  return (
    <div
      className="card rounded m-2"
      style={{ width: "18rem", height: "11rem" }}
    >
      <div className="card-body">
        {cardTitle && <h5 className="card-title">{cardTitle}</h5>}
        {cardText && <p className="card-text">{cardText}</p>}
        {btnText && (
          <a href={btnGoTo} className="btn btn-primary">
            {btnText}
          </a>
        )}
      </div>
    </div>
  );
};

export default CardSmall;
