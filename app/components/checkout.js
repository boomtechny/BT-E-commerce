import React from 'react'; 
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import { bindActionCreators } from 'redux'; 
import {completeCheckout} from '../actions/products'; 

const input= ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label className="control-label">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class Checkout extends React.Component{
constructor(){
  super();
  this.onSubmit=this.onSubmit.bind(this); 
}

onSubmit(e){
  e.preventDefault(); 
const form = e.target;
const fields = [form.street,form.floorapt, form.city,form.state, form.postal, form.cardname, form.card,form.exp,form.cvc];
const isValid = fields.every((f)=>(f.value)); 
if(isValid){
 
  const split_exp = form.exp.value.split("-"); //Stripe wants infomation in the format "2016-05"
  const payment = {
    number:form.card.value,
    exp_month:split_exp[1],
    exp_year: split_exp[0],
    cvc:form.cvc.value
  }
  const address = {
    street: form.street.value,
    city: form.city.value, 
    state: form.state.value, 
    postal: form.postal.value, 
  }
  this.props.completeCheckout(this.props.selectedProduct, address, payment).then((action) =>{
    if(action.error){
      alert(action.payload.message); 
    }
    else{
      alert("Your purchase was successful"); 
    }
  });
}
}

 // console.log("Form is valid!!!"); 


//else{
  //console.log("Form is not valid"); 
//}

//for(var i = 0; fields.length; i++){
 // console.log(fields[i].value); 
//}
//fields.every(check); 
//function check(field){
  //console.log(form.field.value); 
//}




  render(){
    const {onSubmit} = this.props; 
   // console.log(this.props.selectedProduct);
   //const { fields: {street, floorapt, city, state, postal, cardname, card, exp, cvc}} = this.props; v5 must migrate to current v6 
    let name = this.props.selectedProduct ? this.props.selectedProduct.name : ''; 
    return <div><h1>Checkout:{name}</h1>
    <form onSubmit={this.onSubmit}>
      <div className="card">
      <div className="card-header">Address</div>
      <div className="card-body">
      <div className="form-group">
      <label htmlFor="streetAddressInput">Street Address</label>
<Field type = "text" className="form-control" id="addressInput" component="input" placeholder="1234 Main St" name ="street" />
      </div>
      <div className="form-group">
    <label htmlFor="inputAddress2">Address 2</label>
    <Field type="text" className="form-control" id="inputAddress2" component="input" placeholder="Apartment, studio, or floor" name="floorapt" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <Field type="text" className="form-control" id="inputCity" component="input" name="city" />
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">State</label>
      <Field type="text" className="form-control" id="inputState" component="input" name="state"/>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <Field type="text" className="form-control" id="inputZip" component="input" placeholder="" name="postal"  />
    </div>
  </div>
  </div>
  </div>
  <hr className="mb-4"/>
  <div className="card">
  <div className ="card-header">Payment</div>
  <div className = "card-body">

  <div className="form-row">
  <div className="form-group col-md-6">
  <label htmlFor="cc-name">Name on card</label>
  <Field type="text" className="form-control" id="cc-name" placeholder="" component="input" name = "cardname" />
</div>
<div className="form-group col-md-6">
<label htmlFor="cc-number">Credit card number</label>
                <Field type="text" className="form-control" id="cc-number" component="input" placeholder="" name = "card" />
</div>
<div className="form-group col-md-3">
<label htmlFor="cc-expiration">Expiration</label>
                <Field type="text" className="form-control" id="cc-expiration" component="input" placeholder="NMYY" name = "exp"  />
                </div>
                <div className="form-group col-md-3">
                <label htmlFor="cvCode">CVC</label>
                <Field type="text" className="form-control" id="cc-cvv" component="input" placeholder="CV"  name = "cvc"/>
</div>
</div>
</div>
</div>
<hr className="mb-4"/>
        <button type = "submit" className="btn btn-primary btn-lg btn-block">Checkout</button>
        
      </form>
      </div>  }
}



const mapStateToProps = (state)=>{
  return { selectedProduct: state.selectedProduct}; 
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({completeCheckout}, dispatch);
  }


export default reduxForm({
  form:'Checkout',
 // validate:(values) => {const {street,floorapt,city,state,postal,cardname,card,exp,cvc} = values; if(!street&&!floorapt&&!city&&!state&&!postal&&!cardname&&!card&&!exp&&!cvc){console.log('Form is not valid');}else{console.log('Form is valid');} return false; }
 // fields:['street', 'floorapt','city', 'state', 'postal', 'cardname','card','exp','cvc']
})(connect(mapStateToProps, mapDispatchToProps)(Checkout)); 