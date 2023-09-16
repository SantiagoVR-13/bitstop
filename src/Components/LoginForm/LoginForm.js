import React, { useState } from "react";
import Bitlogo from "../../Assets/Images/bitlogo.png";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

function LoginForm() {
  const [pin, setPin] = useState("");

  const handleDigitClick = (digit) => {
    if (pin.length < 4) {
      setPin(pin + digit);
    }
  };

  const handleBackspaceClick = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("PIN Entered:", pin);
  };

  return (
    <div className="login-container">
      <img
        src={Bitlogo}
        alt="Crypto Wallet Logo"
        className="login-container__logo"
      />
      {/* <p className="login-container__subtitle">Enter Password </p> */}

      {/* PIN Display */}
      <div className="login-container__pin-display">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="pin-digit">
            {pin[index] ? "•" : ""}
          </div>
        ))}
      </div>

      {/* PIN Buttons */}
      <div className="login-container__pin-div">
        <div className="login-container__pin-buttons-row">
          {Array.from({ length: 3 }, (_, digit) => (
            <button
              className="login-container__pin-buttons"
              key={digit + 1}
              onClick={() => handleDigitClick(digit + 1)}
            >
              {digit + 1}
            </button>
          ))}
        </div>
        <div className="login-container__pin-buttons-row">
          {Array.from({ length: 3 }, (_, digit) => (
            <button
              className="login-container__pin-buttons"
              key={digit + 4}
              onClick={() => handleDigitClick(digit + 4)}
            >
              {digit + 4}
            </button>
          ))}
        </div>
        <div className="login-container__pin-buttons-row">
          {Array.from({ length: 3 }, (_, digit) => (
            <button
              className="login-container__pin-buttons"
              key={digit + 7}
              onClick={() => handleDigitClick(digit + 7)}
            >
              {digit + 7}
            </button>
          ))}
        </div>
        <div className="login-container__pin-buttons-row">
          <button
            className="login-container__pin-buttons"
            onClick={() => handleDigitClick(0)}
          >
            0
          </button>
          <button
            className="login-container__back-buttons"
            onClick={handleBackspaceClick}
          >
            Backspace
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <form onSubmit={handleSubmit}>
        <Link to={`/on-boarding`} className="login-container__signup-link">
          <button
            type="submit"
            className="login-container__submit-button"
            disabled={pin.length !== 4}
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
