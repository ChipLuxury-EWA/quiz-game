import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyleft &#127279; TomPortugez</Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
