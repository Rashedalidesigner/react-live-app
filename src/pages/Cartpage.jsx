import { AddtoCartTable } from "../components/AddtoCartTable";
import { Footer } from "../components/Footer";
import { Header2 } from "../components/Header2";
import "../style/Shop.css";

export const Cartpage = () => {
    return <>
        <div>
            <div>
                <Header2 />
                <AddtoCartTable />
                <Footer />
            </div>
        </div>
    </>
}