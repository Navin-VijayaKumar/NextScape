import React from 'react'
import './ProductDisplay.css'
import ani11 from '../Asserts1/ani11.png'
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
                 <div className="button1">
                 <div class="flip-container">
  <div class="flip-card">
    <div class="flip-front">
        <p>Tap to book</p>
      <img src={ani11} alt='' className='img-flip'></img>
    </div>
    <div class="flip-back">
   
        <button className='btn'>Book Now</button>
    </div>
  </div>
</div>

                 </div>
                </>
            ) : (
                <p>Image not available</p>
            )}
        </div>
    )
}

export default ProductDisplay;
