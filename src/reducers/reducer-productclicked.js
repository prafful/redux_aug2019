export default function oneProductClickedAndReceived(state = null, action){

    console.log("Broadcasted action received");
    console.log(action);
    switch (action.type) {
        case "ONE_PRODUCT_CLICKED":
            console.log("Action is received in reducer!");
            console.log(action.payload);
            return action.payload
        default:
            break;
    }

    return state;

}