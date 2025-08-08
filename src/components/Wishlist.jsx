import { CiHeart } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import "../style/Shop.css";
import { UseMainStore } from "../Store/MainStore";

export const Wishlist = () => {
    console.log("wishlist");

    const {wishlist} = UseMainStore();
    console.log(wishlist)
    return <>
        <div className="container-lg">
            <div className="row">
                {
                    wishlist.map((item, index) => {
                        return <div key={index} className="col-lg-3 " >
                            <div className="section-3-card">
                                <div>
                                    <img className="card-imges-css" src={item.image} alt="" />
                                </div>
                                <div className="section-3-card-text">
                                    <div >
                                        <b>{item.title}</b>
                                    </div>
                                    <p>{item.name}</p>
                                    <b>${item.price}</b>
                                </div>
                                <div className="section-3-card-hover">
                                    <div className="section-3-card-hover-text card-text-hover">
                                        <p>{item.discription}</p>
                                    </div>
                                    <div className="section-3-card-footer">
                                        <div><CiHeart /></div>
                                        <div className="section-3-card-btn" onClick={() => handleclickorder(item)}>ADD TO CART</div>
                                        <div><IoMdSearch /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </>
}