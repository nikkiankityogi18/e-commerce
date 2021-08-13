import React from 'react';
import data from './data';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import './productdetail.css'

function Productdetail(props) {
const product = data.products.find((x) => x._id === props.match.params.id);
return (
    <div className="container mt-5">
    <div className="row">
      <div className="col mt-2">
      {/* 1st coloum */}
     
       <div>
         <img src={product.image} alt="productimg"></img>
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

      <ul class="list-group ">
  <li class="list-group-item">Price: ${product.price}</li>
  
  <li class="list-group-item"><button type="button" class="btn btn-success">Add To Cart</button></li>
  
  
</ul>
        
      </div>


    </div>
    </div>
       
  );

}
export default withRouter(Productdetail);



