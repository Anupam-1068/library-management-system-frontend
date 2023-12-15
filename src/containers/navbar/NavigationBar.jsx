import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Col, Form, Row} from "react-bootstrap";

function NavigationBar() {
    const navbarStyle = {
        backgroundColor: '#e3f2fd',
    };

    return (
        <Navbar className="navbar navbar-light" style={navbarStyle}>
            <Container>
                <Navbar.Brand href="#home">Library Management System</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/book">Book</Nav.Link>
                </Nav>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search Books"
                                className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

        </Navbar>

    );
}

export default NavigationBar;

