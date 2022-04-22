import React from 'react';
import Image from 'next/image';
 
import {ProductCardStyles, ProductImage, ProductName, ProductPrice, ProductDescription, ProductIcons} from './styles'
import { Button } from "./../Button"


function ProductPreview ({children, product, ...props})  {
  const{productName, productPrice,imageUrl, productDescription, uid} = {...product}
  return (
      <ProductCardStyles  {...props}>
         <ProductImage>
            <Image
            src={imageUrl}
            alt={productName}
            width={320}
            height={320}
            />
         </ProductImage>
         <ProductName>{productName}</ProductName>
         <ProductPrice>${productPrice}</ProductPrice>
         <ProductDescription>
            {productDescription}
         </ProductDescription>
         <ProductIcons>
            <form action="/api/checkout" method="POST">
               <input type="hidden" name="uid" value={uid}/>
               <Button width="250%" type="submit">Buy</Button>
            </form> 
         </ProductIcons>

      </ProductCardStyles>
  )
}

export default ProductPreview