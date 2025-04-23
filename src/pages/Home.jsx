import React, { useEffect, useState } from "react";
import "../assets/css/yupvalidaation.css";

const Home = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const basicInfo = JSON.parse(localStorage.getItem("userBasicInfo"));
    const profileInfo = JSON.parse(localStorage.getItem("userProfile"));
    const password = localStorage.getItem("userPassword");

    if (basicInfo && profileInfo && password) {
      const fullData = {
        firstName: basicInfo.firstName,
        lastName: basicInfo.lastName,
        email: basicInfo.email,
        number: basicInfo.number,
        userName: profileInfo.userName,
        profilePhoto: profileInfo.profilePhoto,
        password: password,
      };
      setUserData(fullData);
    }
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
    >
      <div
        className="user-card"
        style={{
          width: "350px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        {userData.profilePhoto && (
          <img
            src={userData.profilePhoto}
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "20px",
            }}
          />
        )}

        <h2>
          {userData.firstName} {userData.lastName}
        </h2>
        <p>
          <strong>Username:</strong> {userData.userName}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Phone:</strong> {userData.number}
        </p>
        <p>
          <strong>Password:</strong> {userData.password}
        </p>
      </div>
    </div>
  );
};

export default Home;
