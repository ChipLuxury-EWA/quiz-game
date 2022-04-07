import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

//TODO maybe make quick start refresh the page?

const Header = () => {
    return (
        <header>
            <Navbar className="navbar-light bg-light">
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
                    <Nav className="me-auto">
                        <LinkContainer to="/settings">
                            <Nav.Link>
                                <i className="fas fa-shopping-cart"></i>{" "}
                                Settings
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/questions">
                            <Nav.Link>
                                <i className="fas fa-user"></i> Quick Start!
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
