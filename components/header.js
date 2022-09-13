import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useRouter } from "next/router";
import Login from "./auth/login";
import Register from "./auth/register";

export default function Header({user}) {
  console.log(user)
  const router = useRouter();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <Link href="/" className="header-nav-brand-link">
          <a>
            Aquarium<span style={{ color: "#0096FF" }}>QL</span>
          </a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Articles</Nav.Link>
          <Nav.Link href="#pricfadsfing">Guides</Nav.Link>
          <Nav.Link href="#prifdfacing">Fish</Nav.Link>
          <Nav.Link href="#pri123cing">Pictures</Nav.Link>
          <NavDropdown title="Tools" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Water change calculator
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Temperature conversions
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Maintenance Logger
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {!user ? (
        <Nav>
          <OverlayTrigger
            rootClose
            trigger="click"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Body>
                  <Login />
                </Popover.Body>
              </Popover>
            }
          >
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            rootClose
            trigger="click"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Body>
                  <Register />
                </Popover.Body>
              </Popover>
            }
          >
            <Nav.Link eventKey={1} href="#rfdsa">
              Register
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
        ) : 
          
          <Nav>
 
            <Nav.Link eventKey={1} href="/api/auth/logout">
              Logout
            </Nav.Link>
        </Nav>
  }
      </Navbar.Collapse>
    </Navbar>
  );
}
