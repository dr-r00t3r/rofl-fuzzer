  
import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, } from "react-router-dom";

function App() {

    return (
        <React.Fragment>
            <Router>
                <Route path="/" exact>
                    <Home/>
                </Route>
            </Router>
        </React.Fragment>
    )
}

export default App;