import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import data from "./data"
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProduct();
  });
  const getProduct = () => {
    // event.preventDefault();
    axios.get("http://localhost:9000/GetProduct").then((res) => {
      setData(res.data);
    });
  };
  return (
    <div className="products" style={{ margin: "1rem" }}>
      {data.map((product) => (
        <div
          className="product"
          style={{ width: "20rem", margin: "0.5rem", display: "inline-block" }}
        >
          <div className="card ">
            <img
              src={product.image}
              className="card-img-top "
              alt="product pics"
              style={{height:"25rem",width:"18rem"}}
            />
            <div className="card-body">
              <Link
                className="card-title mx-3"
                to={"/productdetail/" + product._id}
                style={{ textDecoration: "none", fontWeight: "bold" }}
              >
                {product.title}
              </Link>

              <h6 className="card-title mt-2 mx-3">${product.price}</h6>

              {/* <p className="card-text">{product.description}</p> */}

              <Link to={"/productdetail/" + product._id}>
                <button className="btn btn-primary mt-3 mx-3">
                  View detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;
