import React from 'react';

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import classes from './Header.module.css';

const Header = (props) => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Fit App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/diet">Diet</Nav.Link>
                    <Nav.Link href="/training-plans">Training plans</Nav.Link>
                    <NavDropdown title="Your section" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/user/daily-diet">Daily diet</NavDropdown.Item>
                        <NavDropdown.Item href="/user/training">Your training</NavDropdown.Item>
                        <NavDropdown.Item href="/user/dimensions">Your body</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/add-product">Add product</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/add-training-plan">Custom training plan</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;