import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function RegistrationForm(props) {
  const [registrationError, setRegistrationError] = useState(false);
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (values.password != values.passwordConfirmation) {
      errors.passwordConfirmation = "Passwords do not match";
    }

    if (!values.username) {
      errors.username = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
      username: "",
    },
    validate,
    onSubmit: (values) => {
      const { username, password, email } = values;
      axios
        .post("/api/auth/register", {
          username: username,
          password: password,
          email: email,
          username: username,
        })
        .then((response) => {
          if (response.data.status === "failure") {
            setRegistrationError(response.data.msg);
          }
          console.log(props);
          props.refreshData();
        })
        .catch((error) => {
          console.log(error);
          setRegistrationError(error.response.data);
        });
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          name="username"
        />
      </Form.Group>
      {formik.touched.username && formik.errors.username ? (
        <div style={{ color: "red" }}>{formik.errors.username}</div>
      ) : null}
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          name="email"
        />
      </Form.Group>

      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
        />
      </Form.Group>

      {formik.touched.password && formik.errors.password ? (
        <div style={{ color: "red" }}>{formik.errors.password}</div>
      ) : null}
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          onChange={formik.handleChange}
          value={formik.values.passwordConfirmation}
          name="passwordConfirmation"
        />
      </Form.Group>

      {formik.touched.passwordConfirmation &&
      formik.errors.passwordConfirmation ? (
        <div style={{ color: "red" }}>{formik.errors.passwordConfirmation}</div>
      ) : null}

      {registrationError && (
        <div class="text-red-400 font-bold mt-5">{registrationError}</div>
      )}
     <div className="d-grid gap-2">
      <Button
        variant="secondary"
        size="md"
        type="submit"
      >
        Register
      </Button>
    </div>
    </Form>
  );
}
