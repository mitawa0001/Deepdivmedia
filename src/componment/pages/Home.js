import WithLayout from "../templates/Layout";
// import ProductList from "./ProductList";

import sleep_dog from "../../assest/dog-sleep.png";
import shadow_logoo from "../../assest/Layer_456.png";
import shadow_logoo1 from "../../assest/Layer 2 copy 2.png";
import half_logoo from "../../assest/half-circle-22.png";
import pet11 from "../../assest/pet_11-removebg-preview.png";

const Home = (props) => {
    // console.log(props,"home props")

    return (
        <>
            <div className="switch fixed">
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                </div>
            </div>

            <div className={`bg-${props.mode}`}>
                <div className="backgroung-img-2">
                    <div className="header-content-area">
                        <div className="container">

                            <div className="header-animation-area">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-8">
                                        <div className="intro-text">
                                            <h1
                                                data-aos="slide-right"
                                                data-aos-anchor-placement="top-bottom"
                                                data-aos-delay="700"
                                                data-aos-duration="1200"
                                            >
                                                Things Happens
                                                <br></br>After A Click.....
                                            </h1>
                                            <p
                                                data-aos="fade-in"
                                                data-aos-anchor-placement="top-bottom"
                                                data-aos-delay="1500"
                                                data-aos-duration="1200"
                                            >
                                                Eiusmod qui pig veniam nostrud. Chicken mollit flank ground
                                                round est short loin ad do bacon velit bresaola excepteur eu.
                                                Doner turducken aute, ut lorem alcatra pork belly capicola short
                                                ribs meatball. Excepteur quis nostrud, et dolor
                                            </p>
                                        </div>
                                    </div>
                                    <div className="header-1-artwork">
                                        <div className="layer">
                                            {/* <img src={technology} alt="" ></img> */}

                                            <div className="layer-3 ">
                                                                                                <img src="img/spin.png" alt=""></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 margin-top-lb-30 margin-top-sb-30">
                                <div className="bg-img"><img src={sleep_dog} alt="sleep dog"></img>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center">
                                {/* <!-- about brief--> */}
                                <div className={`${props.text} text-right`}>
                                    <div className="about-section-title">
                                        <h4>lorem</h4>
                                        <h2>pet shower</h2>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="about " className="bg-circle">
                    <div className="bg-img-11"><img src={shadow_logoo} alt="shadow"></img></div>
                    <div className="bg-img-22"><img src={shadow_logoo1} alt="shadow"></img></div>
                    <div className="bg-img-33"><img src={half_logoo} alt="shadow"></img></div>

                    <div className="col-xl-12 d-flex align-items-center">
                        <div className="container  section-heading-1 home-counter-text text-center about-section-title ">
                            <h4>Our Reach</h4>
                            <h2>Prepare to be inspired by the incredible people around you.</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className="e-pattern">
                                {/* <img src={pattern} alt=""></img> */}
                            </div>
                        </div>
                    </div>

                    <div className="abou-us-area ">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 margin-top-lb-30 margin-top-sb-30">
                                    <img src={pet11} alt="pet" width="100%"></img>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center">
                                    {/* <!-- about brief--> */}
                                    <div className="about-content text-right">
                                        <div className="about-section-title">
                                            <h4>Products</h4>
                                            <h2>nail cutting</h2>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="abou-us-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center ">
                                        {/* <!-- about brief--> */}
                                        <div className="about-content text-left">
                                            <div className="about-section-title">
                                                <h4>surgery</h4>
                                                <h2>Services We Provide</h2>
                                            </div>
                                            <p>In the realm of project execution, every endeavor brings its own set of challenges, demanding a team armed with distinctive skillsets. Our relentless pursuit has been to offer software development services that embody flexibility, affordability, and exceptional efficiency. With unwavering commitment, we aim to surpass expectations, delivering tailored solutions that cater to your precise requirements.</p>

                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 margin-top-lb-30 margin-top-sb-30">
                                        <div className="">
                                            <img src={pet11} alt="pet" width="100%"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <ProductList title="Product List" /> */}
            </div>
        </>
    );
}

export default WithLayout(Home);