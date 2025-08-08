import { useEffect } from "react";
import { UseMainStore } from "../Store/MainStore"
import { Adminheader } from "./Adminheader"
import { OrderPage } from "./Orderpage"

export const Order = ()=>{
    const {orderStore,orderDetile} = UseMainStore();
    useEffect(()=>{
        orderDetile();
    },[])
    return <>
        <div className="container-lg">
            <Adminheader/>
            <OrderPage/>
        </div>
    </>
}