import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutUs from "./pages/about_us/about_us";
import Coffee from "./pages/coffee/coffee";
import Certifications from "./pages/certifications/certifications";
import Contact_us from "./pages/contact_us/contact_us";
import Giving_back from "./pages/giving_back/giving_back";
import Subscriptions from "./pages/subscriptions/subscriptions";
import Homepage from "./pages/homepage/homepage";

import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <Router>

        <Navbar />
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/coffee" component={Coffee}/>
        <Route exact path="/aboutus" component={AboutUs}/>
        <Route exact path="/certifications" component={Certifications}/>
        <Route exact path="/contactus" component={Contact_us}/>
        <Route exact path="/givingback" component={Giving_back}/>
        <Route exact path="/subscriptions" component={Subscriptions}/>
        
      </Router>
    </>

  );
}

export default App;
