import { Container } from "react-bootstrap";
import "./style.sass";

const ReduxSample = () => {
    return (
        <>
            <Container>
                <h1>increament</h1>
                <div className="quantity">
                    <button className="btn btn-primary">-</button>
                    <input name="quantity" type="text" className="quantity__input" value="0" />
                    <button className="btn btn-primary">+</button>
                </div>
            </Container>
        </>
    )
}
export default ReduxSample