import React from "react";
import BasicSingleCard from "../../basic-components/BasicSingleCard";

const GetEmBack = () => {
  return (
    <div>
      <BasicSingleCard
        title="Registration canceled!"
        text=" We will miss you a lot. If it was done by mistake, Sign back in!"
        btnText="Sign back In!"
        btnLink="/eid/2022/registration"
      />
    </div>
  );
};

export default GetEmBack;
