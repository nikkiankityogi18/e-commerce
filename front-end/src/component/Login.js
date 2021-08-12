import React from "react";
import { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom"


const Login = () => {
    const [user, setUser] = useState({
        
        email:"",
        password:"",
        
      })
      const handleChange = (e) => {
       
        const{ name, value } = e.target
        setUser({
          ...user,
          [name]:value
        })
        console.log(name,value)
      }

      const login = () => {
        axios.post("http://localhost:9000/login", user)
        .then( res => {

           console.log(res, res.data.message)
            
        })
    }


  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="coloum md-6">
          <div className="card">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">

              <form>

                <div className="form-group mb-3">
                  <label>Email Id</label>
                  <input
                    type=""
                    name="email"
                    className="form-control"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type=""
                    name="password"
                    className="form-control"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                  />
                </div>

                <div className="form-group mb-3">
                  <button type="submit" className="btn btn-dark" onClick={login}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
