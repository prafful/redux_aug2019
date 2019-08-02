import React from 'react';
import ProductName from '../containers/productname';
import ProductDetail from '../containers/productdetail';

class ParentComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                I aspire to be be redux app!!!!
                <ProductName></ProductName>
                <hr></hr>
                <ProductDetail></ProductDetail>
            </div>
         );
    }
}
 
export default ParentComponent;