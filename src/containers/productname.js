import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import productNameClickedAction from "../actions/productNameClickedAction";

class ProductName extends React.Component {

    renderPropsReceivedFromStore = function(){
        console.log("Received products from store as props!");
        return this.props.myProducts.map((product)=>{
            return (
                <li key={product.id} 
                    onClick={()=>this.props.clickProduct(product)}>
                    {product.name} {product.upvote}
                </li>
            )
        })
    }
    
    
    render() { 
        return (
            <div>
                List of all product names....
                <ol>
                    {this.renderPropsReceivedFromStore()}
                </ol>
            </div>
          );
    }
}

function convertStoreToPropsNow(appstore){
    console.log("Complete store received: ")
    console.log(appstore)
    return {
        myProducts:appstore.products
    }
}

function mapActionToPropsAndDispatchNow(dispatch){
    return bindActionCreators({
        clickProduct:productNameClickedAction
    }, dispatch)
}


export default  connect(convertStoreToPropsNow, mapActionToPropsAndDispatchNow)(ProductName);