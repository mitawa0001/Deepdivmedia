// import { Card, Row } from "react-bootstrap";

import MenuItems from "./MenuItems";

const OurMenu = () => {
    console.log()

    return (
        <section className="container my-5">
            <div className="text-center">
                <div className="small-title my-3">our menu</div>
                <h2 className="test-captilize">Foxeresto Menu</h2>
                <p className="mx-auto w-50 sm-w-100">The time has come to bring those ideas and plans to life. This is where we really begin to visualize.</p>
                <MenuItems />
            </div>

            {/* <Row className="d-flex ">
                {
                    data.map((val) => {
                        return (
                            <div className="col-lg-3 h-100" key={val.id}>
                                <Card>
                                    <Card.Title>{val.dishName}</Card.Title>
                                    <Card.Footer>{val.flavours}</Card.Footer>
                                </Card>
                            </div>
                        )
                    })
                }   
            </Row> */}

        </section>
    )
};
export default OurMenu;