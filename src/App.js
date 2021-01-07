
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./Components/Home/HomePage/HomePage";
import Login from "./Components/Login/Login";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

export const UserContext = createContext();

function App() {

  const [loggedInUser,setLoggedInUser] = useState({
    email: "",
    name: "",
  })

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        {/* home Router */}
        <Route exact path="/">
        <HomePage></HomePage>
        </Route>

        {/* home Router */}
        <Route path="/home">
        <HomePage></HomePage>
        </Route>



        {/* login router */}
        <Route  path="/login">
        <Login></Login>
        </Route>

        {/* PageNotFoundRoute */}
        <Route  path="*">
        <PageNotFound></PageNotFound>
        </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
