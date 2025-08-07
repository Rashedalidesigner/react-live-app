import { NavLink } from "react-router-dom";
import "../style/Admin.css";

export const Adminheader = () => {
    return <>
        <div className="container-lg h-20 d-flex align-items-center">
            <div className="d-flex row container-lg">
                <div className="col-lg-3">
                    <h3>Admin Panel</h3>
                </div>
                <div className="col-lg-6">
                    <nav className="d-flex align-items-center justify-content-center">
                        <ul className="admin-navbar">
                            <li><NavLink to="/admin">Admin</NavLink></li>
                            <li><NavLink to="/user">User</NavLink></li>
                            <li><NavLink to="/order">Order</NavLink></li>
                            <li><NavLink to="/addproduct">AddProduct</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <input type="text" placeholder="search product"/>
                </div>
            </div>
        </div>
    </>
}