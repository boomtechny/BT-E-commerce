import React from 'react'; 
import {connect} from 'react-redux'


class Checkout extends React.Component{

  render(){
   // console.log(this.props.selectedProduct);
    let name = this.props.selectedProduct ? this.props.selectedProduct.name : ''; 
    return <div><h1>Checkout:{name}</h1>
    <form>
      <div className="card">
      <div className="card-header">Address</div>
      <div className="card-body">
      <div className="form-group">
      <label htmlFor="streetAddressInput">Street Address</label>
<input type = "text" className="form-control" id="addressInput" placeholder="1234 Main St"></input>
      </div>
      <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"></input>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select class="form-control form-control-large">
      <option>Select state</option>
    </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip" placeholder="" required></input>
    </div>
  </div>
  </div>
  </div>
  <hr class="mb-4"/>
  <div className="card">
  <div className ="card-header">Payment</div>
  <div className = "card-body">

  <div class="form-row">
  <div class="form-group col-md-6">
  <label for="cc-name">Name on card</label>
  <input type="text" class="form-control" id="cc-name" placeholder="" required></input>
</div>
<div class="form-group col-md-6">
<label for="cc-number">Credit card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required/>
</div>
<div class="form-group col-md-3">
<label for="cc-expiration">Expiration</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="NMYY" required/>
                </div>
                <div class="form-group col-md-3">
                <label for="cc-expiration">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="CV" required/>
</div>
</div>
</div>
</div>
<hr class="mb-4"/>
        <button type = "submit" class="btn btn-primary btn-lg btn-block">Next</button>
        
      </form>
      </div>  }
}
const mapStateToProps = (state)=>{
  return { selectedProduct: state.selectedProduct}; 
}


export default connect(mapStateToProps)(Checkout); 