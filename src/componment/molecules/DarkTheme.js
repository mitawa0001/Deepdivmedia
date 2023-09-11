import { Container } from "react-bootstrap";
import WithLayout from "../templates/Layout";
import Accordion from 'react-bootstrap/Accordion';
import { useState } from "react";
import Alert from "../../utils/Alert";

const DarkTheme = (props) => {
    const [alert, setAlert] = useState(null);

    const ShowAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        })
    }

    const [ThemeStyle, SetThemeStyle] = useState({
        color: "#fff",
        backgroundColor: "#eee"
    })

    const [btntxt, setbtntxt] = useState("Enable Dark Mode")

    const toogleDarkMode = () => {
        if (ThemeStyle.color === "#fff") {
            SetThemeStyle({
                color: "#eee",
                backgroundColor: "#fff"
            })
            setbtntxt("Enable Light Mode")
            ShowAlert("This is a new alert","success");
        }
        else {
            SetThemeStyle({
                color: "#fff",
                backgroundColor: "#eee"
            })
            setbtntxt("Enable Dark Mode")
            ShowAlert("This is a new and else cundition alert","warning");

        }
    }

    return (
        <>
            <Alert AlertText={alert}/>
            <div style={ThemeStyle}>
                <Container>
                    <h2 className="py-3">{props.title}</h2> <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" style={ThemeStyle}>
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" style={ThemeStyle}>
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <button className="btn btn-primary my-3" onClick={toogleDarkMode}>{btntxt}</button>
                </Container>
            </div>


        </>
    );
}

export default WithLayout(DarkTheme);