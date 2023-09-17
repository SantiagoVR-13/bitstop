import { BrowserRouter} from "react-router-dom";
import React from "react";
import "./App.css";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";



function App() {
  // const { testnet, mainnet } = require("bitcore-lib/lib/networks");
  // const { createWallet } = require("./wallet.bitcoin");
  // const sendBitcoin = require("./send.bitcoin");

  // console.log(createWallet(mainnet));
  
  

  return (
    
    <div className="App">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
