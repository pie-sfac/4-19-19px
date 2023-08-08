import { useState } from "react";
import Layout from "../Layout";
import { NavLink, useLocation } from "react-router-dom";
import ReservationTabAll from "./ReservationTabAll";
import ReservationTabReserved from "./ReservationTabReserved";

const ReservationTabNav = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(
    location.pathname === "/reservation" ? "all" : "reserved"
  );
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Layout type="reservation">
      <div className="p-4">
        <ul className="flex justify-between">
          <li className="w-3/6 text-center ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-[#2D62EA] border-b-2 block text-[#2D62EA] font-bold pb-1 "
                  : "text-center border-b block pb-1"
              }
              onClick={() => {
                handleTabChange("all");
              }}
              to="/reservation"
            >
              전체강의
            </NavLink>
          </li>
          <li className="w-3/6 text-center">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-[#2D62EA] border-b-2 block text-[#2D62EA] font-bold pb-1 "
                  : "text-center border-b block pb-1"
              }
              onClick={() => handleTabChange("reserved")}
              to="/reservation-reserved"
            >
              예약중인 강의
            </NavLink>
          </li>
        </ul>
        {activeTab === "all" ? (
          <ReservationTabAll />
        ) : (
          <ReservationTabReserved />
        )}
      </div>
    </Layout>
  );
};

export default ReservationTabNav;
