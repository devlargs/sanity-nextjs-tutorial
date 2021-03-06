import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import ThemeToggle from "components/ThemeToggle";

const MovieNavbar = ({ theme, toggleTheme }) => {
  return (
    <Navbar
      variant={theme.type}
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg"
    >
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">
          <a style={{ textDecoration: "none" }}>Mock Movie Database</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        e
        <Nav className="ml-auto">
          <ThemeToggle onChange={toggleTheme} />
          <Nav.Link
            as={() => (
              <Link href="/">
                <a
                  className="fj-navbar-item fj-navbar-link"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </Link>
            )}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MovieNavbar;
