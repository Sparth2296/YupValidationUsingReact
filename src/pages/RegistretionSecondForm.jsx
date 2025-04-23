import React, { useState } from 'react';
import '../assets/css/yupvalidaation.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegistretionSecondForm = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null); 

  
  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('User Name is required'),
    profilePhoto: Yup.mixed()
      .required('Profile photo is required'),
  });


  const formik = useFormik({
    initialValues: {
      userName: '',
      profilePhoto: null,
    },
    validationSchema,


    onSubmit: (values) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        const userData = {
          userName: values.userName,
          profilePhoto: base64Image,
        };
        localStorage.setItem('userProfile', JSON.stringify(userData));
        navigate('/RegistretionLastForm');
      };

      if (values.profilePhoto) {
        reader.readAsDataURL(values.profilePhoto);
      }
    },
  });


  const handleFileChange = (event) => {

    const file = event.currentTarget.files[0];
    if (file) {
      formik.setFieldValue("profilePhoto", file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h1  className="formHdng">User Profile Form</h1>


        {preview && (
          <div className="form-box">
            <label>Preview:</label><br />
            <img
              src={preview}
              alt="Profile Preview"
              style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border:'10px solid white',margin:'0 auto' }}
            />
          </div>
        )}

           <div className="form-box">
          <label htmlFor="profilePhoto">Profile Picture:</label>
          <input
            type="file"
            name="profilePhoto"
            accept="image/*"
            onChange={handleFileChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.profilePhoto && formik.errors.profilePhoto ? (
            <div className="error">{formik.errors.profilePhoto}</div>
          ) : null}
        </div>
        <div className="form-box">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className="error">{formik.errors.userName}</div>
          ) : null}
        </div>

       

       

        <button type="submit" className="submitbtn">Next</button>
      </form>
    </div>
  );
};

export default RegistretionSecondForm;
