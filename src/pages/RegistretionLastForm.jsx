import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../assets/css/yupvalidaation.css";
import { useNavigate } from "react-router-dom";

const RegistretionLastForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    password: Yup.string()
    .required('Password is required')
    .min(8, 'Must be at least 8 characters')
    .matches(/[A-Z]/, 'Must contain an uppercase letter')
    .matches(/[a-z]/, 'Must contain a lowercase letter')
    .matches(/\d/, 'Must contain a number')
    .matches(/[@$!%*?&]/, 'Must contain a special character (@$!%*?&)'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("userPassword", values.password);
      navigate("/Home");
    },
  });

  return (
    <div>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h1 className="formHdng">User Password Selection Form</h1>

        <div className="form-box">
          <label htmlFor="password">Create Password:</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="form-box">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="submitbtn"
          onClick={() => {
            navigate;
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistretionLastForm;
