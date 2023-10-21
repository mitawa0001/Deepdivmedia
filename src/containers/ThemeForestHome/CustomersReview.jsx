import { Container } from "react-bootstrap";
import ReviewCarousels from "./ReviewCarousels";

const CustomersReview = () => {
    return (
        <section className="review-container-wraper" id="ReviewSlider">
            <Container className=" text-center">
                <div className=" p-5 bg-dark col-lg-8 col-md-9 col-sm-6 mx-auto">
                    <ReviewCarousels />
                </div>
            </Container>
        </section>
    )
};
export default CustomersReview;