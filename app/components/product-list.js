import React from 'react';


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

const ProductListRow = props => {

  return(

  <li className="media" style ={{cursor:"pointer"}}>
<div className="media-left">
<a href="#">
<img className="media-object" height="64" src={props.product.image}></img>
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

}
export default class ProductList extends React.Component{


  createProductListRow(products){
     return products.map((p) =><ProductListRow product={p} key={p.id}/>);
    }
    
  render(){
return <ul className="media-list">
{this.createProductListRow(products)}


</ul>;
  }