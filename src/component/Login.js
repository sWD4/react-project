import React from 'react'
import { Link } from 'react-router-dom'
import './css/Login.css'

function Login() {
  return (
    <>
    <section className="login-wrap">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 mt-5">
                    <div className="login-box">
                        <h1>
                            <span className='admin'>ADMIN</span>
                            LOGIN
                        </h1>
                        <p className="text-center text-white">GREAT TO HAVE YOU BACK</p>
                        <form onsubmit=" return validate()" action="index.html"  className="pt-4">
                            <div className="form-group log mb-4">
                                <input type="text" id="username" value=""  className="form-control" placeholder="Username"/>
                            </div>
                            <div className="form-group log mb-4">
                                <input type="password" id="userpass" value="" className="form-control" placeholder="Password"/>
                            </div>
                            <div className="form-group text-center">
                                <button  type="submit" name="" value="submit" className="btn btn-danger">submit</button>
                                <br/>
                                <div className="mt-3">
                                    <span className="text-white mt-3">DON`T HAVE AN ACCOUNT?</span>
                                    <Link to="/" className="btn reg">&nbsp;REGISTER NOW</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

   
    </>
  )
}

export default Login