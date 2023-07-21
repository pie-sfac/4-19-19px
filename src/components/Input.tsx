import React from "react";

interface InputProps {
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, value, onChange }) => {
    
    return (
        <div>
            <input id={type} type={type} value={value} onChange={onChange} placeholder={type} />
        </div>
    )
}

export default Input;