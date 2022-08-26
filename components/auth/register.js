import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";

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
          console.log(props)
          props.refreshData();
        })
        .catch((error) => {});
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
        <div class="card flex-shrink-0 w-full max-w-sm bg-base-100">
          {registrationError && <div class="color-red">{registrationError}</div>}
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input
                type="text"
                id="text"
                name="username"
                class="input input-bordered"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div style={{ color: "red" }}>{formik.errors.username}</div>
              ) : null}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                class="input input-bordered"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                class="input input-bordered"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                class="input input-bordered"
                id="passwordConfirmation"
                name="passwordConfirmation"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirmation}
              />
              {formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation ? (
                <div style={{ color: "red" }}>
                  {formik.errors.passwordConfirmation}
                </div>
              ) : null}
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
    </form>
  );
}
