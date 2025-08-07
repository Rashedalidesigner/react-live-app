import { Blogfrist } from "../components/Blogfrist";
import { Footer } from "../components/Footer";
import { Header2 } from "../components/Header2";
import "../style/Blog.css";



export const Blog = () => {
    return <>
        <div>
            <Header2 />
            <Blogfrist/>
            <Footer />
        </div>
    </>
}