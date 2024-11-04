import React from 'react';
import './ProductDisplay.css';
import ani11 from '../Asserts1/ani11.png';

const ProductDisplay = (props) => {
  const { product } = props;

  console.log('Product:', product);

  const onSubmit = async (event) => {
    console.log("Mail sender work");
    event.preventDefault();
    console.log("Form element:", event.target); // Confirming the form element

    try {
      const formData = new FormData(event.target);

      // Append the access key and additional form details
      formData.append("access_key", "a8cf2cad-503d-4abc-8d1a-335fd6ad347d");
      formData.append("subject", "A New Booking Request From NextScape");
      formData.append("message", `♥ Thank You for Booking on our Website ♥`);

      // Send the email to the admin
      formData.set("to", "navinv10122004@gmail.com"); // Replace with the admin's email address
      const adminJson = JSON.stringify(Object.fromEntries(formData));

      const adminRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: adminJson
      }).then((res) => res.json());

      if (adminRes.success) {
        console.log("Email to admin sent successfully");
      } else {
        console.error("Error sending email to admin", adminRes);
      }

      // Send the email to the user (product.Email)
      formData.set("to", product.Email); // Update the recipient to the user's email
      const userJson = JSON.stringify(Object.fromEntries(formData));

      const userRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: userJson
      }).then((res) => res.json());

      if (userRes.success) {
        console.log("Email to user sent successfully");
        alert("Booking successful! Emails have been sent.");
      } else {
        console.error("Error sending email to user", userRes);
        alert("Booking successful, but there was an error sending the email to the user.");
      }
    } catch (error) {
      console.error("Error", error);
      alert("An error occurred. Please try again later.");
    }
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
                    <img src={ani11} alt="Animation" className='img-flip' />
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
                    <input
                      type="text"
                      name="address"
                      placeholder="Your Address"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                    <input
                      type="number"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      required
                    />
                    <div className="flipbtn">
                      <button type="submit" className='btn'>Book Now</button>
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
}

export default ProductDisplay;
