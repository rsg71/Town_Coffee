import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutUs from "./pages/AboutUs/AboutUs";
import Coffee from "./pages/Coffee/Coffee";
import Certifications from "./pages/Certifications/Certifications";
import Contact_us from "./pages/ContactUs/ContactUs";
import Giving_back from "./pages/GivingBack/GivingBack";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Homepage from "./pages/Homepage/Homepage";

import TermsOfUse from "./pages/TermsOfUse/TermsOfUse"
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy"

import NavigationBar from "./components/Navigationbar/Navigationbar"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <>
      <Router basename="/Town_Coffee">

        <NavigationBar />
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/coffee" component={Coffee}/>
        <Route exact path="/aboutus" component={AboutUs}/>
        <Route exact path="/certifications" component={Certifications}/>
        <Route exact path="/contactus" component={Contact_us}/>
        <Route exact path="/givingback" component={Giving_back}/>
        <Route exact path="/subscriptions" component={Subscriptions}/>

        <Route exact path="/terms_of_use" component={TermsOfUse}/>
        <Route exact path="/privacy_policy" component={PrivacyPolicy}/>
        <Footer/>


      </Router>
    </>

  );
}

export default App;