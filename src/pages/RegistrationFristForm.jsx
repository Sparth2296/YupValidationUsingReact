import React from 'react';
import '../assets/css/yupvalidaation.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegistrationFristForm = () => {
  const navigate = useNavigate();

  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('First Name is required')
      .min(2, 'Must be at least 2 characters'),
    lastName: Yup.string()
      .required('Last Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    number: Yup.string()
      .matches(/^\d{10}$/, 'Number must be 10 digits')
      .required('Number is required'),
  });

  // ✅ Formik setup
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      number: '',
    },
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem('userBasicInfo', JSON.stringify(values));
      navigate('/RegistretionSecondForm');
    },
  });

  return (
    <div>
      <form className='form' onSubmit={formik.handleSubmit}>
        <h1 className="formHdng">User Registration Form</h1>

        <div className="form-box">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="error">{formik.errors.firstName}</div>
          )}
        </div>

        <div className="form-box">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="error">{formik.errors.lastName}</div>
          )}
        </div>

        <div className="form-box">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-box">
          <label htmlFor="number">Number:</label>
          <input
            type="text"
            name="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
          />
          {formik.touched.number && formik.errors.number && (
            <div className="error">{formik.errors.number}</div>
          )}
        </div>

        <button type="submit" className="submitbtn">Next</button>
      </form>
    </div>
  );
};

export default RegistrationFristForm;
