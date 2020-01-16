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
          <NavLink tag={Link} className="text-primary" to="/NewDepallitizer">
            Depallitizer
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="text-primary" to="/NewFiller">
            Filler
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
};
