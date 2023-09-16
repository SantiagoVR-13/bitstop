import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import OnBoardingPage from "../../Pages/OnBoardingPage/OnBoardingPage";
import { AnimatePresence } from "framer-motion"
function AnimatedRoutes() {
    const location= useLocation();
    return (
    <>
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LoginForm />} />
          <Route path="/on-boarding" element={<OnBoardingPage />} />
          <Route path="/menu" element={<OnBoardingPage />} />
          <Route path="/scan-send" element={<OnBoardingPage />} />
          <Route path="/scan-receive" element={<OnBoardingPage />} />
        </Routes>
    </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes