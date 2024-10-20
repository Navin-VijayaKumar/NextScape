import React, { useContext } from 'react'
import './InnerDisplay.css'
import { ProductContext } from '../../Context/ProductContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'
const InnerDisplay = () => {
    const {TestData} = useContext(ProductContext)
    const {productID}= useParams();
    const product =TestData.find((e)=>e.id===Number(productID))
  return (
    <div>
        <ProductDisplay product={product}></ProductDisplay>
    </div>
  )
}

export default InnerDisplay