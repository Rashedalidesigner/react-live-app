import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header2 } from "../components/Header2";
import { HomeSection } from "../components/HomeSection";
import { UseMainStore } from "../Store/MainStore";

export const Home = ()=>{
    const { GetData } = UseMainStore();
    useEffect(()=>{
        GetData();
    },[]);
    
    return <>
        <div>
            <Header2/>
            <HomeSection/>
            <Footer/>
        </div>
    </>
}