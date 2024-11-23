import React, { createContext,useState,useEffect } from 'react'
export const ProductContext=createContext(null);
const ProductContextProvider=(props) =>{   

    const [TestData, setTestData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:4000/allproducts')
        .then((response) => response.json())
        .then((data) => setTestData(data))
        .catch((error) => console.error('Error fetching products:', error));
    }, []);
    const contextValue={TestData};

    return(
       <ProductContext.Provider value={contextValue}>    {/* //provide data */}
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider;