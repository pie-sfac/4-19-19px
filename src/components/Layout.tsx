import { ReactNode } from "react";
import Header from "./Header/Header";
import NavigationBar from "./NavigationBar";

interface LayoutProp {
  children: ReactNode;
  type: string;
  isNavigationDisplay?: boolean;
}

const Layout = ({ children, type, isNavigationDisplay = true }: LayoutProp) => {
  return (
    <div
      className={[
        "w-[360px] min-h-screen  mx-auto",
        type === "video" ? "bg-black" : "bg-white",
      ].join(" ")}
    >
      <Header type={type} />
      <div className="pb-14 ">{children}</div>
      <NavigationBar isNavigationDisplay={isNavigationDisplay} />
    </div>
  );
};

export default Layout;
