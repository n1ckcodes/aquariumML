import { useState } from "react";
import RegistrationForm from "./register";
import LoginForm from "./login";
export default function LoginRegistrationContainer() {
  const [activeTab, setActiveTab] = useState("tab-1");
  return (
    <div className="border border-white p-5 w-full">
      <div class="tabs">
        <a
          className={
            activeTab == "tab-1"
              ? "tab tab-lifted tab-active w-1/2 text-lg"
              : "tab tab-lifted w-1/2"
          }
          id="tab-1"
          onClick={() => setActiveTab("tab-1")}
        >
          Login
        </a>
        <a
          className={
            activeTab == "tab-2"
              ? "tab tab-lifted tab-active text-lg"
              : "tab tab-lifted"
          }
          id="tab-2"
          onClick={() => setActiveTab("tab-2")}
        >
          Register
        </a>
      </div>

      {activeTab == "tab-1" ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
}
