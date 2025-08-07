import { createContext, useContext, useReducer, useState } from "react";
import Reducer from "./MainReducer";
import axios from "axios";

const MainStoreContext = createContext();

const MainStoreProvider = ({ children }) => {
    const initialSate = {
        data: [],
        loading: false,
        error: null,
        addtocart: [],
        subtotal: [],
        searchDataload:[]
    }

    const [state, dispatch] = useReducer(Reducer, initialSate);

    const [category, setCategory] = useState(true);
    const [search, setSearch] = useState("");
    const handleinputchange = (e)=>{
        const value = e.target.value;
        setSearch(value)
    }

    const toggleCategory = () => {
        setCategory(!category);
    }
    const singleGetData = async (e) => {
        try {
            const singledata = await axios.get(`https://fakestoreapi.com/products/${e.id}`);
            console.log(singledata.data)
            return singledata
        } catch (error) {
            console.log(error)
        }

    }

        const searchData = () => {
        const data = state.data;
        const searchDatas = data.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
        dispatch({type:"SEARCH_DATA",payload:searchDatas})
        }

        const GetData = async () => {
            try {
                const getdata = await axios.get("http://localhost:5000/admin/product");
                console.log("getdata",getdata.data);
                // const fetchData = await axios.get("https://fakestoreapi.com/products");
                dispatch({ type: "GET_DATA", payload: getdata });
            } catch (error) {
                console.error("Error in MainStoreProvider useEffect:", error);
            }
        }

        const productsquentityincrize = () => {
            dispatch({ type: "productquentityincrize", payload: state.addtocart });
        }

        const createOrdercode = () => {
            const orderCode = Math.random().toString(36).substring(2, 15);
            return orderCode;
        }

        const incrizeQuentity = (item) => {
            for (let i = 0; i < state.addtocart.length; i++) {
                if (state.addtocart[i].id == item.id) {
                    console.log("check", state.addtocart[i].quentity)
                    state.addtocart[i].quentity++
                }
            }
            dispatch({ type: "INCRIZE_QUENTITY", payload: item });
            let subtotal = item.Price * item.quentity
            dispatch({ type: "SUBTOTAL_PRICE", payload: subtotal })
            console.log("i", item)
        }

        const decrizeQuentity = (item) => {
            for (let i = 0; i < state.addtocart.length; i++) {
                if (state.addtocart[i].id == item.id) {
                    if (state.addtocart[i].quentity >= 2) {
                        state.addtocart[i].quentity--
                    }

                }
            }
            dispatch({ type: "INCRIZE_QUENTITY", payload: item });
            let subtotal = item.Price * item.quentity
            dispatch({ type: "SUBTOTAL_PRICE", payload: subtotal })
        }

        const createDate = () => {
            const date = new Date();
            const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
            const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            const formattedDateTime = `${formattedDate} ${time}`;
            return formattedDateTime;
        }

        const handledeleteproduct = (e) => {
            console.log(e);
            console.log("delete");
            dispatch({ type: "DELETE_PRODUCT_ADDTOCARD", payload: e })
        }

        const handleclickorder = (e) => {
            console.log("or")
            const price = parseFloat(e.price);
            const quentity = 1
            let subtotal = price * quentity
            const orderDetils = {
                id: e.id,
                Name: e.title,
                Price: e.price,
                image: e.images[0],
                quentity: 1,
                subtotal: subtotal
            };
            dispatch({ type: "ADD_TO_CART", payload: orderDetils });
            singleGetData(e);
            return orderDetils;
        }


        return (
            <MainStoreContext.Provider value={{ ...state, GetData,search,handleinputchange, searchData, singleGetData, handledeleteproduct, incrizeQuentity, decrizeQuentity, handleclickorder, productsquentityincrize, createOrdercode, createDate, toggleCategory, category }}>
                {children}
            </MainStoreContext.Provider>
        );
    }

    const UseMainStore = () => {
        const context = useContext(MainStoreContext);
        if (!context) {
            throw new Error("UseMainStore must be used within a MainStoreProvider");
        }
        return context;
    }

    export { MainStoreProvider, UseMainStore };