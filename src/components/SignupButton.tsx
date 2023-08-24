import React from "react";
import { Link } from "react-router-dom";

const SignupButton : React.FC = () => {

    return (
        <>
            <Link to="/signup">
                <p className="text-xs hover:underline">포인티 계정이 없으세요? | 회원가입</p>
            </Link>
        </>
    )
}

export default SignupButton