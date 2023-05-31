import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [answer, setAnswer] = useState("")
    const [address, setAddress] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const {data} = await axios.post(`${process.env.REACT_APP_API}/register`, {
                name,
                email,
                password,
                phone,
                answer,
                address
            });
            if(data?.error){
                toast.error(data.error)
            }else{
                toast.success("Registration Success")
                navigate("/login")
            }
        }catch(err){
            console.log(err)
            toast.error("Registration Fail")
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
        <li className="nav-item"><span className="current-page">Register</span></li>
      </ul>
    </nav>
  </div>
  <div className="page-contain login-page">
    <div id="main-content" className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="signin-container">
              <form onSubmit={handleSubmit} name="frm-login" style={{"margin-bottom": "70px"}}>
                <p className="form-row">
                  <label htmlFor="fid-name">Name: <span className="requite">*</span></label>
                  <input 
                        type="text" 
                        id="fid-name" 
                        name="name" 
                        value={name}
                        onChange={(e)=> setName(e.target.value)} 
                        defaultValue 
                        className="txt-input" 
                        placeholder='Enter your name' 
                 />
                </p>
                <p className="form-row">
                  <label htmlFor="fid-pass">Email:<span className="requite">*</span></label>
                  <input 
                        type="email" 
                        id="fid-pass" 
                        name="email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} 
                        defaultValue 
                        className="txt-input" 
                        placeholder='Enter your email'
                  />
                </p>
                <p className="form-row">
                  <label htmlFor="fid-pass">Password:<span className="requite">*</span></label>
                  <input 
                        type="password" 
                        id="fid-pass" 
                        name="password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)} 
                        defaultValue 
                        className="txt-input" 
                        placeholder='Enter your password'
                  />
                </p>
                <p className="form-row">
                  <label htmlFor="fid-pass">Phone:<span className="requite">*</span></label>
                  <input 
                        type="text" 
                        id="fid-pass" 
                        name="phone" 
                        value={phone}
                        onChange={(e)=> setPhone(e.target.value)} 
                        defaultValue 
                        className="txt-input" 
                        placeholder='Enter your phone'
                  />
                </p>
                <p className="form-row">
                  <label htmlFor="fid-pass">Answer:<span className="requite">*</span></label>
                  <input 
                        type="text" 
                        id="fid-pass" 
                        name="answer" 
                        value={answer}
                        onChange={(e)=> setAnswer(e.target.value)} 
                        defaultValue 
                        className="txt-input"  
                        placeholder='Enter your Favorite sports'
                  />
                </p>
                <p className="form-row">
                  <label htmlFor="fid-pass">Address:<span className="requite">*</span></label>
                  <input 
                        type="text" 
                        id="fid-pass" 
                        name="address" 
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)} 
                        defaultValue 
                        className="txt-input" 
                        placeholder='Enter your address' 
                  />
                </p>
                <p className="form-row wrap-btn">
                  <button className="btn btn-submit btn-bold" type="submit">Sign up</button>
                  
                </p>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{"margin-top": "30px"}}>
            <div className="register-in-container">
              <div className="intro">
                <h4 className="box-title">Already Have a Account?</h4>
                <p className="sub-title">Create an account with us and you’ll be able to:</p>
                <ul className="lis">
                  <li>Check out faster</li>
                  <li>Save multiple shipping anddesses</li>
                  <li>Access your order history</li>
                  <li>Wishlist</li>
                  <li>Add to Favorite</li>
                  <li>Track new orders</li>
                  <li>Save items to your Wishlist</li>
                </ul>
                <NavLink to="/login" className="btn btn-bold">Log in</NavLink>
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

export default Register
