import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import {Form} from './form';
import { About } from './about';
import { TermsOfUse } from './terms-of-use';
import { PrivacyPolicy } from './privacy-policy';
export const Webpages = () => {
    return(
        <Router>
            <Route path = "/form" component = {Form} />
            <Route path = "/terms-of-use" component = {TermsOfUse} />
            <Route path = "/privacy-policy" component = {PrivacyPolicy} />
            <Route path = "/home" component = {About} />
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
        </Router>
    );
};