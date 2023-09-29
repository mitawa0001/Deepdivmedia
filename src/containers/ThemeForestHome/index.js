import { Container, Row } from "react-bootstrap";
import WithLayout from "../../componment/templates/Layout";
import Drink_1 from "../../assest/drink_2.jpg"
import "./style.css"
import { useState } from "react";
import chef_profile from "../../assest/chef_profile.jpg";
import Reservation from "./Reservation";
import TodaysDish from "./TodaysDish";
import CustomersReview from "./CustomersReview";

const ThemeForestHome = (props) => {
    const [showPopup, setShowPopup] = useState(false)
    const [overlay, setOvelay] = useState("")

    const clickMeHandler = () => {

        if (!showPopup) {
            setShowPopup(true)
            setOvelay("overlay")
        }
        else {
            setShowPopup(false)
            setOvelay("")
        }
    }
    const popUpCloseHandler = () => {
        if (!showPopup) {
            setShowPopup(true)
        }
        else {
            setShowPopup(false)
        }
    }


    // const showClasses = () => {
    //     if(showPopup === true){
    //         return("about-pop-up-wraper-show")
    //     }
    //     else{
    //         return("about-pop-up-wraper-hide")
    //     }
    // }

    // console.log(showPopup)
    return (
        <div className="py-5">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <div className="col-lg-5 col-sm-12 ">
                        <div className="text-capitalize small-title mb-3">our story</div>
                        <h2 className="font-alt mb-4 h3">A joyous eatery inspired by the culture of italian cuisine</h2>
                        <p>The time has come to bring those ideas and plans to life. This is where we really begin to visualize your napkin
                            sketches and make them into beautiful pixels.Now that your brand is all dressed up and ready to party.
                        </p>
                        <div className="d-flex flex-wrap my-2 item-align-center">
                            <img className="rounded-circle chef-profile-img" src={chef_profile} alt="chef profile"></img>
                            <div className="ms-3">
                                <h5>Benaissa Ghrib</h5>
                                <p>Master Chef</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <div className="position-relative">
                            <div className="row">
                                <div className="col-sm-6 mb-2 px-2">
                                    <img onClick={clickMeHandler} className="img-fluid" src={Drink_1} alt="About Section drink" width="100%" height="100%"></img>

                                </div>
                                <div className="col-sm-5 align-self-end mb-2 ps-0">
                                    <img onClick={clickMeHandler} className="img-fluid" src={Drink_1} alt="About Section drink" width="100%" height="100%"></img>
                                </div>
                                <div className="col-sm-5">
                                    <img className="img-fluid" src={Drink_1} alt="About Section drink" width="100%" height="100%"></img>
                                </div>
                                <div className="col-sm-6">
                                    <img className="img-fluid" src={Drink_1} alt="About Section drink" width="100%" height="100%"></img>
                                </div>
                                <button onClick={clickMeHandler}>Click me</button>
                            </div>
                        </div>
                    </div>
                </Row>

                <div className={`${showPopup === true ? "about-pop-up-wraper-show" : "hide"}`}>
                    <div className="about-pop-up-wrap">
                        <span onClick={popUpCloseHandler} className="close">X</span>
                        <img src={Drink_1} alt="Drink img" width="100%" height="100%"></img>

                    </div>
                    {/* {`${showPopup === true ? "about-pop-up-wrap" : "hide"}`} */}
                </div>

            </Container>
            {/* booking table section start */}
            <Reservation />
            {/* <TodaysDish heading='Hoome' key="kjashbhdd"/> */}
            <TodaysDish />
            <CustomersReview/>
        </div>
    );
}
export default WithLayout(ThemeForestHome);