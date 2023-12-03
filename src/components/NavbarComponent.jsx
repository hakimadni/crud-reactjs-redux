import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { logOut } from "../actions/generalAction";
import { redirect } from "react-router-dom";

const mapStateToProps = (state) => {
  return { 
    title: state.generals.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()), // Connect the logOut action to props
  };
};

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    // Call the logOut action when the logout button is clicked
    props.logOut();
    window.location = "/";
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{props.title}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">
              <FontAwesomeIcon icon="fa-solid fa-info" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Button color="danger" onClick={handleLogout}>
            Logout
          </Button>
      </Navbar>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps) (NavbarComponent);
