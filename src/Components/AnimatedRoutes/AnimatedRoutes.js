import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import OnBoardingPage from "../../Pages/OnBoardingPage/OnBoardingPage";
import Menu from "../../Pages/MenuPage/MenuPage";
import ScanSend from "../../Pages/ScanSendPage/ScanSendPage";
import ScanReceive from "../../Pages/ScanReceivePage/ScanRecievePage";
import { AnimatePresence } from "framer-motion"
function AnimatedRoutes() {
    const location= useLocation();
    return (
    <>
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LoginForm />} />
          <Route path="/on-boarding" element={<OnBoardingPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/scan-send" element={<ScanSend />} />
          <Route path="/scan-receive" element={<ScanReceive />} />
        </Routes>
    </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes