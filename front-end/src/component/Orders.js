import React, { useState,useEffect } from "react";
import axios from "axios";


const Orders = (props) => {
  const [order, setOrder] = useState([]);
   useEffect(() => {
    getOrders()
   })
   const getOrders = () => {
    let LoginData = JSON.parse(localStorage.getItem('LoginData'));
    axios.get("http://localhost:9000/GetOrder").then((res) => {
        
        const data=res.data.filter((x) => x.user === LoginData.email);
        setOrder(data==null?[]:data);
    });
  };
 
  return (
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
                  {order.map((orders, index1) => (
                    orders.products.map((product, index) => (
                    <tr key={orders._id+(index + 1)}>
                      <th scope="row">{index + 1}</th>
                      <th>{product.title}</th>
                      <td>{product.price}</td>
                    </tr>
                  ))))}
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </div>
  );
};
export default Orders;
