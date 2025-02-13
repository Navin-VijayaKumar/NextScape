import React, { useState } from 'react';

import './ProductDisplay.css';
import ani11 from '../Asserts1/ani11.png';

const ProductDisplay = (props) => {
  const { product } = props;

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSendEmail = async () => {
    const bodyContent = `
                  Client Details

            Product ID: ${product?.id}
            Client Name: ${name}
            Order Date: ${date}
            Address: ${address}
            Contact Number: ${contactNumber}
            Email: ${userEmail}

            
                  Dealer Details

            Dealer Details: ${product.DealerName}
            Category: ${product.category}        
            Litter: ${product.litter}
            Filtration: ${product.filterationType}
            Decoration: ${product.decorationLevel}
            State: ${product.state}
            District: ${product.District}
            Address: ${product.address}
            Phone Number: ${product.PhoneNumber}
            Dimensions: ${product.Dimensions} sqm
            Email: ${product.Email}
            Price: ${product.price}

            ❤ Thank you for ordering ❤
    `;

    const emailData = {
      to: [product?.Email, userEmail, 'navinv.22cse@kongu.edu'].filter(Boolean).join(','),
      subject: `Next Scape`,
      text: bodyContent,
      productId: product?.id,
      
      
    };

    try {
      await fetch('http://localhost:4000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleSendEmail(); 
  };

  return (
    <div className="product-container">
      {product && product.image ? (
        <>
          <div className="product-image">
            <img src={product.image} alt="Product" />
          </div>
          <div className="content">
            <h2>Dealer Details</h2>
            <p>Dealer Details: {product.DealerName}</p>

            <p>Category: {product.category}</p>
            <p>Litter: {product.litter}</p>
            <p>Filtration: {product.filterationType}</p>
            <p>Decoration: {product.decorationLevel}</p>
            <p>State: {product.state}</p>
            <p>District: {product.District}</p>
            <p>Address: {product.address}</p>
            <p>Phone Number: {product.PhoneNumber}</p>
            <p>Dimensions: {product.Dimensions} sqm</p>
            <p>Email: {product.Email}</p>
            <p>Price: {product.price}</p>
          </div>
          <div className="button1">
            <div className="flip-container">
              <div className="flip-card">
                <div className="flip-front">
                  <div>
                    <p>Tap to Book</p>
                  </div>
                  <div>
                    <img src={ani11} alt="Animation" className="img-flip" />
                  </div>
                </div>
                <div className="flip-back">
                  <form onSubmit={handleSubmit} className="form-sub">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <input
                      type="date"
                      name="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Your Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                    />
                    <input
                      type="number"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    />
                    <div className="flipbtn">
                      <button type="submit" className="btn">Book Now</button>
                    </div>
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
};

export default ProductDisplay;
