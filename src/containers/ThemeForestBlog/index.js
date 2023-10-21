import ThemeFirstSection from "../../componment/common/ThemeFirstSection";
import WithLayout from "../../componment/templates/Layout";
import BLogFull from "./BlogFull";
import "./style.scss";

const ThemeForestBlog = (props) => {
    return (
        <>
            <ThemeFirstSection/>
            <BLogFull/>
        </>
    )
}
export default WithLayout(ThemeForestBlog)