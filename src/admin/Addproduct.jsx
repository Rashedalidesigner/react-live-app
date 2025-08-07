import { Adminheader } from "./Adminheader"
import { Addproductpage } from "./Adproductpage"

export const Addproduct = ()=>{
    return <>
        <div className="container-lg">
            <Adminheader/>
            <Addproductpage/>
        </div>
    </>
}