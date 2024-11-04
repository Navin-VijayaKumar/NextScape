import React from 'react';
import './ProductDisplay.css';
import ani11 from '../Asserts1/ani11.png';

const ProductDisplay = (props) => {
  const { product } = props;

  console.log('Product:', product);

  const onSubmit = async (event) => {
    console.log("Mail sender work");
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a8cf2cad-503d-4abc-8d1a-335fd6ad347d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="product-container">
      {product && product.image ? (
        <>
          <div className="product-image">
            <img src={product.image} alt='' />
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
            <div className="flip-container">
              <div className="flip-card">
                <div className="flip-front">
                  <div>
                    <p>Tap to book</p>
                  </div>
                  <div>
                    <img src={ani11} alt='' className='img-flip' />
                  </div>
                </div>
                <div className="flip-back">
                  <form onSubmit={onSubmit} className='form-sub'>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="date"
                      name="date"
                      required
                    />
                    <button type="submit" className='btn'>Book Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Image not available</p>
      )}
    </div>
  );
}

export default ProductDisplay;
