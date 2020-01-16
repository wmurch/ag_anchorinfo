import * as React from "react";
import {
  Tooltip,
  Form,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Media,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { useService } from "../api/Service";

const Logo = require("../assets/logo.png");

export const NavMenu = () => {
  const {
    opportunities,
    setOpportunities,
    opportunity,
    setOpportunity,
    getOpportunity,
    updateField
  } = useService();
  const [newTooltipOpen, setNewTooltipOpen] = React.useState(false);
  const [viewTooltipOpen, setViewTooltipOpen] = React.useState(false);

  const toolNewTipToggle = () => setNewTooltipOpen(!newTooltipOpen);

  const toolViewTipToggle = () => setViewTooltipOpen(!viewTooltipOpen);

  return (
    <>
      <Media className="d-flex justify-content-md-around m-md-3 p-md-3">
        <Media left>
          <Media object src={Logo} alt="Generic placeholder image" />
        </Media>
      </Media>
      <Nav className="d-flex justify-content-md-center m-md-1 p-md-1">
        <NavItem>
          <NavLink tag={Link} className="text-primary" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag={Link}
            className="text-primary"
            to="/NewLineSurvey"
            id="NewLineSurveyNav"
          >
            Create Line Survey
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag={Link}
            className="text-primary"
            to="/DisplayLineSurvey"
            id="DisplayLineSurveyNav"
          >
            View Line Survey
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
};
