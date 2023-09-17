import { BrowserRouter} from "react-router-dom";
import React from "react";
import "./App.css";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";



function App() {
  

  return (
    
    <div className="App">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
