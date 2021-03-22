import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/Landingpage";
import Dashboard from "./Components/Dashboard/Dashboard";
import News from "./Components/News/News";
import Forum from "./Components/Forum/Forum";
import Breadcrumbs from "./Components/Breadcrumbs";
import Test from "./Components/DashTest/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Breadcrumbs />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/News" exact component={News} />
            <Route path="/Forum" exact component={Forum} />
           <Route path="/Dashboard" exact component={Dashboard} />
            
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
