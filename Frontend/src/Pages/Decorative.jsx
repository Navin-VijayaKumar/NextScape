import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';

const Decorative = () => {
  const { TestData } = useContext(ProductContext);

  return (
    <div className='total'>
      {TestData.map((item, i) => {
        if (item.category === 'Decorative') {
          return (
            <div className="all1">

            <div key={i}>
              <div className="items1">

             <img src={item.image} alt=''></img>
              <p>Category:{item.category}</p>
              <p>Litter:{item.litter}</p>
              <p>Filteration:{item.filterationType}</p>
              <p>Decoration:{item.decorationLevel}</p>
              <p>State:{item.state}</p>
              <p>Price:{item.price}</p>
              </div>
            </div>
            </div>
          );
        }
        return null; 
      })}
    </div>
  );
};

export default Decorative;
