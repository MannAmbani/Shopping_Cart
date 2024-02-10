import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { useParams } from 'react-router-dom';

export const Product = () => {
    const{all_product} = useContext(ShopContext);
    const{productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
        <ProductDisplay product={product}/>
    </div>
  )
}
