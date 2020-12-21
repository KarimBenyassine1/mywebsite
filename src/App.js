import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home"


const App = () => (
  <BrowserRouter>
      <React.Fragment>
      <Navbar />
        <Switch>
          <Route exact path="/myportfolio" component={Home}/>
          <Route exact path="/projects" component={Projects}/>
        </Switch>
      </React.Fragment>
  </BrowserRouter>
)


export default App;
