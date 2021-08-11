import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import {Testers} from './testers';
import {Form} from './form';
import { About } from './about';
export const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Testers} />
            <Route path = "/form" component = {Form} />
            <Route path = "/about" component = {About} />
        </Router>
    );
};