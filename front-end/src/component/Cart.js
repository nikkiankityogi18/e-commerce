import React from 'react'
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import data from './data';



const Cart = (props) => {
   
    
    


  
  

    return (
        <div>
            <div class="container">
  <div class="row mt-4">
    <div class="col">
    <div>Shopping Cart</div>
    <hr/>
     <img src="/image/1.webp" alt=""/>
    </div>

    <div class="col">
    <div>Details</div>
    <hr/>

    <div class="card " style={{width: "18rem",marginTop:"3rem"}}>
  
  <div class="card-body">
    <h5 class="card-title">Total : $90</h5>
    
    <Link href="#" class="btn btn-warning mt-3">Proceed To Checkout</Link>
  </div>
</div>
    
    </div>
  </div>
  
    
  </div>
</div>


        
    )
}
export default withRouter(Cart);