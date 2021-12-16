import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Head from "./Head/Head";
import Home from "./Home/Home";
import List from "./List/List";
import Details from "./Details/Details";
const Main = () =>{
    return(
        <div>
            <Router>
                <Head/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route exact path="/list"><List/></Route>
                    <Route exact path="/contact"><List/></Route>
                    <Route exact path="/details/:id"><Details/></Route>
                </Switch>
            </Router>
        </div>
    );
}
export default Main;