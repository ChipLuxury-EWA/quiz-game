import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" expand="lg" >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img
                                src="/quiz-logo.png"
                                width="60"
                                height="60"
                                alt="Woman asking man a question"
                            />{" "}
                            Quiz Game
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle id="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <i className="fas fa-shopping-cart"></i>{" "}
                                    LINK 1
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>
                                    <i className="fas fa-user"></i> {" "}
                                    LINK 2
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
