import Booking_chairs from "../../assest/bookingChairs.jpg";
import Serving_Dish_svg from "../../assest/serving-dish-svg.svg";

const Reservation = () => {
    return (
            <div className="overflow-hidden">
                <div className="row booking-wrapper my-5">
                    <div className="col-lg-6 col-sm-12 pt-5 booking-wrap-left">
                        <div className="d-flex flex-column justify-content-center booking-card-container align-items-center p-5">
                                <img className="booking-container-img" src={Serving_Dish_svg} alt="serving dish svg" height="100%" width="100%"></img>
                                <h2 className="text-capitalize py-2">make a reservation </h2>
                                <p>Opens 8:00 AM - 10:00 PM, every day of the week </p>
                                <button className="btn btn-primary">book a table</button>
                               
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 ps-2">
                        <img src={Booking_chairs} alt="Booking chairs"></img>
                    </div>
                </div>
            </div>
    )
}
export default Reservation