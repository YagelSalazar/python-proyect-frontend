import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './views/login';
import Home from './views/home'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registro" component={ Login } />
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
