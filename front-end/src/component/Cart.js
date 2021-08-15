import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Cart = (props) => {
  const history = useHistory();
  const [product, setProduct] = useState({
    address: "",
    price: "",
    user: "",
    products: [],
  });
  const cart = JSON.parse(localStorage.getItem("CartData"));
  const totalPrice = cart.reduce(
    (totalPrice, crt) => parseFloat(totalPrice) + parseFloat(crt.price),
    0
  );
  const handleChange = (e) => {
    const { value } = e.target;
    let LoginData = JSON.parse(localStorage.getItem('LoginData'));
    setProduct({
      address: value,
      price: totalPrice,
      user:LoginData.email,
      products: cart

    });
  };
  const checkout = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/createorder", product).then((res) => {
      alert(res.data.message);
      localStorage.setItem("CartData", null);
      history.push("/");
    });
  };
  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product, index) => (
                    <tr key={index + 1}>
                      <th scope="row">{index + 1}</th>
                      <th>{product.title}</th>
                      <td>{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col">
            <div>Details</div>
            <hr />
            <div
              className="card "
              style={{ width: "18rem", marginTop: "3rem" }}
            >
              <div className="card-body">
                <form>
                  <div className="form-group mb-3">
                    <label>Address</label>
                    <input
                      type=""
                      name="title"
                      className="form-control"
                      value={product.address}
                      onChange={handleChange}
                      placeholder="Enter Address here"
                    />
                  </div>
                  <h5 className="card-title">Total : ${totalPrice}</h5>
                  <button  onClick={checkout} className="btn btn-warning mt-3">
                    Proceed To Checkout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
