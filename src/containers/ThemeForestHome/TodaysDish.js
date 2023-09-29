import { Container, Row } from "react-bootstrap";
import tomato_cheese_pasta from "../../assest/tomato cheese pasta.jpg";
import { TodaysDish } from "../../componment/common/TodaysDish";

const Specials = () => {
// const dishProps = {
//     heading : 'Specials',
//     parahs:'hgvbhjk', 
// }

    return (
            <section>
                <Container>
                    {/*content  start*/}
                    <Row className="justify-contant-center">
                        <div className="my-5 text-center">
                            <div className="text-capitalize small-title mb-3">our Specials</div>
                            <h2 className="text-capitalize">Today's Special</h2>
                            <p className="w-50 mx-auto text-center mb-0">The time has come to bring those ideas and plans to life. This is where we really begin to visualize.</p>
                        </div>
                    </Row>
                {/*content end */}
                    <Row className="text-center no-gutters shadow-lg rounded mb-5">
                        <div className="d-flex col-lg-6 col-sm-12 px-0 ">
                            <div className="col-lg-6 col-sm-6 p-4 text-center">
                                <h4>Tomato Cheese Pasta</h4>
                                <p>Mango, Passion Fruit, Pineapple and Coconut All Blended with Ice.</p>
                                <button className="btn text-uppercase ">view full menu</button>
                            </div>
                            <div className="col-lg-6">
                                <img src={tomato_cheese_pasta} alt="tomato chesse pasta" height="100%"  width="100%"></img>
                            </div>
                        </div>
                        <div className="d-flex col-lg-6 col-sm-12 px-0 ">
                            <div className="col-lg-6 col-sm-6 p-4 text-center">
                                <h4>Tomato Cheese Pasta</h4>
                                <p>Mango, Passion Fruit, Pineapple and Coconut All Blended with Ice.</p>
                                <button className="btn text-uppercase ">view full menu</button>
                            </div>
                            <div className="col-lg-6">
                                <img src={tomato_cheese_pasta} alt="tomato chesse pasta" height="100%"  width="100%"></img>
                            </div>
                        </div>
                        <div className="d-flex col-lg-6 col-sm-12 px-0 flex-row-reverse">
                            <div className="col-lg-6 col-sm-6 p-4 text-center">
                                <h4>Tomato Cheese Pasta</h4>
                                <p>Mango, Passion Fruit, Pineapple and Coconut All Blended with Ice.</p>
                                <button className="btn text-uppercase ">view full menu</button>
                            </div>
                            <div className="col-lg-6">
                                <img src={tomato_cheese_pasta} alt="tomato chesse pasta" height="100%"  width="100%"></img>
                            </div>
                        </div>
                        <div className="d-flex col-lg-6 col-sm-12 px-0 flex-row-reverse">
                            <div className="col-lg-6 col-sm-6 p-4 text-center">
                                <h4>Tomato Cheese Pasta</h4>
                                <p>Mango, Passion Fruit, Pineapple and Coconut All Blended with Ice.</p>
                                <button className="btn text-uppercase ">view full menu</button>
                            </div>
                            <div className="col-lg-6">
                                <img src={tomato_cheese_pasta} alt="tomato chesse pasta" height="100%"  width="100%"></img>
                            </div>
                        </div>
                    </Row>
                    {/* <TodaysDish {...dishProps}/>
                    <TodaysDish  dishProps={dishProps}/> */}
                    
                    
                </Container>
            </section>
    )
};
export default Specials;