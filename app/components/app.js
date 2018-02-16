import React from 'react';
import ProductList from './product-list';
export default (props) => {
  return <div className="container">
    <div className="page-header">
      <h1>BT Product Catalog</h1>
    </div>
    <ProductList></ProductList>
  </div>;
}