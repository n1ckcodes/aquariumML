import { useState } from "react";
import RegistrationForm from "./register";
import LoginForm from "./login";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
export default function LoginRegistrationContainer() {
  const [activeTab, setActiveTab] = useState("tab-1");
  return (
    <div
      style={{
        background: "white",
        border: "thin solid black",
        borderRadius: "10px",
      }}
    >
      <Row >
        <div
          class="tabs"
          style={{
            fontSize: "1.5em",
            width: "100%",
            display: "inline-block",
            textAlign: "center",
            padding:""
          }}
        >
          <a id="tab-1" onClick={() => setActiveTab("tab-1")}>
            <Col
              xs={6}
              style={{ display: "inline-block" }}
              className={activeTab == 'tab-1' ? "tabs-btn-is-active" : "tabs-btn"}
            >
              Login
            </Col>
          </a>
          <a id="tab-2" onClick={() => setActiveTab("tab-2")}>
            <Col
              xs={6}
              className={activeTab == 'tab-2' ? "tabs-btn-is-active" : "tabs-btn"}
              style={{ display: "inline-block" }}
            >
              Register
            </Col>
          </a>
        </div>
      </Row>
      <hr />
      <div style={{padding:"20px"}}>
      {activeTab == "tab-1" ? <LoginForm /> : <RegistrationForm />}
      </div>
    </div>
  );
}
