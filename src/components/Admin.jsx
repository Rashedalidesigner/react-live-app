import { useEffect } from "react"
import { Adminheader } from "./Adminheader"
import { useNavigate } from "react-router-dom";

export const Admin = ()=>{
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    console.log(token);
    useEffect(()=>{
        navigate("/");
    },[]);
    return <>
        <div className="container-lg">
            <Adminheader/>
        </div>
    </>
}