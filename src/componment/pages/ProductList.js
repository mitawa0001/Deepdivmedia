import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import API from "../../api";



const ProductList = (props) => {
    const [myData, setNewData] = useState([]);
    const [myError, setMyError] = useState("");

    // const API = "https://api.pujakaitem.com/api/products";

    // const getProducts = async (url) => {
    //     const res = await axios.get(url);
    //     const products = await res.data;
    //     console.log(products)
    // }

    // useEffect(() => {
    //     getProducts(API);
    // }, []);


    // const API_harry = "https://api.pujakaitem.com/api/products"

    // const GetHarry = async (alpha) => {
    //     const res1 = await axios.get(alpha);
    //     const Harry_data = await res1.data;
    //     console.log(Harry_data)
    // }

    // useEffect(() => {
    //     GetHarry(API_harry);
    // }, []);

    // const API = "https://api.pujakaitem.com/api"

    const GetApiWithError =  async() => {
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





    // useEffect(() => {
    //     axios
    //         .get("https://api.pujakaitem.com/api/products")
    //         .then((res) =>
    //             // console.log("this is new API", res.data)
    //             // const pro = res.data;
    //             setNewData(res.data)
    //         )
    //         .catch((error) =>
    //             setMyError(error.message)
    //         );
    // }, []);

    



    return (
        <>


            <div className="container">
                <h2 className="text-center">{props.title}</h2>
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
                                {/* <h3>{description}</h3> */}
                            </div>
                        )
                    })}
                </div>
            </div>


            {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} xl={4}>
                            <Item>{props.title}</Item>
                        </Grid>
                        <Grid ite  xs={12} xl={4}>
                            <Item>{props.title}</Item>
                        </Grid>
                        <Grid item xs={12} xl={4}>
                            <Item>{props.title}</Item>
                        </Grid>
                        <Grid item xs={12} xl={4}>
                            <Item>{props.head}</Item>
                        </Grid>
            </Grid> */}
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

export default ProductList;