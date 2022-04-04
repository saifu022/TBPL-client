import React from "react";
import BasicSingleCard from "../../basic-components/BasicSingleCard";

const SignInSuccess = () => {
  return (
    <div>
      <BasicSingleCard
        title="Registration successful!"
        text=" Wanna check who else is coming? (if your are in computer you can
            also check who is participating with what)"
        btnText="Check who else is going!"
        btnLink="/eid/2022/whoIsGoing"
      />
    </div>
  );
};

export default SignInSuccess;
