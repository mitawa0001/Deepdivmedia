import chef_profile from "../../assest/chef_profile.jpg";
import Drink_1 from "../../assest/drink_2.jpg";
import StoryImg2 from "../../assest/4.jpg"
import { Container, Row } from "react-bootstrap";

const MasterChefStory = (props) => {
    return (
        <Container className="mt-5">
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
                                <img onClick={props.clickMeHandler} className="img-fluid" src={Drink_1} alt="About Section drink" width="100%" height="100%"></img>
                            </div>
                            <div className="col-sm-5 align-self-end mb-2 ps-0">
                                <img onClick={props.clickMeHandler} className="img-fluid" src={StoryImg2} alt="About Section drink" width="100%" height="100%"></img>
                            </div>
                            <div className="col-sm-5">
                                <img onClick={props.clickMeHandler} className="img-fluid" src={StoryImg2} alt="About Section drink" width="100%" height="100%"></img>
                            </div>
                            <div className="col-sm-6">
                                <img onClick={props.clickMeHandler} className="img-fluid" src={Drink_1} alt="About Section drink" width="100%" height="100%"></img>
                            </div>

                        </div>
                    </div>
                </div>
            </Row>

            <div className={`${props.showPopup === true ? "about-pop-up-wraper-show" : "hide"}`}>
                <div className="about-pop-up-wrap">
                    <span onClick={props.popUpCloseHandler} className="close">X</span>
                    <img src={Drink_1} alt="Drink img" width="100%" height="100%"></img>

                </div>
                {/* {`${showPopup === true ? "about-pop-up-wrap" : "hide"}`} */}
            </div>

        </Container>
    )
}
export default MasterChefStory;