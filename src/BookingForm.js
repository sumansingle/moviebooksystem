import React, { useState } from "react";
import "./BookingForm.css";
const BookingForm = ({ movieName, movieDetails }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "/";
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-field">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Movie Name:</label>
          <input type="text" value={movieName} readOnly />
        </div>
        <div className="form-field">
          <label>Movie Languages:</label>
          <input type="text" value={movieDetails} />
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
