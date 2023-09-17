// import "./ScanReceive.scss";
import Header from "../../Components/Header/Header";
import Part from "../../Components/ScanReceive/ScanReceive"
import { motion } from "framer-motion";

function ScanReceive() {
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

export default ScanReceive;