
import { useNavigate } from "react-router-dom"
import { UseMainStore } from "../Store/MainStore"
import { Footer } from "./Footer"
import { Header2 } from "./Header2"
import { useState } from "react"

export const CheckOut = () => {
    const navigator = useNavigate();
    const { orderpagedata, createOrdercode, createDate } = UseMainStore();
    console.log(orderpagedata, "checkoutpage")
    const [checkoutdata, setCheckoutdata] = useState({
        name: "",
        address: "",
        email: "",
        phone: ""
    });
    const genarateorder = () => {
        const orderdetiless = {
            ordercode: createOrdercode(),
            name: checkoutdata.name,
            address: checkoutdata.address,
            phone: checkoutdata.phone,
            email: checkoutdata.email,
            date: createDate(),
            total: orderpagedata[0].total || 0,
            paymentmethod: orderpagedata[0].shapping[0],
            orderdetile: orderpagedata[0].product[0]
        }
        return orderdetiless;
    }
    const handlesubmitcheckout = async (e) => {
        e.preventDefault();
        const orderdata = genarateorder();
        const orderpost = await fetch("http://localhost:5000/admin/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderdata)
        })
        if (orderpost.status == 200) {
            alert("Order Placed Successfully");
            setCheckoutdata({
                name: "",
                address: "",
                email: "",
                phone: ""
            });
            navigator("/")
        }else{
            alert("Order Placed Failed");
            setCheckoutdata({
                name: "",
                address: "",
                email: "",
                phone: ""
            });
            navigator("/")
        }

    }
    const handlecheckoutchanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCheckoutdata({
            ...checkoutdata,
            [name]: value
        })
    }
    return <>
        <div>
            <Header2 />
            <div className="container-lg ">
                <div className="container-lg align-items-center">
                    <h2 className="text-center my-5">CheckOut</h2>
                </div>

                <div className="container w-100 align-items-start">
                    <form className="w-50" onSubmit={handlesubmitcheckout}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input name="name" value={checkoutdata.name} type="text" onChange={handlecheckoutchanges} className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input name="address" value={checkoutdata.address} type="text" onChange={handlecheckoutchanges} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">E-mail</label>
                            <input name="email" value={checkoutdata.email} type="email" onChange={handlecheckoutchanges} className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input name="phone" value={checkoutdata.phone} type="number" onChange={handlecheckoutchanges} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Total :{orderpagedata[0]?.total || 0}</label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Payment Method :{orderpagedata[0]?.shapping?.[0] || "na"}</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>

    </>
}