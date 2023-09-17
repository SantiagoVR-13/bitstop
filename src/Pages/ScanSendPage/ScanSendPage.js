// import "./ScanSend.scss";
import Header from "../../Components/Header/Header";
import Part from "../../Components/ScanSend/ScanSend"
import { motion } from "framer-motion";

function ScanSend() {
  return (
    <motion.div 
    intial={{ height:0 }}
    animate={{ height: "100%" }}
    exit={{ y: window.innerHeight, transition: { duration: 1} }}
    >
      <Header />
      <Part />
    </motion.div>
  );
}

export default ScanSend;