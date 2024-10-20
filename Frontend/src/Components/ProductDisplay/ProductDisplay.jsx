import React from 'react'
import './ProductDisplay.css'

const ProductDisplay = (props) => {
    const { product } = props;
    
    // Check if the product and image URL are correct
    console.log('Product:', product);

    return (
        <div className="product-container">
            {product && product.image ? (
                <>
                 <div className="product-image">

                    <img src={product.image} alt=''  />
                 </div>
                 <div className="content">
         <h2>Dealer Details</h2>
      <p>Category: {product.category}</p>
      <p>Litter: {product.litter}</p>
      <p>Filtration: {product.filterationType}</p>
      <p>Decoration: {product.decorationLevel}</p>
      <p>State: {product.state}</p>
      <p>District: {product.District}</p>
      <p>Address: {product.address}</p>
      <p>Phone Number: {product.PhoneNumber}</p>
      <p>Email: {product.Email}</p>
      <p>Price: {product.price}</p>
                 </div>
                </>
            ) : (
                <p>Image not available</p>
            )}
        </div>
    )
}

export default ProductDisplay;
