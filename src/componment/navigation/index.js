import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";
import logo from "../../assest/logo.png"

const Navigation = (props) => {
    return (
        <>
            <Navbar expand="lg" className={`navbar navbar-expand-lg`}>
                <Container>
                    <Navbar.Brand to="/"><img className='logo' src={logo} alt='logo'></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Form className="d-flex">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Link className='nav-link' to="/">Home</Link>

                                <NavDropdown title="Layout" id="navbarScrollingDropdown">
                                    <NavDropdown.Item>
                                        <Link className='nav-link' to="/product">Product List</Link>
                                    </NavDropdown.Item>
                                  
                                </NavDropdown>
                            </Nav>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>


    );
}

export default Navigation;