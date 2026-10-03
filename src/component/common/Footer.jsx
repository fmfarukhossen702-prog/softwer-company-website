import Container from "./Container";
import logo from "../../assets/Logo.png";
import { NavLink } from "react-router";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-blackPrimary text-white">
      <Container className="px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_1.4fr]">
          <section>
            <img src={logo} alt="Catalyst Analytics" className="mb-5 w-40" />
            <p className="max-w-sm text-sm leading-6 text-white/65">
              Turning data into decisions with thoughtful analytics and AI.
            </p>
            <div className="mt-6 flex gap-3" aria-label="Social media">
              <span className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-primary">
                <FaFacebook aria-hidden="true" />
              </span>
              <span className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-primary">
                <FaTwitter aria-hidden="true" />
              </span>
              <span className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-primary">
                <FaInstagramSquare aria-hidden="true" />
              </span>
            </div>
          </section>

          <nav aria-label="Footer navigation">
            <h2 className="mb-4 text-sm font-semibold uppercase text-white/50">
              Explore
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <NavLink to="/" end className="hover:text-primary">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-primary">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="hover:text-primary">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-primary">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/careers" className="hover:text-primary">
                  Careers
                </NavLink>
              </li>
            </ul>
          </nav>

          <section>
            <h2 className="mb-4 text-sm font-semibold uppercase text-white/50">
              Contact
            </h2>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <IoIosMail className="mt-0.5 shrink-0 text-lg text-primary" />
                <a
                  href="mailto:contact@catalystanalytics.io"
                  className="break-all hover:text-white"
                >
                  contact@catalystanalytics.io
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-0.5 shrink-0 text-primary" />
                <a href="tel:+14697124672" className="hover:text-white">
                  +1 (469) 712-4672
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IoLocation className="mt-0.5 shrink-0 text-lg text-primary" />
                <span>5511 Parkcrest Dr, Suite 103, Austin, TX 78731</span>
              </li>
            </ul>
          </section>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Catalyst Analytics. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
