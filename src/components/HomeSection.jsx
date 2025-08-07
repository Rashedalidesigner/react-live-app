import "../style/Home.css";
import { CiHeart } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { UseMainStore } from "../Store/MainStore";



export const HomeSection = () => {
  const {handleclickorder} = UseMainStore();
  
  return <>
    <div className="home-main-container">
      <section className="home-section-1">
        <div className="home-section-1-container">
          <div id="carouselExampleIndicators" class="carousel slide w-100">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="seaction-1-box">
                  <div className="section-1-text">
                    <h6>CAPPELLINI</h6>
                    <h2>Wooden Lounge Chairs.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ducimus tempora quo.</p>
                    <h3>$999.00</h3>
                  </div>
                  <div className="section-1-image">
                    <img src="https://woodmart.xtemos.com/wp-content/uploads/2024/02/slider-main-demo-1.jpg.webp" alt="" />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="seaction-1-box">
                  <div className="section-1-text">
                    <h2>Simple -</h2>
                    <h2> Rock Chair.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim officia quaerat explicabo?</p>
                    <h3>$199.00</h3>
                  </div>
                  <div className="section-1-image">
                    <img style={{ width: "500px", height: "500px" }} src="https://woodmart.xtemos.com/wp-content/uploads/2024/02/slider-main-demo-3-light-opt.jpg.webp" alt="" />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="seaction-1-box">
                  <div className="section-1-text">
                    <h2>Eames -</h2>
                    <h2>Side Chair.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim officia quaerat explicabo?</p>
                    <h3>Only $99.00</h3>
                  </div>
                  <div className="section-1-image">
                    <img src="https://woodmart.xtemos.com/wp-content/uploads/2024/02/slider-main-demo-2-light-opt.jpg.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" id="button-css-1">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" id="button-css-2">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="home-section-1-left">
          <ul className="category-list">
            <li>
              <span><img src="https://woodmart.xtemos.com/wp-content/uploads/2025/05/wd-chair.svg" alt="" /></span>
              <span>Furniture</span>
            </li>
            <li>
              <span><img src="https://woodmart.xtemos.com/wp-content/uploads/2025/05/wd-knives.svg" alt="" /></span>
              <span>Cooking</span>
            </li>
            <li>
              <span><img src="https://woodmart.xtemos.com/wp-content/uploads/2025/05/wd-flower.svg" alt="" /></span>
              <span>Accessories</span>
            </li>
            <li>
              <span><img src="https://woodmart.xtemos.com/wp-content/uploads/2025/05/wd-shirt.svg" alt="" /></span>
              <span>Fashion</span>
            </li>
            <li>
              <span><img src="https://woodmart.xtemos.com/wp-content/uploads/2025/05/wd-clock.svg" alt="" /></span>
              <span>Clocks</span>
            </li>
            <li>
              <span><img src="https://woodmart.xtemos.com/wp-content/uploads/2025/05/wd-light-bulb.svg" alt="" /></span>
              <span>Lighting</span>
            </li>
            <li>
              <span><img src="https://woodmart.xtemos.com/wp-content/uploads/2025/05/wd-rocking-horse.svg" alt="" /></span>
              <span>Toys</span>
            </li>
            <li>
              <span>
                <img src="https://woodmart.xtemos.com/wp-content/uploads/2025/05/wd-biscuit.svg" alt="" />
              </span>
              <span>Hand Made</span>
            </li>
            <li>
              <span><img src="https://woodmart.xtemos.com/wp-content/uploads/2025/05/wd-hand-bag.svg" alt="" /></span>
              <span>Minimalism</span>
            </li>
            <li>
              <span><img src="https://woodmart.xtemos.com/wp-content/uploads/2025/05/wd-game-console.svg" alt="" /></span>
              <span>Electronics</span>
            </li>
            <li>
              <span><img src="https://woodmart.xtemos.com/wp-content/uploads/2025/05/wd-break.svg" alt="" /></span>
              <span>Cars</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="home-section-2">
        <div className="section-2-text">
          <p>WOODMART COLLECTIONS</p>
          <h3>FEATURED CATEGORIES</h3>
          <p>WoodMart is a powerful eCommerce theme for WordPress.</p>
        </div>
        <div className="section-2-images">
          <div className="section-2-image-1">
            <img src="https://www.urbanconcepts.ph/wp/wp-content/uploads/2022/11/Shinichi-9.png" alt="" />
          </div>
          <div className="section-2-image-2">
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpuAngsWe9cdA65X-X2qOyx_1q4HIOOLSMg&s" alt="" />
            </div>
            <div>
              <img src="https://images.thdstatic.com/productImages/e3bdc23a-6ecc-4f52-9d4f-a8e0eb1775dd/svn/stainless-steel-delta-undermount-kitchen-sinks-95b932-32s-ss-40_600.jpg" alt="" />
            </div>
            <div>
              <img src="https://i.etsystatic.com/7539039/r/il/4520d2/3097429083/il_570xN.3097429083_r1x9.jpg" alt="" />
            </div>
            <div>
              <img src="https://www.babipur.co.uk/cdn/shop/files/grimms-single-car-main_7354a8b3-3131-48c0-9c64-2bd5a911831b.jpg?v=1726912815" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="home-section-3">
        <div className="section-2-text">
          <p>WOODEN ACCESSORIES</p>
          <h3>FEATURED PRODUCTS</h3>
          <p>Visit our shop to see amazing creations from our designers.</p>
        </div>
        <div className="section-3-container">
          <div className="section-3-text">
            <b>BEST SELLERS</b>
            <b>FEATURED</b>
            <b>SALES</b>
          </div>
          <div className="section-3-images">
            <div className="section-3-card">
              <div>
                <img className="img-thumbnail" src="https://woodmart.xtemos.com/wp-content/uploads/2016/08/product-accessories-8.jpg" alt="" />
              </div>
              <div className="section-3-card-text">
                <b>Smart watches wood edition</b>
                <p>Accessories, Cloks</p>
                <b>$599</b>
              </div>
              <div className="section-3-card-hover">
                <div className="section-3-card-hover-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at fugit alias molestiae. Quis, laboriosam.</p>
                </div>
                <div className="section-3-card-footer">
                  <div><CiHeart /></div>
                  <div className="section-3-card-btn" onClick={handleclickorder}>ADD TO CART</div>
                  <div><IoMdSearch /></div>
                </div>
              </div>
            </div>
            <div className="section-3-card">
              <div>
                <img className="img-thumbnail" src="https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-18.jpg" alt="" />
              </div>
              <div className="section-3-card-text">
                <b>Penatibus parturient orci morbi</b>
                <p>Toys</p>
                <b>$444.00</b>
              </div>
              <div className="section-3-card-hover">
                <div className="section-3-card-hover-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at fugit alias molestiae. Quis, laboriosam.</p>
                </div>
                <div className="section-3-card-footer">
                  <div><CiHeart /></div>
                  <div className="section-3-card-btn" onClick={handleclickorder}>ADD TO CART</div>
                  <div><IoMdSearch /></div>
                </div>
              </div>
            </div>
            <div className="section-3-card">
              <div>
                <img className="img-thumbnail" src="https://woodmart.xtemos.com/wp-content/uploads/2016/08/product-accessories-1.jpg" alt="" />
              </div>
              <div className="section-3-card-text">
                <b>Smart watches wood edition</b>
                <p>Accessories, Cloks</p>
                <b>$599</b>
              </div>
              <div className="section-3-card-hover">
                <div className="section-3-card-hover-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at fugit alias molestiae. Quis, laboriosam.</p>
                </div>
                <div className="section-3-card-footer">
                  <div><CiHeart /></div>
                  <div className="section-3-card-btn" onClick={handleclickorder}>ADD TO CART</div>
                  <div><IoMdSearch /></div>
                </div>
              </div>
            </div>
            <div className="section-3-card">
              <div><img className="img-thumbnail" src="https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-1.jpg" alt="" /></div>
              <div className="section-3-card-text">
                <b>Smart watches wood edition</b>
                <p>Accessories, Cloks</p>
                <b>$599</b>
              </div>
              <div className="section-3-card-hover">
                <div className="section-3-card-hover-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at fugit alias molestiae. Quis, laboriosam.</p>
                </div>
                <div className="section-3-card-footer">
                  <div><CiHeart /></div>
                  <div className="section-3-card-btn" onClick={handleclickorder}>ADD TO CART</div>
                  <div><IoMdSearch /></div>
                </div>
              </div>
            </div>
            <div className="section-3-card">
              <div><img className="img-thumbnail" src="https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-19-3.jpg" alt="" /></div>
              <div className="section-3-card-text">
                <b>Smart watches wood edition</b>
                <p>Accessories, Cloks</p>
                <b>$599</b>
              </div>
              <div className="section-3-card-hover">
                <div className="section-3-card-hover-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at fugit alias molestiae. Quis, laboriosam.</p>
                </div>
                <div className="section-3-card-footer">
                  <div><CiHeart /></div>
                  <div className="section-3-card-btn" onClick={handleclickorder}>ADD TO CART</div>
                  <div><IoMdSearch /></div>
                </div>
              </div>
            </div>
            <div className="section-3-card">
              <div><img className="img-thumbnail" src="https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-clock-1-2.jpg" alt="" /></div>
              <div className="section-3-card-text">
                <b>Smart watches wood edition</b>
                <p>Accessories, Cloks</p>
                <b>$599</b>
              </div>
              <div className="section-3-card-hover">
                <div className="section-3-card-hover-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at fugit alias molestiae. Quis, laboriosam.</p>
                </div>
                <div className="section-3-card-footer">
                  <div><CiHeart /></div>
                  <div className="section-3-card-btn" onClick={handleclickorder}>ADD TO CART</div>
                  <div><IoMdSearch /></div>
                </div>
              </div>
            </div>
            <div className="section-3-card">
              <div><img className="img-thumbnail" src="https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-3-2.jpg" alt="" /></div>
              <div className="section-3-card-text">
                <b>Smart watches wood edition</b>
                <p>Accessories, Cloks</p>
                <b>$599</b>
              </div>
              <div className="section-3-card-hover">
                <div className="section-3-card-hover-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at fugit alias molestiae. Quis, laboriosam.</p>
                </div>
                <div className="section-3-card-footer">
                  <div><CiHeart /></div>
                  <div className="section-3-card-btn" onClick={handleclickorder}>ADD TO CART</div>
                  <div><IoMdSearch /></div>
                </div>
              </div>
            </div>
            <div className="section-3-card">
              <div><img className="img-thumbnail" src="https://woodmart.xtemos.com/wp-content/uploads/2016/08/product-furniture-11.jpg" alt="" /></div>
              <div className="section-3-card-text">
                <b>Smart watches wood edition</b>
                <p>Accessories, Cloks</p>
                <b>$599</b>
              </div>
              <div className="section-3-card-hover">
                <div className="section-3-card-hover-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at fugit alias molestiae. Quis, laboriosam.</p>
                </div>
                <div className="section-3-card-footer">
                  <div><CiHeart /></div>
                  <div className="section-3-card-btn" onClick={handleclickorder}>ADD TO CART</div>
                  <div><IoMdSearch /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section-4">
        
      </section>
      <section className="home-section-5">

      </section>
      <section className="home-section-6">

      </section>
      <section className="home-section-7">

      </section>
    </div>

  </>
}