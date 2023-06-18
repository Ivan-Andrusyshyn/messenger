import { Outlet } from "react-router-dom";
import "./header.css";
import { Suspense } from "react";
import { Loader } from "../Loader/Loader";
const Header = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};
export default Header;
