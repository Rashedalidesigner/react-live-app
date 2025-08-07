import { UserPage } from "../components/Userpage"
import { Adminheader } from "./Adminheader"

export const User = ()=>{
    return <>
        <div className="container-lg">
            <Adminheader/>
            <UserPage/>
        </div>
    </>
}