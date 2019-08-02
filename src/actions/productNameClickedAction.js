const prodctNameClickedAction = function(product){
    console.log("One Product Clicked");
    console.log(product);
    console.log("Create object to be broadcasted");
    console.log("Broadcast will be captured by valid reducer!");
    return (
        {
            type:"ONE_PRODUCT_CLICKED",
            payload:product
        }
    )

}

export default prodctNameClickedAction