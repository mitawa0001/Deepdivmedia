import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import API from "../../api";
import WithLayout from "../templates/Layout";

const ProductList = (props) => {
    const [myData, setNewData] = useState([]);
    const [myError, setMyError] = useState("");

    const GetApiWithError = async () => {
        try {
            const res = await API.get("/products");
            setNewData(res.data);
            console.log(res)
        }
        catch (error) {
            setMyError(error.message)
        }
    }
    useEffect(() => {
        GetApiWithError();
    }, [])

    return (
        <>
            <div className="container">
                <h2 className="text-center my-4">Services we Provide</h2>
                {myError !== "" && <h2 className="text-center">{myError}</h2>}
                <div class="row">
                    {myData.map((product) => {
                        const { id, company, price, image, description } = product;
                        return (
                            <div className="col-6 col-sm-3 pb-4" key={id}>
                                <div className="card">
                                    <img src={image} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between"><h5 className="card-title">{company.charAt(0).toUpperCase()}{company.slice(1)}</h5>
                                            <h4 className="card-title">{price}</h4></div>
                                        <p className="card-text">{description.slice(1, 150)}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

ProductList.propTypes = {
    company: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

ProductList.defaultProps = {
    price: [12345],
    company: "Default Name"
}

export default WithLayout(ProductList);