import React from 'react';
import {getProducts, selectProduct} from '../actions/products'; 
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { Router } from 'react-router-dom'; 
import PropTypes from 'prop-types'; 
/*
const products = [
  {
    id: 1,
    name:'Pearls knee high in cats',
    description: 'White cat and black cat designed for cameo Sparkling Kana gems that are scattered around it decorate your feet gently.',
    image: require("../images/mrblack.jpg")
  },
  {
    id: 2,
    name: 'Honey Milk Knee High',
    description: "Chocolate mint, friends Ichigo milk appeared! A bee is one point on the back of a honey pastel color honey",
    image:require("../images/honeymilk.jpg")
},
{
    id: 3,
    name: 'Koi Fish',
    description:'A goldfish and a fishbowl motif design appeared!Unusual goldfish pattern is sure to make you eye catching',
    image:require("../images/koifish.jpg")
},
{
    id:4, 
    name: 'Magic Circle',
    description:"Ikeda Yu × absolute area collaboration knee high! ! 'Cute', 'beautiful,' and 'fantasy' the world view that made use of the unique blur and transparent colors of transparent watercolors!",
image:require("../images/magiccircle.jpg")
}
];
*/
const ProductListRow = props => {
let imageSource = require('../images/'+props.product.image); 
  return(

  <li className="media" onClick = {() => props.onProductSelected(props.product)} style ={{cursor:"pointer"}}>
<div className="media-left">
<a href="#">
<img className="media-object" height="64" src={imageSource}></img>
</a>
</div>
<div className="media-body">
<h4 className="media=heading">{props.product.name}</h4>
<span>{props.product.description}</span>
</div>
  </li>);
}
/*
const ProductTest = props =>{ return(
<div className = {props.title}>{props.title}</div>);
*/


class ProductList extends React.Component{
  constructor(){
    super(); 
    this.onProductSelected = this.onProductSelected.bind(this); 
  }
componentDidMount(){
  this.props.getProducts();
}

onProductSelected(product){
//console.log(product);
this.props.selectProduct(product); 
this.context.router.history.push('/checkout');
}
  createProductListRow(products){
     return this.props.products.map((p) =><ProductListRow product={p} key={p.id} onProductSelected={this.onProductSelected}/>);
    }

  render(){
return <ul className="media-list">
{this.createProductListRow(this.props.products)}


</ul>;
  }
} 

const mapStateToProps = (state)=>{
  return { products: state.products}; 
}
const mapDispatchToProps = (dispatch) =>{
return bindActionCreators({getProducts, selectProduct}, dispatch);
}
/* Deprecated React.proptypes migrate to prop-types library 
ProductList.contextTypes = {
  router: React.PropTypes.object.isRequired
}
*/

ProductList.contextTypes = {
  router: PropTypes.object.isRequired,
  }; 
export default connect(mapStateToProps, mapDispatchToProps)(ProductList); 