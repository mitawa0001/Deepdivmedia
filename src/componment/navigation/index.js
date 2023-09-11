import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";

const Navigation = (props) => {
    return (
        <>
            <Navbar expand="lg" className={`bg-body-tertiary navbar navbar-expand-lg navbar-${props.light}`}>
                <Container fluid>
                    <Navbar.Brand to="/">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='nav-link' to="/">Home</Link>

                            <NavDropdown title="Layout" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link className='nav-link' to="/darktheme">Dark Theme</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className='nav-link' to="/capitilize">Capitilize
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>


    );
}

export default Navigation;