import { Footer } from "./Footer";
import { Header2 } from "./Header2";
import "../style/Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export const Register = () => {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        password: ""
    });
    const handleinputsignup = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegister({
            ...register,
            [name]: value
        })

    }

    const handleregistersubmit = async (e) => {
        e.preventDefault();
        console.log(register)
        try {
            const response = await fetch("https://react-live-app-server.onrender.com/admin/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(register)
            })
             
            
            console.log(response);
            if (response.ok) {
                const res_data =await response.json();
                console.log(res_data)
                localStorage.setItem("token", res_data.token);
                // console.log("ser")
                setRegister({
                    name: "",
                    email: "",
                    address: "",
                    phone: "",
                    password: ""
                })
            }

            if(!response.ok){
                alert("Register NOt Sucessfull");
                setRegister({
                    name: "",
                    email: "",
                    address: "",
                    phone: "",
                    password: ""
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return <>
        <div>
            <Header2 />
            <div className="login-page-container">
                <div className="form-box">
                    <form className="form" onSubmit={handleregistersubmit}>
                        <span className="title">Sign up</span>
                        <span className="subtitle">Create a free account with your email.</span>
                        <div className="form-container">
                            <input type="text" className="input" value={register.name} name="name" placeholder="Full Name" onChange={handleinputsignup} />
                            <input type="email" className="input" value={register.email} name="email" placeholder="Email" onChange={handleinputsignup} />
                            <input type="text" className="input" value={register.address} name="address" placeholder="Address" onChange={handleinputsignup} />
                            <input type="number" className="input" value={register.phone} name="phone" placeholder="Phone Number" onChange={handleinputsignup} />
                            <input type="password" className="input" value={register.password} name="password" placeholder="Password" onChange={handleinputsignup} />
                        </div>
                        <button type="submit">Sign up</button>
                    </form>
                    <div className="form-section">
                        <p>Have an account? <Link to="/login">log in</Link> </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
}