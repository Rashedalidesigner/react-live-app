import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProtectedRoutes = ({children})=>{
    const isAuthenticated = false;
    const navigate = useNavigate();
    useEffect(()=>{
        if(!isAuthenticated) navigate("/")
    })
    return {
        children
    }
};

export default ProtectedRoutes;