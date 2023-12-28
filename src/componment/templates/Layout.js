import React from "react";
import Navigation from "../navigation";
import Footer from "../common/Footer";


const WithLayout = (Component) => (props) => {
  // console.log(props,"layout props")

  return (
    <>
     
      <Navigation />
      <Component {...props}/>
      <Footer  />
    </>

  )
}

export default WithLayout;