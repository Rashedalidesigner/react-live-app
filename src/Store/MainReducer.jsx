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
        console.log("tot",action.payload)
        console.log(state.addtocart)
        return{
          ...state, 
        }
    default:
      return state;
  }
}

export default MainReducer;