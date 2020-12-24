import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home"


const App = () => (
  <HashRouter basename="/">
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </React.Fragment>
  </HashRouter>
)


export default App;
