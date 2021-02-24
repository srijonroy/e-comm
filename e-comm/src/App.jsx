import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "./App.css";
import HeaderComponent from "./component/header/header";

import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";
import CheckOut from "./pages/checkout/CheckOut";
import { HomePage } from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import SignInSignUp from "./pages/signIn-signUp/signIn-signUp";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckOut} />
          {!this.props.currentUser ? (
            <Route path="/signin" component={SignInSignUp} />
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


export default connect(mapStateToProps, null)(App);
