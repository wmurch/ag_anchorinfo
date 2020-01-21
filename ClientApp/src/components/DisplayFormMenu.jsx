import * as React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export const DisplayFormMenu = () => {
  return (
    <>
      <Nav tabs className="d-flex justify-content-md-center m-md-1 p-md-1">
        <NavItem>
          <NavLink tag={Link} className="text-primary" to="/DisplayLineSurvey">
            Page 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className="text-primary" to="/DisplayFiller">
            Page 2
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
};
