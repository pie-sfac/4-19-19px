import React, { useState } from "react";

interface InputProps {
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoginButtonActive?: boolean;
}

const Input = ({ type, value, onChange, isLoginButtonActive }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const defaultStyle = "rounded-lg border border-solid my-1 w-72 px-3 py-3";

  return (
    <>
      {type === "text" && (
        <input
          id={type}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={"아이디"}
          className={[defaultStyle, "border-gray-400"].join(" ")}
        />
      )}
      {type === "password" && (
        <div className="relative">
          <input
            id={type}
            type={isPasswordVisible ? "text" : "password"}
            value={value}
            onChange={onChange}
            placeholder={"비밀번호"}
            className={[defaultStyle, "border-gray-400"].join(" ")}
          />
          <button
            type="button"
            onClick={handleTogglePasswordVisibility}
            className="absolute right-2 top-3"
          >
            👁‍🗨
          </button>
        </div>
      )}
      {type === "submit" && (
        <input
          id={type}
          type={type}
          value={"로그인"}
          disabled={!isLoginButtonActive}
          className={[
            defaultStyle,
            "border-none text-sm",
            isLoginButtonActive
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-500",
          ].join(" ")}
        />
      )}
    </>
  );
};

export default Input;
