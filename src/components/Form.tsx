import React, { useEffect, useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const Form: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoginButtonActive, setIsLoginButtonActive] = useState(false);

    const navigate = useNavigate();
    
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };
    
    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        //로그인 유무를 확인하는 api와 통신
        const isLoggedIn = true
        if(isLoggedIn) {
            navigate("/")
        } else {
            alert("아이디, 비밀번호를 확인해주세요")
        }
    };

    useEffect(() => {
        if (username.trim() !== "" && password.trim() !== "") {
            setIsLoginButtonActive(true)
        } else {
            setIsLoginButtonActive(false)
        }
    },[username, password])


    return (
        <form onSubmit={handleFormSubmit}>
            <Input type="text" value={username} onChange={handleUsernameChange} />
            <Input type={isPasswordVisible ? "text" : "password"} value={password} onChange={handlePasswordChange} />
            <button type="button" onClick={handleTogglePasswordVisibility}>👁‍🗨</button>
            {/* 추후 눈모양 아이콘으로 수정? + CSS로 토글 위치 수정  */}
            <button
                type="submit"
                style={{
                    cursor: isLoginButtonActive ? "pointer" : "auto",
                    backgroundColor: isLoginButtonActive ? "blue" : "lightgrey",
                    color: isLoginButtonActive ? "white" : "grey",
                }}
                disabled={!isLoginButtonActive}
            >
                로그인
            </button>
        </form>
    );
}

export default Form;