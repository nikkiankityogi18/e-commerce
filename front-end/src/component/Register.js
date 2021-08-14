import { React , useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { useHistory } from "react-router-dom"


const Register = () => {
  const history = useHistory()
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    confirm_password:"",
  })
  const handleChange=(e)=>{
   
    const{name,value} = e.target
    setUser({
      ...user,
      [name]:value
    })
    console.log(name,value)
  }
  
  const register = (event) => {
    event.preventDefault();
    const { name, email, password, confirm_password } = user
    if( name && email && password && (password === confirm_password)){
        axios.post("http://localhost:9000/register", user)
        .then( res => {
         
            alert(res.data.message)
            history.push("/login")
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
    <h4>Sign Up</h4>
    </div>
    <div className="card-body">
      <form>

        <div className="form-group mb-3">
          <label>Full Name</label>
          <input type="" name="name" className="form-control" value={user.name} onChange={handleChange} placeholder="Enter your full name"/>
        </div>

        <div className="form-group mb-3">
          <label>Email Id</label>
          <input type="" name="email" className="form-control" value={user.email} onChange={handleChange}  placeholder="Enter your email"/>      
        </div>

        <div className="form-group mb-3">
          <label>Password</label>
          <input type="" name="password" className="form-control" value={user.password} onChange={handleChange} placeholder="Enter Password"/>        
        </div>

        <div className="form-group mb-3">
          <label>confirm_password Password</label>
          <input type="" name="confirm_password" className="form-control" value={user.confirm_password} onChange={handleChange}  placeholder="Re-enter Password"/>
        
        </div>

        <div className="form-group mb-3">
          <button type="submit" onClick={register} className="btn btn-dark">Register</button>
        </div>

      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
export  default Register