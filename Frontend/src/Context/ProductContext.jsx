import React, { createContext } from 'react'
import TestData  from '../TestData';
export const ProductContext=createContext(null);
const ProductContextProvider=(props) =>{   {/* //Supply the data */}
    const contextValue={TestData};
    return(
       <ProductContext.Provider value={contextValue}>    {/* //provide data */}
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider;