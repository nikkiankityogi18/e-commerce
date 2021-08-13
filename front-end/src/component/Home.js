import React from 'react'
import { Link } from 'react-router-dom'
import data from "./data"




const Home = () => {
    return (
            
        <div classNameName="products" style={{margin:"1rem"}}>
      { data.products.map(product=>

  <div className="product" style={{width: "18rem",margin:"0.5rem",display:"inline-block"}}>

     <div className="card " >
  <img src={product.image} className="card-img-top" alt="product pics"/>
  <div className="card-body">

    <Link className="card-title" to={'/productdetail/' + product._id} style={{textDecoration:"none",fontWeight:"bold"}}>{product.title}</Link>

    <h6 className="card-title mt-2">${product.price}</h6>

    <p className="card-text">{product.description}</p>

    <Link  to={'/productdetail/' + product._id}>
          <button  className="btn btn-primary" >View detail</button>
    </Link>
           
  </div>
  </div> 
  </div>
)}



  
  
</div>


       
    )
}
export default Home