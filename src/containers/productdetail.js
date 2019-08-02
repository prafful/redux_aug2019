import React from 'react';
import { connect } from "react-redux";

class ProductDetail extends React.Component {
    
    render() { 
        if (this.props.activeProduct === null) {
            return (
                <div>
                Will display the details of product you click ON!
                </div>
            )
        }else{
            return ( 
                <div>
                Product Details: 
                    <br></br>
                    Name: {this.props.activeProduct.name}
                    <br></br>
                    Description: {this.props.activeProduct.description}
                    <br></br>
                    Up Votes: {this.props.activeProduct.upvote}
                    <br></br>
                    Down Votes: {this.props.activeProduct.downvote}
                </div>
             );
        }

        
    }
}

function convertStoreToProps(store){
    return {
        activeProduct:store.clickedProduct
    }

}
 
export default connect(convertStoreToProps)(ProductDetail);