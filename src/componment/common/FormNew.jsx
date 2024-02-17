import React, { useState } from "react";
import WithLayout from "../templates/Layout";
const FormNew = () => {
    const [name, setName] = useState(" ")
    const [pwd, setpwd] = useState(" ")

    const handleChanger = () => {
        localStorage.setItem("name", name)
        localStorage.setItem("password", pwd)
    }

    return (
        <>
            <h2 className="text-center w-100 my-2">Register Form</h2>
            <form className="">
                <h3>Name of the user:</h3>
                <input type="text" value={name} placeholder="Name"
                    onChange={(e) => setName(e.target.value)}>
                </input>
                <h3>Name of the password:</h3>

                <input type="password" value={pwd} placeholder="password"
                    onChange={(e) => setpwd(e.target.value)}>
                </input>
                <button onClick={handleChanger}>Save</button>
                {
                    localStorage.getItem("name") 
                }
            </form>
        </>
    )
}
export default WithLayout(FormNew);