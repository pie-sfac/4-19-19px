import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import useLogout from "../api/auth/useLogout";

const MyPage = () => {
  const { handleLogout, isLoggedOut } = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedOut) {
      navigate("/login");
    }
  }, [isLoggedOut]);

  return (
    <Layout type="myPage">
      <button
        className="p-4"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </Layout>
  );
};

export default MyPage;
