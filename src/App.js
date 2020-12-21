import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home"


const App = () => (
  <HashRouter basename="/">
      <React.Fragment>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
        </Switch>
      </React.Fragment>
  </HashRouter>
)


export default App;
