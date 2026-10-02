import Container from "./Container";
import logo from "../../assets/Logo.png";
import Btn from "./Btn";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-blackPrimary fixed  w-full z-50 top-0 left-0">
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
          <Btn>Contact Us</Btn>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
