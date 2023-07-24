import React from "react";
import Form from "../components/Form";
import SignupButton from "../components/SignupButton";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-blue-500 text-3xl font-bold mt-32">Poin T</h1>
      <div className="flex flex-col items-center mt-[15%]">
        <Form />
        <div className="my-4">
          <SignupButton />
          </div>
      </div>
    </div>
  )
};

export default LoginPage;