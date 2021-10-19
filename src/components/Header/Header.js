
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    // get user and logout using hooks
    const {user,logOut}= useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand as={Link} to="/home">Dental-Care</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/home#tips">Tips</Nav.Link>
            <Nav.Link as={HashLink} to="/doctors">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/appoinment">Appoinment</Nav.Link>
            </Nav>
            {/* if user's email available, Logout button displayed otherwise Sign-In button  */}
            <Nav>
            {
                user.email ? 
                <Button onClick={logOut} variant="light">Logout</Button> :
                <Nav.Link as={Link} to="/login">Sign-In</Nav.Link>
            }
            </Nav>
            <Nav.Link>{user?.displayName}</Nav.Link>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;