import React, { useState, useEffect } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import useLogin from "../api/auth/useLogin";

const Form: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginButtonActive, setIsLoginButtonActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { handleLogin, isLoggedIn, isUncorrect } = useLogin();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    //로그인 유무를 확인하는 api와 통신
    handleLogin(username, password);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isUncorrect) {
      setErrorMessage("아이디 혹은 비밀번호가 일치하지 않습니다");
    }
  }, [isUncorrect]);

  useEffect(() => {
    if (username.trim() !== "" && password.trim() !== "") {
      setIsLoginButtonActive(true);
    } else {
      setIsLoginButtonActive(false);
    }
  }, [username, password]);

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        type="text"
        value={username}
        onChange={handleUsernameChange}
      />
      <Input
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {/* 추후 눈모양 아이콘으로 수정? + CSS로 토글 위치 수정  */}
      <p className="text-red-500 text-xs">{errorMessage}</p>
      <Input
        type="submit"
        isLoginButtonActive={isLoginButtonActive}
      />
    </form>
  );
};

export default Form;
