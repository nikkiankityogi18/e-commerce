import React,{useState,useEffect} from 'react';
import {withRouter} from 'react-router';
import axios from "axios";
import { Link, useHistory } from "react-router-dom"

function Productdetail(props) {
  const history = useHistory()
// const product = data.products.find((x) => x._id === props.match.params.id);
const [product, setProduct] = useState([]);
const [cart, setCart] = useState([]);
useEffect(() => {
  getProductbyId(props.match.params.id);
});


const getProductbyId = (Id) => {
  let cartData = JSON.parse(localStorage.getItem('CartData'));
  if(cartData)
  {
    setCart(cartData==null?[]:cartData);
  }
  axios.get("http://localhost:9000/GetProduct").then((res) => {
    setProduct(res.data.find((x) => x._id === Id));
  });
};


const AddCart = (event) => {
  event.preventDefault();
  let cartData = JSON.parse(localStorage.getItem('CartData'));
  if(cartData==null)cartData=[];
  cartData.push(product);
  localStorage.setItem('CartData',JSON.stringify(cartData));
  setCart(cartData);
}

 const openCart=()=>{
  let LoginData = JSON.parse(localStorage.getItem('LoginData'));
  if(LoginData==null)
  {
    history.push("/login");
  }
  else
  {
    history.push("/cart");
  }
 }
return (
    <div className="container mt-5">
    <Link onClick={openCart} alt=''>Cart:{cart.length}</Link>
    <div className="row">
      <div className="col mt-2">
      {/* 1st coloum */}
     
       <div>
         <img src={product.image} alt="productimg"/>
         <div className="title mx-5"><h5>{product.title}</h5></div>
          <div>
        <Link to="/">Back to page</Link>
       </div>
       </div>
      </div>

{/* 2nd coloum */}
        <div className="col mt-5">
        <div  >
         <ul className="second" style={{listStyle:"none"}}>
           <li>
             <h4>{product.title}</h4>
           </li>
           <li>
             <b>Price:-${product.price}</b>
           </li>
           <li>
             Discription:-
             <div>
               <p>{product.description}</p>
             </div>
           </li>
         </ul>
       </div>
      </div>

      <div className="col mt-5 ">

      <ul className="list-group ">
      
  <li className="list-group-item">Price: ${product.price}</li>

  
  <li  className="list-group-item"><button type="button" className="btn btn-success"  onClick={AddCart}>Add To Cart</button></li>
  <li  className="list-group-item"><button type="button m-1" className="btn btn-success"  onClick={openCart}>Cart <img src="/image/cart.svg" alt=""/>  : {cart.length}</button></li>
  
  
  
</ul>
        
      </div>


    </div>
    </div>
       
  );

}
export default withRouter(Productdetail);



