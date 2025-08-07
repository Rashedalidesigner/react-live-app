import { Adminheader } from "./Adminheader"
import { OrderPage } from "./Orderpage"

export const Order = ()=>{
    return <>
        <div className="container-lg">
            <Adminheader/>
            <OrderPage/>
        </div>
    </>
}