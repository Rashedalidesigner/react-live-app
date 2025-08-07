import { Link } from "react-router-dom";
import "../style/Login.css";
import { Footer } from "./Footer";
import { Header2 } from "./Header2";
import { useState } from "react";



export const LoginPage = () => {
    const [login,setLogin]=useState({
        name:"",
        email:"",
        password:""
    })
    const handlechangelogin = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setLogin({
            ...login,
            [name]:value
        })
    }
    const handlesubmitlogin = (e)=>{
        e.preventDefault();
        console.log(login)
    }
    return <>
        <div>
            <Header2 />
            <div className="login-page-container">
                <div className="form-box">
                    <form className="form" onSubmit={handlesubmitlogin}>
                        <span className="title">Sign in</span>
                        <span className="subtitle">Create a free account with your email.</span>
                        <div className="form-container">
                            <input type="text" className="input" name="name" onChange={handlechangelogin} placeholder="Full Name" />
                            <input type="email" className="input" name="email" onChange={handlechangelogin} placeholder="Email" />
                            <input type="password" className="input" name="password" onChange={handlechangelogin} placeholder="Password" />
                        </div>
                        <button>Login in</button>
                    </form>
                    <div className="form-section">
                        <p>Don't Have an account? <Link to="/register">Sign up</Link> </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
}