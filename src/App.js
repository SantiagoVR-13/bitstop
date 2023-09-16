import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import OnBoardingPage from "./Pages/OnBoardingPage/OnBoardingPage";
import Onboarding from "./Components/Onboarding/Onboarding";
import Signup from "./Components/Signup/Signup";

function App() {
  const { testnet, mainnet } = require("bitcore-lib/lib/networks");
  const { createWallet } = require("./wallet.bitcoin");
  const sendBitcoin = require("./send.bitcoin");

  let bitcoin = createWallet(mainnet);
  console.log(bitcoin);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/on-boarding" element={<OnBoardingPage />} />
          <Route path="/intro" element={<Onboarding />} />
          {/* <Route path="/scan-send" element={<ScanSend />} /> */}
          {/* <Route path="/scan-receive" element={<OnBoardingPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
