import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {   
    const [TestData, setTestData] = useState([]);

    useEffect(() => {
        fetch('https://nextscape-backend.onrender.com/allproducts')
            .then((response) => response.json())
            .then((data) => {
                // Ensure all images use HTTPS
                const updatedData = data.map(product => ({
                    ...product,
                    image: product.image?.replace("http://", "https://")
                }));
                setTestData(updatedData);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const contextValue = { TestData };

    return (
       <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
