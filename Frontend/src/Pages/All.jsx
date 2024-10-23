import React, { useContext, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';
import allb from './Assertsp/allb.png';
import './All.css'
const All = () => {
  const { TestData } = useContext(ProductContext);
  const [selectedState, setSelectedState] = useState(''); 

  const filteredData = selectedState 
    ? TestData.filter(item => item.state === selectedState)  // Filter based on selected state
    : TestData;

  return (
    <div className='total'>
      <div className="filter-options">
      <div className="wrapimg">

      <img src={allb} alt=''></img>
      
        <div className="select">

        <h2>Filter by State:</h2>
        <select 
         
         onChange={(e) => setSelectedState(e.target.value)} 
         value={selectedState}
         >
          <option value="">All</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
           </div>
           </div>
           </div>
      <div className="total">


      <div className="total">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((item, i) => (
            <div key={item.id} className="all1">
              <Link to={`/product/${item.id}`}>
                <div className="items1">
                  <img src={item.image} alt='' />
                  <p>Category: {item.category}</p>
                  <p>Litter: {item.litter}</p>
                  <p>Filtration: {item.filterationType}</p>
                  <p>Decoration: {item.decorationLevel}</p>
                  <p>State: {item.state}</p>
                  <p>Price: {item.price}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="notfound">
            <p>No Dealer available for the selected state!</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default All;
