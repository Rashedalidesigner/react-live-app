import { useEffect } from "react";
import { UseMainStore } from "../Store/MainStore";



export const OrderPage = () => {
    const { orderStore } = UseMainStore();
    const orderData = (orderStore.data);
    if(!orderData){
        return <>
            <div>
                <h1>Loding</h1>
            </div>
        </>
    }
    console.log(orderData);
    return <>
        <div className="container-lg">
            <div class="overflow-x-auto">
                <table class="table table-xs">
                    <thead>
                        <tr>
                            <th>Order Code</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Date</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Total</th>
                            <th>Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData.map((item, index) => {
                            return <tr key={index}>
                                <th>{item.ordercode}</th>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.date}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.total}</td>
                                <td>{item.paymentmethod}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    </>
}