import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { TiArrowShuffle } from "react-icons/ti";
import { AiOutlineShopping } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import "../style/Header.css"; // Assuming you have a CSS file for styling
import { UseMainStore } from "../Store/MainStore";



export const Header2 = () => {
    const {searchData,handleinputchange,search} = UseMainStore();
    
    return <>
        <div className="header-container">
            <div className="header-top">
                <div className="header-logo">
                    <span><img src="ecommerce-websites-logo-design20-removebg-preview.png" alt="" /></span>
                    <span>E-SHOP</span>
                </div>
                <div className="header-search">
                    <div className="search-input">
                        <input type="text" onChange={handleinputchange} value={search} placeholder="Search for products"/>
                    </div>
                    <div className="search-category">
                        SELECT CATEGORY
                    </div>
                    <div className="search-icon" onClick={searchData}>
                        <CiSearch />
                    </div>
                </div>
                <div className="header-icons">
                    <span className="login-register"><Link to="/login">LOGIN</Link>/<Link to="/register">REGISTER</Link></span>
                    <NavLink to="/wishlist"><span><FaRegHeart /></span></NavLink>
                    <span><TiArrowShuffle /></span>
                    <span><Link to="/cart"><AiOutlineShopping /></Link></span>
                </div>
            </div>
            <div className="header-bottom">
                <div className="header-wrapper">
                    <div className="header-category">
                        <span className="three-line"><IoReorderThreeOutline /></span>
                        <span>BROWSE CATEGORY</span>
                    </div>
                    <div className="header-nav">
                        <nav>
                            <ul>
                                <li><NavLink to="/">HOME</NavLink></li>
                                <li><NavLink to="/shop">SHOP</NavLink></li>
                                <li><NavLink to="/blog">BLOG</NavLink></li>
                                <li><NavLink to="/pages">PAGES</NavLink></li>
                                <li><NavLink to="/elements">ELEMENTS</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="header-offers">
                    <div><p>SPECIAL OFFER</p></div>
                    <div><p>PURCHASE THEME</p></div>
                </div>
            </div>
        </div>
    </>
}