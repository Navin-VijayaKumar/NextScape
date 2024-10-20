import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import './Marine.css';
import { Link } from 'react-router-dom';
import bm2 from './Assertsp/bm2.jpg'

const Marine = () => {
  const { TestData } = useContext(ProductContext);

  return (
    <div className='total'>
                <img src={bm2} alt='' className='bp'></img>

      {TestData.map((item, i) => {
        if (item.category === 'Marine') {
          return (
             <div className="all1">

            <div key={i}>
            <Link to={`/product/${item.id}`}> <div className="items1">

           <img src={item.image} alt=''></img>
              <p>Category:{item.category}</p>
              <p>Litter:{item.litter}</p>
              <p>Filteration:{item.filterationType}</p>
              <p>Decoration:{item.decorationLevel}</p>
              <p>State:{item.state}</p>
              <p>Price:{item.price}</p>
              </div></Link>
            </div>
            </div>
          );
        }
        return null; 
      })}
    </div>
  );
};

export default Marine;
