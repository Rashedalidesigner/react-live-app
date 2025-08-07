import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { TiArrowShuffle } from "react-icons/ti";
import { UseMainStore } from "../Store/MainStore";
import { IoMdSearch } from "react-icons/io";
import { useEffect } from "react";

export const Card = () => {
  const {searchData,search, searchDataload,handleclickorder } = UseMainStore();
  console.log("sera",searchDataload);
  useEffect(()=>{
    searchData();
  },[search]);
  return <>
    <div className="container-lg">
      <div className="row">
        {
          searchDataload.map((item, index) => {
            console.log(item);
            return <div key={index} className="col-lg-3 " >
              <div className="section-3-card">
                <div>
                  <img className="card-imges-css" src={item.images[0]} alt="" />
                </div>
                <div className="section-3-card-text">
                  <div >
                    <b>{item.title}</b>
                  </div>
                  <p>{item.category.name}</p>
                  <b>${item.price}</b>
                </div>
                <div className="section-3-card-hover">
                  <div className="section-3-card-hover-text card-text-hover">
                    <p>{item.description}</p>
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