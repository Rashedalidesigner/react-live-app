const MainReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
      case "ADD_TO_CART":
        return{
          ...state,
          addtocart: [...state.addtocart, action.payload],
        }
      case "EMTY_ADDTO_CART":
        return{
          ...state,
          addtocart:[]
        }
      case "productquentityincrize":
        return {
          ...state,
          productsquentity: action.payload + 1
        }
      case "INCRIZE_QUENTITY": {
        return {
          ...state
        }
      }
      case "SET_ORDER_PAGE_DATA":
        return {
          ...state,
          orderpagedata:[...state.orderpagedata,action.payload]
        }
      case "DELETE_PRODUCT_ADDTOCARD": {
        const product = action.payload;
        console.log("delete",product)
        const newArray = state.addtocart.filter(item => item !== product);
        // console.log("delete",newArray)
        return{
          ...state,
          addtocart:newArray
        }
      }
      case "SEARCH_DATA":{
        console.log("rashedali",state.data)
        return {
          ...state,
          searchDataload:action.payload||state.data 
        }
      }
      case "SUBTOTAL_PRODUCT_PRICE":
        return{
          ...state, 
        }
      case "ADD_WISHLIST_ARRAY":
        return {
          ...state,
          wishlist:[...state.wishlist, action.payload]
        }
      case "ORDER_SHOW_ARRAY":
        return {
          ...state,
          ordercode:[...state.ordercode, action.payload]
        }
    default:
      return state;
  }
}

export default MainReducer;