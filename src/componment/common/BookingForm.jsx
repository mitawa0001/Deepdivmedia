import { Container, Form, Row } from "react-bootstrap";

const BookingForm = () => {
    return (
        <Container className="bg-white p-5">
            <div className="text-capitalize small-title">Reservation</div>
            <h2 className="text-capitalize">booking a table</h2>
            <p className="w-75 text-left">Please choose your reservation date with specific time and number of people to book a table</p>
            <Form>
                <Row>
                    <div className=" col-lg-6 col-md-12 col-sm-12 my-3">
                        <label class="form-label">Name<span className="required-star">*</span></label>
                        <div className=" w-100">
                            <input className="form-control" type="text" placeholder="Your Name"></input>
                        </div>
                    </div>
                    <div className=" col-lg-6 col-md-12 col-sm-12 my-3">
                        <label class="form-label">Email<span className="required-star">*</span></label>
                        <div className=" w-100">
                            <input className="form-control" type="email" placeholder="Your Email"></input>
                        </div>
                    </div>
                    <div className=" col-lg-6 col-md-12 col-sm-12 my-3">
                        <label class="form-label">Phone<span className="required-star">*</span></label>
                        <div className=" w-100">
                            <input className="form-control" type="tel" placeholder="Your Phone"></input>
                        </div>
                    </div><div className=" col-lg-6 col-md-12 col-sm-12 my-3">
                        <label class="form-label">Persons</label>
                        <div className=" w-100">
                            <input className="form-control" type="text" placeholder="Person Number"></input>
                        </div>
                    </div><div className=" col-lg-6 col-md-12 col-sm-12 my-3">
                        <label class="form-label">Date<span className="required-star">*</span></label>
                        <div className=" w-100">
                            <input className="form-control" type="date" placeholder="mm/dd/yyyy"></input>
                        </div>
                    </div><div className=" col-lg-6 col-md-12 col-sm-12 my-3">
                        <label class="form-label">Time<span className="required-star">*</span></label>
                        <div className=" w-100">
                            <input className="form-control" type="time" placeholder="07:00p.m"></input>
                        </div>
                    </div>
                </Row>
                <button className="btn btn-primary"> book a table</button>
            </Form>
        </Container>


    )
};
export default BookingForm;