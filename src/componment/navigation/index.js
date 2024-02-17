// import { useState } from 'react';
import "./style.scss"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assest/logo.svg";

const Navigation = (props) => {

    // const [light, setlight] = useState("bg-light");
    // const TooglethemeChanger = () => {
    //     if (light === "bg-light") {
    //         setlight("bg-primary")
    //     }
    //     else {
    //         setlight("bg-light")
    //     }
    // }

    return (
        <>
            <Navbar expand="lg" className="navbar sticky-top navbar-expand-lg bg-light">
                <Container fluid>
                    <Navbar.Brand to="/"><img src={Logo} alt='logo' width="100%" height="100%"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='nav-link' to="/">home</Link>
                            <Link className='nav-link' to="/">about</Link>
                            <Link className='nav-link' to="/themeforestcontact">contact</Link>
                            <Link className='nav-link' to="/themeforestblog">blog</Link>
                            <Link className='nav-link' to="/Reduxsample">User List</Link>
                            <Link className='nav-link' to="/formNew">Form</Link>
                            <Link className='nav-link' to="/blog">Blog</Link>
                        </Nav>
                        <Form className="d-flex">
                            {/* <NavDropdown className='' title="Feature" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link className='nav-link' to="/darktheme">Dark Theme</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className='nav-link' to="/capitilize">Capitilize
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            {/* <div className="switch">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" onClick={TooglethemeChanger} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                                </div>
                            </div> */}

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>


    );
}

export default Navigation;