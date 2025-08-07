import { useState } from "react"

export const PagesComponents = () => {
    const [pagestate, setPageState] = useState("All");
    const handleclickpages = (e) => {
        switch (e.target.dataset.name) {
            case "All":
                setPageState("All");
                break;
            case "Accessories":
                setPageState("Accessories");
                break;
            case "Decor":
                setPageState("Decor");
                break;
            case "Furniture":
                setPageState("Furniture");
                break;
            case "Kitchen":
                setPageState("Kitchen");
                break;
            case "Lighting":
                setPageState("Lighting");
                break;
            default:
                setPageState("All");
        }
    }
    return <>
        <section>
            <div>
                <section className="pages-section-1">
                    <h1>Portfolio</h1>
                </section>
                <div className="pages-section-nav">
                    <div className="pages-section-nav-box">
                        <div data-name="All" onClick={handleclickpages}>ALL</div>
                        <div data-name="Accessories" onClick={handleclickpages}>ACCESSORIES</div>
                        <div data-name="Decor" onClick={handleclickpages}>DECOR</div>
                        <div data-name="Furniture" onClick={handleclickpages}>RURNITURE</div>
                        <div data-name="Kitchen" onClick={handleclickpages}>KITCHEN</div>
                        <div data-name="Lighting" onClick={handleclickpages}>LIGHTING</div>
                    </div>
                </div>
                {pagestate == "All" && (
                    <>
                        <div className="pages-section-box">
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio14-700x700.jpg.webp" alt="" />
                                <span></span>
                            </div>
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio-project-23.jpg" alt="" />
                            </div>
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio12.jpg" alt="" />
                            </div>
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio11.jpg" alt="" />
                            </div>
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio10.jpg" alt="" />
                            </div>
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio9-800x800.jpg" alt="" />
                            </div>
                        </div>
                    </>
                )}
                {pagestate == "Accessories" && (
                    <>
                        <div className="pages-section-box">
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio12.jpg" alt="" />
                            </div>
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio2.jpg" alt="" />
                            </div>
                        </div>
                    </>
                )}
                {pagestate == "Decor" && (
                    <>
                        <div className="pages-section-box">
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio-project-23.jpg" alt="" />
                            </div>
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio8.jpg" alt="" />
                            </div>
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio4.jpg" alt="" />
                            </div>
                        </div>
                    </>
                )}
                {pagestate == "Furniture" && (
                    <>
                        <div className="pages-section-box">
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio14.jpg" alt="" />
                            </div>
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio9-800x800.jpg" alt="" />
                            </div>
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio.jpg" alt="" />
                            </div>
                        </div>
                    </>
                )}
                {pagestate == "Kitchen" && (
                    <>
                        <div className="pages-section-box">
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio10.jpg" alt="" />
                            </div>
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio7-800x800.jpg" alt="" />
                            </div>
                        </div>
                    </>
                )}
                {pagestate == "Lighting" && (
                    <>
                        <div className="pages-section-box">
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio11.jpg" alt="" />
                            </div>
                            <div className="pages-section-card">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio6.jpg" alt="" />
                            </div>
                        </div>
                    </>
                )}
                
            </div>
            
        </section >

    </>
}