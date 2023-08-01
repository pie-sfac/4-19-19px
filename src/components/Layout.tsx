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
    <div>
      <Header type={type} />
      <div className="px-4 pb-10 ">{children}</div>
      <NavigationBar isNavigationDisplay={isNavigationDisplay} />
    </div>
  );
};

export default Layout;
