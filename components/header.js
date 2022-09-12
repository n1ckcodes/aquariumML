import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useState } from "react";
import { useRouter } from "next/router";
import Login from './auth/login'
import Register from './auth/register'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Header(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const router = useRouter();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <Link href="/" className="header-nav-brand-link">
          AquariumML
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {props.user ? (
          <Nav className="me-auto">
            <Nav.Link href="#features">Link1</Nav.Link>
            <Nav.Link href="#pricing">Link2</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : (
          <Nav className="me-auto"></Nav>
        )}
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
      </Navbar.Collapse>
    </Navbar>
  );
}
