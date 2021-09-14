import React  from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import Create from "./components/pages/Create";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Vote from "./components/pages/Vote";
import Proposition from "./components/pages/Proposition";
import Info from "./components/pages/Info";
import Stats from "./components/pages/Stats";
import Budget from "./components/pages/Budget";
import People from "./components/pages/People";
import LandingHeader from "./components/organisms/LandingHeader";
import MainHeader from "./components/organisms/MainHeader";
import { Box } from "@chakra-ui/layout";
//import ErrorTemlate from "./components/templates/ErrorTemlate";

import {
  ComEthContextProvider,
} from "./context/ComEthContext";


const Dapp = ({ comEthAdr }) => {

  
  //console.log(window.location.pathname);

  return (
    <>
    <Box minH="100vh">
      {window.location.pathname === "/" ? <LandingHeader /> : <MainHeader />}
      <Switch>
        <Route exact path="/" component={LandingPage}>
          <LandingPage />
        </Route>
        <Route exact path="/create" component={Create}>
          <Create />
        </Route>
        <Route exact path="/login" component={Login}>
          <Login />
        </Route>

        <ComEthContextProvider comEthAdr={comEthAdr}>

          <Route exact path="/home" component={Home}>
            <Home comEthAdr={comEthAdr} />
          </Route>
          <Route exact path="/vote" component={Vote}>
            <Vote />
          </Route>
          <Route exact path="/proposition" component={Proposition}>
            <Proposition />
          </Route>
          <Route exact path="/info" component={Info}>
            <Info />
          </Route>
          <Route exact path="/stats" component={Stats}>
            <Stats />
          </Route>
          <Route exact path="/budget" component={Budget}>
            <Budget />
          </Route>
          <Route exact path="/people" component={People}>
            <People />
          </Route>
        </ComEthContextProvider>
      </Switch>
      </Box>
    </>
  );
};

export default Dapp;
