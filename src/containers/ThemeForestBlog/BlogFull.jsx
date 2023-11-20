import "../ThemeForestBlog/style.scss";

// import blog_dish from "../../assest/4.jpg";
import { Row } from "react-bootstrap";
import chefimg from "../../assest/chef_profile.jpg";
import data from "../ThemeForestHome/Data";

const BLogFull = () => {
    return (
        <section className="my-5 w-50 mx-auto ">
            {
                data.map((items) => {
                    return (
                        <Row className="blog-full-wrapper my-2" key={items.id}>
                            <div className=" col-lg-4 col-md-6 col-sm-12  blog">
                                <img src={items.Dish_img} alt={items.Dish_desc} height="100%" width="100%"></img>
                            </div>
                            <div className="d-flex flex-wrap col-lg-8 col-md-6 col-sm-12 py-3">

                                <div className="w-100">
                                    <div className="d-flex justify-content-between blog-content-wrap blog2">
                                        <p className="blog-date">{items.Blog_date}</p>
                                        <div className="likes">23</div>
                                    </div>
                                    <h3>{items.dishName}</h3>
                                    <p className="blog-date">this is new p</p>
                                </div>

                                <div className="">
                                    <span className="col-lg-1 d-flex">
                                        <img className="rounded-circle" src={chefimg} alt="chef profile img" height="100%" width="100%"></img>
                                    </span>
                                    <span>By Benaissa Ghrib</span>
                                    <p className="chef-name"> this is chef</p>
                                </div>
                            </div>
                        </Row>
                    )
                })
            }

        </section>
    )
}
export default BLogFull;