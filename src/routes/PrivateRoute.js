import React, {useState} from 'react'
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import Header from "../components/header/Header";
function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    return (
        <Route
            {...rest}
            render={props => {
            return currentUser ?<> <Header width={windowWidth}/> <Component {...props} /> </>: <Redirect to="/" />
            }}
        ></Route>
        )
}

export default PrivateRoute;




