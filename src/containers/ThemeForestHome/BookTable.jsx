import { Row } from "react-bootstrap";
import BookingForm from "../../componment/common/BookingForm";
import booktable_left_side from "../../assest/bookingtable.jpg"
const BookTable = () => {
    return (
        <section className="book-table-wrapper">
            <Row className="booking-form-wraper my-0">
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <BookingForm/>
                </div>
                <div className="col-lg-4 ">
                    <img src={booktable_left_side} alt="booking tab" height="100%" width="100%"></img>
                </div>
            </Row>
        </section>
    )
};
export default BookTable;