import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Background from "./components/background";

const App = () => {
  
  return (
    <div id="root">
      <Background/>
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
