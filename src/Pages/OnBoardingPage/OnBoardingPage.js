import "./OnBoardingPage.scss";
import Header from "../../Components/Header/Header";
import { motion } from "framer-motion";
function OnBoardingPage() {
  return (
    <motion.div 
    intial={{ height:0 }}
    animate={{ height: "100%" }}
    exit={{ y: window.innerHeight, transition: { duration: 1} }}
    >
      <Header />
      <div className="OnBoardingPage"      >
        
      </div>
    </motion.div>
  );
}

export default OnBoardingPage;
