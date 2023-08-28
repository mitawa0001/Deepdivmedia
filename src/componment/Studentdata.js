import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Studentdata = () => {
  const [studentdata, setstudentdata] = useState(null);
  useEffect(() => {
    fetch("https://redjuice-api.onrender.com/api/v1")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setstudentdata(resp);
        console.log(resp);
      })
      
  }, []);

  return (
    <>
      <div className="container text-center">
        <h2 className="trext-center w-100">API Fatch Componment</h2>
        {studentdata &&
          studentdata.map((item) => (
            <tr key={item.id}>
              <div className="card">
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}

                  <h6 className="card-subtitle mb-2 text-muted">{item.name}</h6>
                  <p className="card-text">{item.address}</p>
                  <div>
                    <Link to="Studentadd">
                      <button className="btn btn-success">Add</button>
                    </Link>

                    
                    {/* <button className="btn btn-success">Back</button> */}

                  </div>
                </div>
              </div>
            </tr>
          ))}

        {
          // studentdata.map((list) =>{
          //   <h2>this is data fatched by API</h2>
          //   <ul key={item._id}>
          //   </ul>
          // //  {studentdata.}
          // })
        }
      </div>
    </>
  );
};

export default Studentdata;
