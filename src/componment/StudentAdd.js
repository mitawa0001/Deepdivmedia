import { useEffect, useState } from "react";
import { json } from "react-router";

const handalSubmit = (e) => {
  e.preventDefault();
  
  // useEffect(() => {
  //   fetch("https://redjuice-api.onrender.com/api/v1")
  //   .then((resp)=>{
  //    post:json.str

  //   })
  // });
};

const StudentAdd = () => {
  const [name, namechanged] = useState("");
  const [address, addresschanged] = useState("");

  return (
    <div>
      <h3>Student Add list</h3>
      <form onSubmit={handalSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => namechanged(e.target.value)}
          placeholder="Enter name"
          required
        ></input>

        <label>address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => addresschanged(e.target.value)}
          placeholder="Enter id"
          required
        ></input>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default StudentAdd;
