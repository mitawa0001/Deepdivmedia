import Waffle_Brunch from "../../assest/tomato cheese pasta.jpg"
import data from "./Data";
const MenuItems = () => {
    
    return (
        <>
            <div className="filter-wrapper mx-auto my-5">
                {
                    data.map((item) => {
                        return (

                            <div className="menu-item-wrap my-3" key={item.id}>
                                <div className="col-lg-1 col-md-2 col-sm-2">
                                    <img className="menu-item-img" src={Waffle_Brunch} alt="Waffle Brunch" height="100%" width="100%"></img>
                                </div>
                                <div className=" col-lg-11 d-flex align-content-center flex-wrap">
                                    <div className="menu-name-price-wraper">
                                        <h5 className="item-name">{item.dishName}</h5>
                                        <span className="doted-lines"></span>

                                        <div className="item-price">{item.dishPrice}</div>
                                    </div>
                                    <div className="ps-3 pb-0">
                                        {item.flavours}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default MenuItems;
