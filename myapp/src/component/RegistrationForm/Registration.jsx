import React, { useState } from 'react';
import './Registration.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    // username: '',
    email: '',
    password: '',
    day: '',
    month: '',
    year: '',
    course: ''
  });

  const [loginData, setLoginData] = useState({
    loginUsername: '',
    loginPassword: ''
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Simulate registration success
    setTimeout(() => {
      setRegistrationSuccess(true);
      alert("Your registration was successfully completed");
    }, 1000);
    console.log("Registration Data:", formData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.loginPassword === formData.password) {
      setTimeout(() => {
        setLoginSuccess(true);
      }, 1000);
      console.log("Login Data:", loginData);
    } else {
      alert("You have entered the wrong password. Try again.");
    }
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const courses = [
    "Full Stack Development",
    "DevOps",
    "Data Science",
    "Cyber Security",
    "Machine Learning"
  ];

  return (
    <div className="registration-form">
      {!registrationSuccess ? (
        <div className="registration">
          <h2>Register</h2>
          <form onSubmit={handleRegistrationSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleRegistrationChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleRegistrationChange}
                required
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleRegistrationChange}
                required
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleRegistrationChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleRegistrationChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <div className="dob-fields">
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleRegistrationChange}
                  required
                >
                  <option value="">Day</option>
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleRegistrationChange}
                  required
                >
                  <option value="">Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>{month}</option>
                  ))}
                </select>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleRegistrationChange}
                  required
                >
                  <option value="">Year</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="course">Course</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleRegistrationChange}
                required
              >
                <option value="">Select a course</option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      ) : (
        !showLogin ? (
          <div className="registration-success">
            <p>Your registration was successfully completed.</p>
            <button onClick={() => setShowLogin(true)}>Go to Login</button>
          </div>
        ) : (
          <div className="login">
            <h2>Login</h2>
            {!loginSuccess ? (
              <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label htmlFor="loginUsername">Username</label>
                  <input
                    type="text"
                    id="loginUsername"
                    name="loginUsername"
                    value={loginData.loginUsername}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loginPassword">Password</label>
                  <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    value={loginData.loginPassword}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <button type="submit">Login</button>
              </form>
            ) : (
              <div>
                <p>Login successful!</p>
                <p>You are now logged in.</p>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default RegistrationForm;