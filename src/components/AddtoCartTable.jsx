import { useState } from "react";
import { UseMainStore } from "../Store/MainStore";
import "../style/Shop.css"
import { useNavigate } from "react-router-dom";



export const AddtoCartTable = () => {
    const navigate = useNavigate();
    const { addtocart, incrizeQuentity,orderpagedataset, decrizeQuentity,emtyaddtocart, handledeleteproduct } = UseMainStore();
    const [shapping, setShapping] = useState(["Flat rate"]);
    "Flat rate", "Free shipping", "Local Pickup"
    let Total = 0;

    // Calculate subtotal for each item and total subtotal
    const subtotals = addtocart.map(item => item.Price * item.quentity);
    const totalSubtotal = subtotals.reduce((acc, curr) => acc + curr, 0);
    const handleplaceorder = () =>{
        const orderdata = {
            product:[addtocart],
            total:totalSubtotal,
            shapping:shapping
        }
        orderpagedataset(orderdata);
        navigate("/checkout")
        emtyaddtocart();
        
    }
    const handeleclickshapping = (e) => {
        let value = e.target.value;
        switch (value) {
            case "rlat":
                setShapping("Flat rate");
                break;
            case "free":
                setShapping("Free shipping");
                break;
            case "local":
                setShapping("Local Pickup");
                break;
            default:
                setShapping("Flat rate");
                break;
        }
    }

    switch (shapping) {
        case "Flat rate":
            Total = totalSubtotal + 20;
            break;
        case "Free shipping":
            Total = totalSubtotal;
            break;
        case "Local Pickup":
            Total = totalSubtotal + 25;
            break;
        default:
            Total = totalSubtotal + 20;
            break;
    }

    return <>
        <div className="container-lg">
            <div class="overflow-x-auto">
                <div className="d-flex align-items-center justify-content-center my-3">
                    <h2 className="text-center">Cart Page</h2>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Product</th>
                            <th>Quentity</th>
                            <th>Delete</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addtocart.map((item, index) => {
                            console.log(item)
                            return <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item.Name}</td>
                                <td>{item.Price}</td>
                                <td><img className="addtocartimage" src={item.image} alt="" /></td>
                                <td className="button-box-incrizedecrize"><button className="incrizedecrizebutton" onClick={() => incrizeQuentity(item)}>+</button><span>{item.quentity}</span><button className="incrizedecrizebutton" onClick={() => decrizeQuentity(item)}>-</button></td>
                                <td><button className="cart-delete-button" onClick={()=>handledeleteproduct(item)}>Delete</button></td>
                                <td>{item.Price * item.quentity}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <div className="cart-ceckout">
                    <div className="cart-total-box">
                        <div>
                            <h2>CART TOTALS</h2>
                        </div>
                        <div className="cart-total-subtotal">
                            <p>subtotal</p>
                            <span>{totalSubtotal}</span>
                        </div>
                        <div className="cart-total-subtotal">
                            <div>
                                <b>Shipping</b>
                            </div>
                            <div className="cart-total-shapping">
                                <div className="cart-total-shapping-box">
                                    <label htmlFor="">Flat rate: $20</label>
                                    <input type="radio" name="rate" value="rlat" onClick={handeleclickshapping} />
                                </div>
                                <div className="cart-total-shapping-box">
                                    <label htmlFor="">Free shipping </label>
                                    <input type="radio" name="rate" value="free" onClick={handeleclickshapping} />
                                </div>
                                <div className="cart-total-shapping-box">
                                    <label htmlFor="">Local Pickup: $25</label>
                                    <input type="radio" name="rate" value="local" onClick={handeleclickshapping} />
                                </div>
                            </div>
                        </div>

                        <div className="cart-total-subtotal">
                            <div><h5>Total</h5></div>
                            <div><b>{Total}</b></div>
                        </div>
                        <div className="checkoutbtn">
                            <button onClick={handleplaceorder}>Order</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}   