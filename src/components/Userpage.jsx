import { use } from "react";
import { UseMainStore } from "../Store/MainStore";

export const Userpage = () => {
    const { user } = UseMainStore();
    const users = (user.data);
    if(!users){
        return <>
            <div>
                <h1>Loding</h1>
            </div>
        </>
    }
    console.log(users)
    return <>
        <div className="container-lg">
            <div class="overflow-x-auto">
                <table class="table table-xs">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    </>
}