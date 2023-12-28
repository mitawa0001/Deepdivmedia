import { Container, Row } from "react-bootstrap";
import "./style.scss";
import WithLayout from "../../componment/templates/Layout";
import StudentList from "../ReduxSample/StudentList"

const ReduxSample = () => {
    return (
        <>
            <Container>
                <h2 className="text-center about-section-title">User's List Table</h2>
                <Row className="justify-content-center">
                    <div className="col-lg-8 col-md-12">
                        <StudentList />
                    </div>
                </Row>
            </Container >
        </>
    )
}
export default WithLayout(ReduxSample)