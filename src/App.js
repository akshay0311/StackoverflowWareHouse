import React from 'react';
import Header from "./components/header/Header";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Records from "./views/Records";
import Home from "./views/Home";
import { ApolloProvider } from '@apollo/client/react';
import {client} from './graphql/client';
import PrivateRoute from "./routes/PrivateRoute.js"
import { AuthProvider } from "./contexts/authContext";
function App() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <div>
            <Switch>
              <Route
                path='/home'
                render={() => (
                  <Home/>
                )}
              />  
              <Route exact
                path='/'
                render={() => (
                <>
                  <Header width = {windowWidth}/>
                  <Login windowWidth={windowWidth} />
                </>)}
              />
              <Route path="/signup" 
              render={() => (
                <>
                  <Header width = {windowWidth}/>
                  <Signup windowWidth={windowWidth} />
                </>
                )}
              />
              <PrivateRoute path="/records" component={Records} />
            </Switch>
          </div>
        </Router> 
      </AuthProvider>
    </ApolloProvider> 
  );
}

export default App;
