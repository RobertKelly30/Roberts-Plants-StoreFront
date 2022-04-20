import React from 'react';
 
import {ProductCardStyles, ProductImage, ProductName, ProductPrice, ProductDescription, ProductIcons} from './styles'
import { Button } from "./../Button"


function ProductPreview ({children, product, ...props})  {
  const{productName, productPrice,imageUrl, productDescription} = {...product}
  return (
      <ProductCardStyles  {...props}>
         <ProductImage>
            <img src={imageUrl}  alt="8k nike flex" width="320" height="320"/>
         </ProductImage>
         <ProductName>{productName}</ProductName>
         <ProductPrice>${productPrice}</ProductPrice>
         <ProductDescription>
            {productDescription}
         </ProductDescription>
         <ProductIcons>
            <Button width="250%" type="submit">Buy</Button>
         </ProductIcons>

      </ProductCardStyles>
  )
}

export default ProductPreview