import { Outlet } from "react-router";
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
const Root = () => {
  return (
    <div>
      <Navbar footer="hidden" />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Root;
