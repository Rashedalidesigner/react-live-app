import { Footer } from "../components/Footer";
import { Header2 } from "../components/Header2";
import { PagesComponents } from "../components/PagesComponents";
import "../style/Pages.css";


export const Pages = () => {
    return <>
        <div>
            <Header2 />
            <PagesComponents />
            <Footer />
        </div>
    </>
}