import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import './Pond.css';
import { Link } from 'react-router-dom';
import pbnew from './Assertsp/pbnew.png'
const Pond = () => {
  const { TestData } = useContext(ProductContext);

  return (
    <div className='total'>
      <img src={pbnew} alt='' className='bp'></img>
      {TestData.map((item, i) => {
        if (item.category === 'Pond') {
          return (
            <div className="all1" key={item.id}>  {/* Updated key prop here */}
              <Link to={`/product/${item.id}`}>
                <div className="items1">
                  <img src={item.image} alt=''></img>
                  <p>Category: {item.category}</p>
                  <p>Litter: {item.litter}</p>
                  <p>Filteration: {item.filterationType}</p>
                  <p>Decoration: {item.decorationLevel}</p>
                  <p>State: {item.state}</p>
                  <p>Price: {item.price}</p>
                </div>
              </Link>
            </div>
          );
        }
        return null; 
      })}
    </div>
  );
};

export default Pond;
