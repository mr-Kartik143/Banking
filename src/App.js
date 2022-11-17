import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Login from "./component/login/Login";
import About from "./component/about/About";
import Home from "./component/Home/Home";
import Contact from "./component/Contact/Contact";
import Transfer from "./component/icon/Transfer";
import Upibank from "./component/icon/Upibank";
import Selfac from "./component/icon/Selfac";
import Blac from "./component/icon/Blac";
import Wallet from "./component/icon/Wallet";
import Rewards from "./component/icon/Rewards";
import Refer from "./component/icon/Refer";

function App() {
  
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element= <Login/> />
          <Route path="/" element= <Home/> />
          <Route path="/about" element=<About/> />
          <Route path="/contact" element=<Contact/> />
          <Route path="/Transfer" element=<Transfer/> />
          <Route path="/tobank" element=<Upibank/> />
          <Route path="/selfac" element=<Selfac/> />
          <Route path="/blac" element=<Blac/> />
          <Route path="/wallet" element=<Wallet/> />
          <Route path="/rewards" element=<Rewards/> />
          <Route path="/refer" element=<Refer/> />
          
        </Routes>
      </Router>
  )
}

export default App;
