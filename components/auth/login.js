import { useState } from "react";
import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

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
      .then(() => {
        refreshData();
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 401) {
          setInvalidLogin(true);
          setLoginError(false);
        } else {
          setLoginError(true);
          setInvalidLogin(false);
        }
      });
  };

  return (

    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      {loginError ? (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Error logging in. Please try again.
        </p>
      ) : (
        <></>
      )}
      {invalidLogin ? (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Invalid username or password.
        </p>
      ) : (
        <></>
      )}
         <div className="d-grid gap-2">
      <Button variant="secondary" size="md" onClick={() => submit()} type="submit">
        Login
      </Button>
      </div>
    </Form>
  );
}
