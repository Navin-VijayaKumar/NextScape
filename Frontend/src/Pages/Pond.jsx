import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import './Pond.css';
import { Link } from 'react-router-dom';
import pbnew from './Assertsp/pbnew.png';

const Pond = () => {
  const { TestData } = useContext(ProductContext);
  
  const pondItems = TestData.filter(item => item.category === 'pond');

  return (
    <div className='total'>
      <img src={pbnew} alt='Background' className='bp' />
      {pondItems.map((item) => (
        <div className="all1" key={item.id}>
          <Link to={`/product/${item.id}`}>
            <div className="items1">
              <img src={item.image || 'default-placeholder.png'} alt='Product' />
              <p>Category: {item.category}</p>
              <p>Litter: {item.litter}</p>
              <p>Filtration: {item.filterationType}</p>
              <p>Decoration: {item.decorationLevel}</p>
              <p>State: {item.state}</p>
              <p>Price: {item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Pond;
