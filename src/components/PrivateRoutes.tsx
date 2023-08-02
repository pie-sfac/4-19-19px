import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes: React.FC = () => {
  const isCheckToken = localStorage.getItem("accessToken");
  return isCheckToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
