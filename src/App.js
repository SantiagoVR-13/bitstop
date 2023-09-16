import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import OnBoardingPage from "./Pages/OnBoardingPage/OnBoardingPage";

function App() {
  const { testnet, mainnet } = require("bitcore-lib/lib/networks");
  const { createWallet } = require("./wallet.bitcoin");
  const sendBitcoin = require("./send.bitcoin");

  console.log(createWallet(mainnet));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/on-boarding" element={<OnBoardingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
