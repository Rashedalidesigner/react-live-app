import { BiLogoBootstrap } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { TiArrowShuffle } from "react-icons/ti";
import { AiOutlineShopping } from "react-icons/ai";

export const Header = () => {
    return <>
        <div className="container-lg border">
            <div className="row container-lg flex-column border">
                <div className="col-lg-8 container border">
                    <div className="row border">
                        <div className="col-lg-3 border">
                            <BiLogoBootstrap />Bootstrap
                        </div>
                        <div className="col-lg-6 border">
                            <div className="row border">
                                <div className="col-lg-8 border">
                                    <input type="text" placeholder="Search for products" />
                                </div>
                                <div className="col-lg-3 border">
                                    <p className="header-text">SELECT CATEGORY</p>
                                </div>
                                <div className="col-lg-1 border">
                                    <CiSearch />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 border">
                            <div className="flex border">
                                <p>LOGIN/REGISTER</p>
                                <FaRegHeart />
                                <TiArrowShuffle />
                                <AiOutlineShopping />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 border">

                </div>
            </div>
        </div>
    </>
}