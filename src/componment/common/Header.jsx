
import WithLayout from "../templates/Layout";
import ReviewCarousels from "../../containers/ThemeForestHome/ReviewCarousels";
import { Row } from "react-bootstrap";
import { useEffect } from "react";
// import ThemeForestBlog from "../../containers/ThemeForestBlog";

import axios from "axios";



const HeaderCommon = () => {
    const data = [
        {
            id: 1,
            title: "hype",
            name: "naresh",
            class: "Bba",
            role: "145",

        },
        {
            id: 2,
            title: "hype",
            name: "alpha",
            class: "szss",
            role: "147"
        }
    ]

    // const GetData = async (naresh) => {
    //     const res = await axios.Get(naresh);
    //     const part = await res.data;
    //     console.log(part);
    // }

    // useEffect(() => {
    //     GetData("https://api.pujakaitem.com/api/products");
    // }, [])


    const API = "https://api.pujakaitem.com/api/products";

    const getProducts = async (url) => {
        const res = await axios.get(url);
        const products = await res.data;
        console.log(products)
    }

    useEffect(() => {
        getProducts(API);
    }, []);

    // useEffect(() => {
    //     axios.get("https://api.pujakaitem.com/api/products")
    //         .then((response) => {
    //             console.log(response);
    //             // const data = response.data;
    //         })

    // }, []);

    return (
        <>
            <div className="position-relative background-img">
                <nav class="navbar navbar-expand-lg navbar-light  position-absolute w-100">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <ReviewCarousels />
            </div>

            <div className="my-5">
                <h2>Workers Details List</h2>

                <Row>
                    {
                        data.map((item) => {
                            return (

                                <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                                    <h2>{item.title}</h2>
                                </div>

                            )
                        })
                    }
                </Row>
            </div>
        </>
    )
}
export default WithLayout(HeaderCommon);