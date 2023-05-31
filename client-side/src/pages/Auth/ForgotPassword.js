import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [answer, setAnswer] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const {data} = await axios.post(`${process.env.REACT_APP_API}/forgot-password`,{
                email,
                answer,
                newPassword
            });
            if(data){
                navigate("/login")
                toast.success(data.message)
            }else{
                toast.error("Failed Password Reset")
            }
        }catch(error){
            console.log(error)
            toast.error("something went wrong")
        }
    }
  return (
    <Layout>
      <div>
  <div className="hero-section hero-background">
    <h1 className="page-title">Organic Fruits</h1>
  </div>
  <div className="container">
    <nav className="biolife-nav">
      <ul>
        <li className="nav-item"><NavLink href="index-2.html" className="permal-link">Home</NavLink></li>
        <li className="nav-item"><span className="current-page">Reset Password</span></li>
      </ul>
    </nav>
  </div>
  <div className="page-contain login-page">
    <div id="main-content" className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="signin-container">
              <form onSubmit={handleSubmit} name="frm-login" method="post">
                <p className="form-row">
                  <label htmlFor="fid-name">Email Address:<span className="requite">*</span></label>
                  <input 
                        type="email" 
                        id="fid-name" 
                        name="email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} 
                        defaultValue 
                        className="txt-input"
                        placeholder='Enter your email address' 
                  />
                </p>
                <p className="form-row">
                  <label htmlFor="fid-name">Answer:<span className="requite">*</span></label>
                  <input 
                        type="text" 
                        id="fid-name" 
                        name="answer" 
                        value={answer}
                        onChange={(e)=> setAnswer(e.target.value)} 
                        defaultValue 
                        className="txt-input"
                        placeholder='Enter your favorite sports' 
                  />
                </p>
                <p className="form-row">
                  <label htmlFor="fid-pass">New Password:<span className="requite">*</span></label>
                  <input 
                        type="text" 
                        id="fid-pass" 
                        name="password" 
                        value={newPassword}
                        onChange={(e)=> setNewPassword(e.target.value)} 
                        defaultValue 
                        className="txt-input"
                        placeholder='Enter your new password' 
                  />
                </p>
                <p className="form-row wrap-btn">
                  <button className="btn btn-submit btn-bold" type="submit">Reset</button>
                  <NavLink to="/login" className="link-to-help">LOGIN</NavLink>
                </p>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="register-in-container">
              <div className="intro">
                <h4 className="box-title">New Customer?</h4>
                <p className="sub-title">Create an account with us and you’ll be able to:</p>
                <ul className="lis">
                  <li>Check out faster</li>
                  <li>Save multiple shipping anddesses</li>
                  <li>Access your order history</li>
                  <li>Track new orders</li>
                  <li>Save items to your Wishlist</li>
                </ul>
                <NavLink to="/register" className="btn btn-bold">Sign Up</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </Layout>
  )
}

export default ForgotPassword
