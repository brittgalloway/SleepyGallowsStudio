import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Art from "./pages/Art";
import Crystal from "./pages/Art/Crystal";
import Brittney from "./pages/Art";
import Animation from "./pages/Animation";
import WebSeries from "./pages/Animation/Webseries";
import PLH from "./pages/Animation/Webseries/PLH";
import ClientWork from "./pages/Animation/ClientWork";
import ForFun from "./pages/Animation/ForFun";
import Comics from "./pages/Comics";
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
        <Route exact path="/Art" component={Art} />
        <Route exact path="/Art/Crystal" component={Crystal} />
        <Route exact path="/Art/Brittney" component={Brittney} />
        <Route exact path="/Animation" component={Animation} />
        <Route exact path="/Animation/webseries" component={WebSeries} />
        <Route exact path="/Animation/webseries/plh" component={PLH} />
        <Route exact path="/Animation/clientwork" component={ClientWork} />
        <Route exact path="/Animation/forfun" component={ForFun} />
        <Route exact path="/Comics" component={Comics} />

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
