import React from 'react'; 
import {connect} from 'react-redux'


class Checkout extends React.Component{

  render(){
   // console.log(this.props.selectedProduct);
    let name = this.props.selectedProduct ? this.props.selectedProduct.name : ''; 
    return <div>Checkout:{name} </div>; 
  }
}
const mapStateToProps = (state)=>{
  return { selectedProduct: state.selectedProduct}; 
}


export default connect(mapStateToProps)(Checkout); 