/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Image } from "theme-ui";
import { Link } from "components/link";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/logo";
import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobileDrawer";
import menuItems from "./header.data";
import { Dropdown } from "react-bootstrap";
import "./header.css";

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} className="HeaderA">
        <Container sx={styles.container}>
          <Logo />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label, offset }, i) => (
              <ScrollLink
                activeClass="active"
                sx={styles.nav.navLink}
                to={path}
                spy={true}
                smooth={true}
                offset={offset}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
            <Dropdown>
              <Dropdown.Toggle className="dropdown" id="dropdown-basic">
                Our Services
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link path="/webdev" label="Web Developement" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/appdev" label="App Developement" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/socialmedia" label="Social Media Management" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/graphicdesign" label="Graphics Design" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/videoprod" label="Video Production" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/contentwriting" label="Content Writing" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/leadgeneration" label="Lead Generation" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/seomanagement" label="SEO Management" />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Flex>
          <Link path="/aboutus" label="About Us" sx={styles.loginBtn}></Link>
          <Link
            path="/contactus"
            label="Contact Us"
            sx={styles.headerBtn}
            variant="buttons.primary"
          />

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    // backgroundColor: "#4589d6",
    backgroundColor: "#2667e0",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    color: "#ffffff",
    padding: "6.5px 24px",
    display: ["none", null, null, null, "inline-block"],
    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    transition: "all 500ms ease",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#eb1e4b",
    },
  },
  loginBtn: {
    ml: "auto",
    display: "inline-flex",
    alignItems: "center",
    fontSize: "15px",
    color: "#0F2137",
    fontWeight: 300,
    mr: "20px",
    img: {
      mr: "9px",
    },
  },
  header: {
    color: "text_white",
    fontWeight: "normal",
    py: "25px",
    width: "100%",
    backgroundColor: "#fff",
    transition: "all 0.4s ease",
    borderBottom: "1px solid #E9EDF5",
    position: "fixed",
    top: 0,
    left: 0,

    "&.sticky": {
      backgroundColor: "background",
      color: "text",
      py: "15px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    maxWidth: ["100%", null, null, null, null, "1170px", "1280px"],
  },
  nav: {
    ml: "50px",
    "@media screen and (max-width: 960px)": {
      display: "none",
    },
    navLink: {
      fontSize: "16px",
      color: "#02073E",
      fontWeight: "400",
      cursor: "pointer",
      lineHeight: "1.2",
      mr: "48px",
      transition: "500ms",
      "@media(max-width:1024px)": {
        mr: "30px",
      },
      ":last-child": {
        mr: "0",
      },
      "&:hover, &.active": {
        color: "#eb1e4b",
      },
    },
  },
};
