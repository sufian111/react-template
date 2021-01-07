import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  //   sing in handler
  let login = () => {
    history.replace(from);
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button className="btn btn-primary" onClick={login}>
        Log in
      </button>
    </div>
  );
};

export default Login;
