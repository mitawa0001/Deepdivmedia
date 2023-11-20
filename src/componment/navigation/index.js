import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assest/logo.svg";

const Navigation = (props) => {

    const [light, setlight] = useState("bg-light");
    const TooglethemeChanger = () => {
        if (light === "bg-light") {
            setlight("bg-primary")
        }
        else {
            setlight("bg-light")
        }
    }

    return (
        <>
            <Navbar expand="lg" className={`navbar sticky-top navbar-expand-lg ${light}`}>
                <Container fluid>
                    <Navbar.Brand to="/"><img src={Logo} alt='logo' width="100%" height="100%"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >       
                            <Link className='nav-link' to="/">Home</Link>

                            <NavDropdown title="Feature" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link className='nav-link' to="/darktheme">Dark Theme</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className='nav-link' to="/capitilize">Capitilize
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="ThemeForest" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link className='nav-link' to="/themeforesthome">ThemeforestHome</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className='nav-link' to="/themeforestmenu">ThemeforestMenu</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className='nav-link' to="/theme">themeforestHomeHeader</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link className='nav-link' to="/Reduxsample">Reduxsample</Link>

                        </Nav>
                        <Form className="d-flex">
                            <div className="switch">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" onClick={TooglethemeChanger} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                                </div>
                            </div>

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>


    );
}

export default Navigation;