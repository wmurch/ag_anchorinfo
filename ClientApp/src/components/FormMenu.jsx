import * as React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export const FormMenu = () => {
  return (
    <>
      <Nav tabs className="d-flex justify-content-md-center m-md-1 p-md-1">
        <NavItem>
          <NavLink tag={Link} className="text-primary" to="/NewLineSurvey">
            Customer Info
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="text-primary" to="/Depallitizer">
            Depallitizer
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="text-primary" to="/Filler">
            Filler
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
};
