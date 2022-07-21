import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

export default function RegistrationForm(props) {
  const validate = (values) => {
    const errors = {};

    console.log(values)
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
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div class="hero min-h-screen bg-base-200">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
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
              {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation  ? (
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
      </div>
    </form>
  );
}
