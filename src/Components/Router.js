import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed} />
    <Route path="/:username" compenent={Profile} />
    <Route path="/explore" component={Explore} />
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth} />
  </>
);

const AppRouter = ({ isLoggedIn }) => (
  <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
);

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default AppRouter;