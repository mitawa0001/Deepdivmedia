import WithLayout from "../../componment/templates/Layout";
import "./style.css";

import { useState } from "react";
import Reservation from "./Reservation";
import TodaysDish from "./TodaysDish";
import CustomersReview from "./CustomersReview";
import OurMenu from "./OurMenu";
import DishesImages from "./DishesImages";
import BookTable from "./BookTable";
import MasterChefStory from "./MasterChefStory";
// import ThemeFirstSection from "../../componment/common/ThemeFirstSection";
import HomeSlider from "../../componment/common/HomeSlider";


const ThemeForestHome = () => {
    const [showPopup, setShowPopup] = useState(false)
    const clickMeHandler = () => {
        if (!showPopup) {
            setShowPopup(true)
            // setOvelay("overlay")
        }
        else {
            setShowPopup(false)
            // setOvelay("")
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
        <>
            <HomeSlider />
            {/* <ThemeFirstSection/> */}
            <MasterChefStory clickMeHandler={clickMeHandler} popUpCloseHandler={popUpCloseHandler} showPopup={showPopup} />
            <Reservation />
            <TodaysDish />
            <CustomersReview />
            <OurMenu />
            <DishesImages />
            <BookTable />
        </>

    );
}
export default WithLayout(ThemeForestHome);