import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
// About SG
import About from "./pages/About";
//Art pages
import Art from "./pages/Art";
import Crystal from "./pages/Art/Crystal";
import VisDev from "./pages/Art/Crystal/VisDev";
import Brittney from "./pages/Art/Brittney";
import PaperCut from "./pages/Art/Brittney/PaperCut";
//Animation pages
import Animation from "./pages/Animation";
import WebSeries from "./pages/Animation/Webseries";
import PLH from "./pages/Animation/Webseries/PLH";
import AboutPLH from "./pages/Animation/Webseries/PLH/AboutPLH";
import ArtPLH from "./pages/Animation/Webseries/PLH/ArtPLH";
import ClientWork from "./pages/Animation/ClientWork";
import ForFun from "./pages/Animation/ForFun";
//Comics pages
import Comics from "./pages/Comics";
//Web dev pages
import WebDev from "./pages/WebDev";
import Sgs from "./pages/WebDev/Sgs";
import Memory from "./pages/WebDev/Memory";
import SpaceChase from "./pages/WebDev/SpaceChase";
import Swaddle from "./pages/WebDev/Swaddle";
import Swiftly from "./pages/WebDev/Swiftly";
import Tennis from "./pages/WebDev/Tennis";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />

        {/* Art pages */}
        <Route exact path="/Art" component={Art} />
        <Route exact path="/Art/Crystal" component={Crystal} />
        <Route exact path="/Art/Crystal/VisDev" component={VisDev} />
        <Route exact path="/Art/Brittney" component={Brittney} />
        <Route exact path="/Art/Brittney/PaperCut" component={PaperCut} />
        {/* animation pages */}
        <Route exact path="/Animation" component={Animation} />
        <Route exact path="/Animation/originals" component={WebSeries} />
        <Route exact path="/Animation/originals/plh" component={PLH} />
        <Route path="/Animation/originals/plh/about" component={AboutPLH} />
        <Route path="/Animation/originals/plh/art" component={ArtPLH} />
        <Route exact path="/Animation/clientwork" component={ClientWork} />
        <Route exact path="/Animation/forfun" component={ForFun} />
        {/* comic pages */}
        <Route exact path="/Comics" component={Comics} />
        {/* Web development pages */}
        <Route exact path="/WebDev" component={WebDev} />
        <Route exact path="/WebDev/sgs" component={Sgs} />
        <Route exact path="/WebDev/Memory" component={Memory} />
        <Route exact path="/WebDev/SpaceChase" component={SpaceChase} />
        <Route exact path="/WebDev/Swaddle" component={Swaddle} />
        <Route exact path="/WebDev/Swiftly" component={Swiftly} />
        <Route exact path="/WebDev/Tennis" component={Tennis} />
      </div>
    </Router>
  );
}

export default App;
