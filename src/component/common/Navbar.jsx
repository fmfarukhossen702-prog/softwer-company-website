import Container from "./Container";
import logo from "../../assets/Logo.png";
import Btn from "./Btn";
import { NavLink } from "react-router";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Navbar = ({ btn, footer, isFooter = false }) => {
  return (
    <nav
      className={`bg-blackPrimary w-full ${
        isFooter ? "" : "fixed z-50 top-0 left-0"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <div>
            <img src={logo} alt="logo" className="" />
          </div>
          <ul className="flex items-center gap-5.5 text-white ">
            <li>
              {" "}
              <NavLink to="/" end>
                Home
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/services" end>
                Services
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/portfolio" end>
                Portfolio
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/about" end>
                About me
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/careers" end>
                Careers
              </NavLink>{" "}
            </li>
          </ul>
          <div>
            <Btn className={` ${btn} `}>Contact Us</Btn>
          </div>
          <div
            className={` ${footer}  flex items-center gap-4 py-2 px-3 rounded-2xl border border-[#ffffff1e]  `}
          >
            <div className=" w-16 h-16 bg-[#4645455a] rounded-2xl flex justify-center items-center ">
              <FaFacebook className="text-primary  text-2xl " />
            </div>
            <div className=" w-16 h-16 bg-[#4645455a] rounded-2xl flex justify-center items-center ">
              <FaTwitter className="text-primary  text-2xl " />
            </div>
            <div className=" w-16 h-16 bg-[#4645455a] rounded-2xl flex justify-center items-center ">
              <FaInstagramSquare className="text-primary  text-2xl " />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
