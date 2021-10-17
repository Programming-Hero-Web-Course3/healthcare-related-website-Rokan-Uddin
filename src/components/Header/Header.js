
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,logOut}= useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand as={Link} to="/home">Dental-Care</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home#services">Features</Nav.Link>
            <Nav.Link as={Link} to="/home#ss">Pricing</Nav.Link>
            </Nav>
            <Nav>
            {
                user.email ? 
                <Button onClick={logOut} variant="light">Logout</Button> :
                <Nav.Link as={Link} to="/login">Log-In</Nav.Link>
            }
            </Nav>
            <Nav.Link>{user?.displayName}</Nav.Link>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;