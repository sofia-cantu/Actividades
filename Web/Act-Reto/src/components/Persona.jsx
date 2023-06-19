import React, { useState, useEffect } from 'react';
import './Persona.css';
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';

function Persona() {
  const [showLink, setShowLink] = useState(false);

  const handleButtonClick = () => {
    setShowLink(true);
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [genderOptions, setGenderOptions] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');
  const [roleOptions, setRoleOptions] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [zipCode, setZipCode] = useState('');

  useEffect(() => {
    // Fetch gender options from API
    // Set genderOptions state with API response

    // Fetch role options from API
    // Set roleOptions state with API response
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
  };

  return (
    <div className="persona-container">
      <h1>Persona Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          {genderOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          {roleOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="address1">Address 1:</label>
        <input
          type="text"
          id="address1"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
        />

        <label htmlFor="address2">Address 2:</label>
        <input
          type="text"
          id="address2"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        />

        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />

      <Button onClick={handleButtonClick}>Submit</Button>
      {showLink && (
        <Link className="Link ingresa-link" to="/RegistroPam">Registra Pam</Link>
      )}
        
      </form>
    </div>
  );
}

export default Persona;