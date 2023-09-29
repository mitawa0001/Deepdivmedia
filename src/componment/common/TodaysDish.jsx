import React from 'react';
import { Row } from 'react-bootstrap';

export const TodaysDish = (props) => {
    
    return <Row className="text-center no-gutters shadow-lg rounded mb-5">
    <div className="d-flex col-lg-6 col-sm-12 px-0 ">
        <div className="col-lg-6 col-sm-6 p-4 text-center">
            <h4>{props.heading}</h4>
            <p>{props.parahs}</p>
            <button className="btn text-uppercase ">{props.jashdgjsd}</button>
        </div>
        <div className="col-lg-6">
            {/* <img src={'tomato_cheese_pasta'} alt="tomato chesse pasta" height="100%"  width="100%"></img> */}
        </div>
    </div>
    <div className="d-flex col-lg-6 col-sm-12 px-0 ">
        <div className="col-lg-6 col-sm-6 p-4 text-center">
            <h4>Tomato Cheese Pasta</h4>
            <p>Mango, Passion Fruit, Pineapple and Coconut All Blended with Ice.</p>
            <button className="btn text-uppercase ">view full menu</button>
        </div>
        <div className="col-lg-6">
            {/* <img src={'tomato_cheese_pasta'} alt="tomato chesse pasta" height="100%"  width="100%"></img> */}
        </div>
    </div>
    <div className="d-flex col-lg-6 col-sm-12 px-0 flex-row-reverse">
        <div className="col-lg-6 col-sm-6 p-4 text-center">
            <h4>Tomato Cheese Pasta</h4>
            <p>Mango, Passion Fruit, Pineapple and Coconut All Blended with Ice.</p>
            <button className="btn text-uppercase ">view full menu</button>
        </div>
        <div className="col-lg-6">
            {/* <img src={tomato_cheese_pasta} alt="tomato chesse pasta" height="100%"  width="100%"></img> */}
        </div>
    </div>
    <div className="d-flex col-lg-6 col-sm-12 px-0 flex-row-reverse">
        <div className="col-lg-6 col-sm-6 p-4 text-center">
            <h4>Tomato Cheese Pasta</h4>
            <p>Mango, Passion Fruit, Pineapple and Coconut All Blended with Ice.</p>
            <button className="btn text-uppercase ">view full menu</button>
        </div>
        <div className="col-lg-6">
            {/* <img src={tomato_cheese_pasta} alt="tomato chesse pasta" height="100%"  width="100%"></img> */}
        </div>
    </div>
</Row>
}