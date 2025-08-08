import { useEffect } from "react";
import { Userpage } from "../components/Userpage"
import { UseMainStore } from "../Store/MainStore"
import { Adminheader } from "./Adminheader"

export const User = ()=>{
    const {Showuser} = UseMainStore();
    useEffect(()=>{
        Showuser();
    },[]);
    return <>
        <div className="container-lg">
            <Adminheader/>
            <Userpage/>
        </div>
    </>
}