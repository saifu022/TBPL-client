import React from "react";
import BasicSingleCard from "../../basic-components/BasicSingleCard";

const SignUpSuccess = () => {
  return (
    <div>
      <BasicSingleCard
        title="Sign Up successful!"
        text="Welcome to TBPL 2022!"
        btnText="Back!"
        btnLink="/home"
      />
    </div>
  );
};

export default SignUpSuccess;
