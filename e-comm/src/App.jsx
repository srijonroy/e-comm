import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/header/header";
import { HomePage } from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import SignInSignUp from "./pages/signIn-signUp/signIn-signUp";
import { auth } from "./firebase/firebase.utils";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [currentUser, setUser] = useState(null);

  const memoizedCallback = useCallback(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
  },[]);

  useEffect(() => {
    memoizedCallback();
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser}></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" render={() => <Shop />} />
        <Route exact path="/signIn" render={() => <SignInSignUp />} />
      </Switch>
    </div>
  );
}

export default App;
