import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isIncorrectAtom } from "../atom";

interface InputProps {
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoginButtonActive?: boolean;
  isActive?: boolean;
}

const Input = ({
  type,
  value,
  onChange,
  isLoginButtonActive,
  isActive,
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isIncorrect, setIsIncorrect] = useRecoilState(isIncorrectAtom);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const defaultStyle =
    "rounded-lg border border-solid my-1 w-72 px-3 py-3 focus:outline-none";

  const borderStyle = isActive
    ? isIncorrect
      ? "border-red-500"
      : "border-blue-500"
    : "border-gray-400";

  return (
    <>
      {type === "text" && (
        <input
          id={type}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={"아이디"}
          className={[defaultStyle, `${borderStyle}`].join(" ")}
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
            className={[defaultStyle, `${borderStyle}`].join(" ")}
          />
          {value && (
            <button
              type="button"
              onClick={handleTogglePasswordVisibility}
              className="absolute right-3 top-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={isPasswordVisible ? " #2D62EA" : "black"}
              >
                <path
                  d="M12 2.5C12.2761 2.5 12.5 2.72386 12.5 3V5C12.5 5.27614 12.2761 5.5 12 5.5C11.7239 5.5 11.5 5.27614 11.5 5V3C11.5 2.72386 11.7239 2.5 12 2.5Z"
                  fill={isPasswordVisible ? " #2D62EA" : "black"}
                />
                <path
                  d="M12 7.25C7.1468 7.25 4.14015 10.2569 2.40255 12.5466C2.24208 12.7581 2.20535 13.0387 2.30598 13.2843C3.30008 15.711 5.16596 17.1226 7.04566 17.8967C8.89734 18.6593 10.8013 18.8223 12.0274 18.7362C17.7485 18.725 20.833 15.1963 21.6838 13.3081C21.7906 13.071 21.767 12.7955 21.6214 12.58C18.7418 8.31986 14.0428 7.25 12 7.25ZM12 9.75C13.7949 9.75 15.25 11.2051 15.25 13C15.25 14.7949 13.7949 16.25 12 16.25C10.2051 16.25 8.75001 14.7949 8.75001 13C8.75001 11.2051 10.2051 9.75 12 9.75ZM9.17922 9.17788C8.0089 10.043 7.25001 11.4329 7.25001 13C7.25001 14.7342 8.17941 16.2514 9.5673 17.0806C8.93903 16.9632 8.27308 16.78 7.61685 16.5098C6.11823 15.8926 4.70535 14.8388 3.86775 13.1055C5.08438 11.5768 6.79287 9.93533 9.17922 9.17788ZM14.689 16.9161C15.9338 16.0597 16.75 14.6252 16.75 13C16.75 11.5308 16.083 10.2174 15.0353 9.34611C16.7253 9.94762 18.6592 11.0787 20.1255 13.062C19.4283 14.2749 17.6792 16.1677 14.689 16.9161Z"
                  fill={isPasswordVisible ? " #2D62EA" : "black"}
                />
                <path
                  d="M3.64645 3.64645C3.84172 3.45118 4.1583 3.45118 4.35356 3.64645L6.35356 5.64645C6.54882 5.84171 6.54882 6.15829 6.35356 6.35355C6.1583 6.54882 5.84172 6.54882 5.64645 6.35355L3.64645 4.35355C3.45119 4.15829 3.45119 3.84171 3.64645 3.64645Z"
                  fill={isPasswordVisible ? " #2D62EA" : "black"}
                />
                <path
                  d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645C20.1583 3.45118 19.8417 3.45118 19.6465 3.64645L17.6465 5.64645C17.4512 5.84171 17.4512 6.15829 17.6465 6.35355C17.8417 6.54882 18.1583 6.54882 18.3536 6.35355L20.3536 4.35355Z"
                  fill={isPasswordVisible ? " #2D62EA" : "black"}
                />
              </svg>
            </button>
          )}
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
