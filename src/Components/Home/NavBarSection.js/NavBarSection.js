import React, { useContext } from "react";
import { UserContext } from "../../../App";
import "./NavBarSection.css";

const NavBarSection = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div>
      <p>NavBarSection</p>
    </div>
  );
};

export default NavBarSection;
