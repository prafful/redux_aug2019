import { combineReducers } from "redux";
import productsData from "./reducer-products";
import friendsData from "./reducer-friends";
import getRemoteData from "./reducer-users";
import oneProductClickedAndReceived from "./reducer-productclicked";


const allReducers = combineReducers(
    {
        products:productsData,
        friends: friendsData,
        users: getRemoteData,
        clickedProduct:oneProductClickedAndReceived
    }
    )

    export default allReducers
