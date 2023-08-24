import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Input from "./Input";
import useLogin from "../api/auth/useLogin";
import { isIncorrectAtom } from "../atom";
import "../index.css";

const dummyUser = {
  username: "test19",
  password: "test19!!",
};

const Form: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginButtonActive, setIsLoginButtonActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isIncorrect, setIsIncorrect] = useRecoilState(isIncorrectAtom);
  const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  const navigate = useNavigate();
  const { handleLogin, isLoggedIn } = useLogin();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!korean.test(value)) {
      setUsername(value);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!korean.test(value)) {
      setPassword(value);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    //로그인 유무를 확인하는 api와 통신
    setIsIncorrect(false);
    //handleLogin(username, password);
    handleDummyLogin(username, password);
  };

  const handleDummyLogin = (username: string, password: string) => {
    if (username !== dummyUser.username) {
      setIsIncorrect(true);
    } else if (password !== dummyUser.password) {
      setIsIncorrect(true);
    } else {
      localStorage.setItem(
        "accessToken",
        JSON.stringify({ token: "accessToken" })
      );
      navigate("/");
    }
  };

  useEffect(() => {
    if (username === "" || password === "") {
      setIsIncorrect(false);
      setErrorMessage("");
    }
  }, [username, password]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isIncorrect) {
      setErrorMessage("아이디 혹은 비밀번호가 일치하지 않습니다");
    }
  }, [isIncorrect]);

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
        isActive={username.trim() !== ""}
      />
      <Input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        isActive={password.trim() !== ""}
      />
      <p
        className={`text-red-500 text-xs text-center ${
          isIncorrect ? "animate-shake" : ""
        }`}
      >
        {errorMessage}
      </p>
      <Input type="submit" isLoginButtonActive={isLoginButtonActive} />
    </form>
  );
};

export default Form;
