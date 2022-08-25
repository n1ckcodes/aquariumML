import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/layout";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const router = useRouter();

  //Will trigger parent page to rerender and run the SSR logic
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const submit = () => {
    axios
      .post("/api/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        refreshData()
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status == 401) {
          setInvalidLogin(true);
          setLoginError(false);
        }
        else{
          setLoginError(true);
          setInvalidLogin(false);
        }
      });
  };

  return (
    <>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <input
          type="text"
          class="input input-bordered w-full max-w-xs"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label class="label"></label>
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          type="password"
          class="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label class="label"></label>
      </div>
      {loginError ? (
        <p style={{ color: "red" }}>Error logging in. Please try again.</p>
      ) : (
        <></>
      )}
      {invalidLogin ? (
        <p style={{ color: "red" }}>Invalid username or password.</p>
      ) : (
        <></>
      )}
      <button class="btn" onClick={(e) => submit()}>
        Login
      </button>
      </>
  );
}
