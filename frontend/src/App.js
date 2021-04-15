import React from 'react';
import Header from "./components/header/Header";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";

function App() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  
  return (
    <Router>
      <div>
        <Header width = {windowWidth}/>
        <Switch>
        <Route exact
          path='/'
          render={() => (
          <Login windowWidth={windowWidth} />
          )}
        />
          <Route path="/signup" 
          render={() => (
            <Signup windowWidth={windowWidth} />
            )}
          />
        </Switch>
      </div>
    </Router>  
  );
}

export default App;