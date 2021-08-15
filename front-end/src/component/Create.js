import { React , useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { useHistory } from "react-router-dom"

export const Create = () => {
    const history = useHistory()
    const [product, setProduct] = useState({
        title:"",
        image:"",
        price:"",
        description:"",
      })

      const handleChange=(e)=>{
        const{name,value} = e.target
        setProduct({
          ...product,
          [name]:value
        })
        console.log(name,value)
      }

      const create = (event) => {
        event.preventDefault();
        const { title,image,price,description } = product
        if( title && image && price && description){
            axios.post("http://localhost:9000/create", product)
            .then( res => {
             
                alert(res.data.message)


                history.push("/")
            })
        } else {
            alert("invlid input")
        }
        
    }
    
    return (
        <div className="container py-5" style={{width:"30rem"}} >
    <div className="row justify-content-center">
    <div className="coloum md-6">
    {/* style={{ width: '18rem' }} */}
    <div className="card">
    <div className="card-header">
    <h4>Create Product</h4>
    </div>
    <div className="card-body">
      <form>

        <div className="form-group mb-3">
          <label>Title</label>
          <input type="" name="title" className="form-control" value={product.title} onChange={handleChange} placeholder="Enter title here"/>
        </div>

        <div className="form-group mb-3">
          <label>Image</label>
          <input type="" name="image" className="form-control" value={product.image} onChange={handleChange}  placeholder="Enter image url(/image/1.wabp)"/>      
        </div>

        <div className="form-group mb-3">
          <label>Price</label>
          <input type="" name="price" className="form-control" value={product.price} onChange={handleChange} placeholder="Enter Price"/>        
        </div>

        <div className="form-group mb-3">
          <label>Description</label>
          <input type="" name="description" className="form-control" value={product.description} onChange={handleChange}  placeholder="description"/>
        
        </div>

        <div className="form-group mb-3">
          <button type="submit" onClick={create} className="btn btn-dark">Create</button>
        </div>

      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Create;
