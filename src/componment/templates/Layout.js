import React, { useState } from "react";
import Navigation from "../navigation";
import Footer from "../common/Footer";

// const[mode, setmode] = useState("light")

const WithLayout = (Component) => (props) => {
  // const[mode, setmode] = useState("light")
 
  return (
    <>
      <Navigation />
      <Component />
      <Footer/>
    </>

  )
}

export default WithLayout;