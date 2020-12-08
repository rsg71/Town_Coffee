import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutUs from "./pages/About_us/About_us";
import Coffee from "./pages/Coffee/Coffee";
import Certifications from "./pages/Certifications/Certifications";
import Contact_us from "./pages/Contact_us/Contact_us";
import Giving_back from "./pages/Giving_back/Giving_back";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Homepage from "./pages/Homepage/Homepage";

import TermsOfUse from "./pages/Terms_of_use/Terms_of_use"
import PrivacyPolicy from "./pages/Privacy_policy/Privacy_policy"

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