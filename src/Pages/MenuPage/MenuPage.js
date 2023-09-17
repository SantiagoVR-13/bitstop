// import "./Menu.scss";
import Header from "../../Components/Header/Header";
import Part from "../../Components/Menu/Menu"
import { motion } from "framer-motion";

function Menu() {
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

export default Menu;