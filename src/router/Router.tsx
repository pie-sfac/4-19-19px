import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotificationPage from "../pages/NotificationPage";
import PersonalListPage from "../pages/PersonalListPage";
import PersonalDetailPage from "../pages/PersonalDetailPage";
import ReservationPage from "../pages/ReservationPage";
import VideoPage from "../pages/VideoPage";
import PrivateRoutes from "../components/PrivateRoutes";
import MyPage from "../pages/MyPage";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route
              path="/"
              element={<PersonalDetailPage type="home" />}
            />
            <Route
              path="/alarm"
              element={<NotificationPage />}
            />
            <Route
              path="/personal"
              element={<PersonalListPage />}
            />
            <Route
              path="/personal/video/:id"
              element={<VideoPage />}
            />
            <Route
              path="/personal/:uuid"
              element={<PersonalDetailPage type="detail" />}
            />
            <Route
              path="/reservation"
              element={<ReservationPage />}
            />
            <Route
              path="/reservation-reserved"
              element={<ReservationPage />}
            />
            <Route
              path="/mypage"
              element={<MyPage />}
            />
          </Route>
          <Route
            path="/login"
            element={<LoginPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
