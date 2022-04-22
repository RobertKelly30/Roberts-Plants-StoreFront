import React from 'react';

import {ButtonStyles} from './styles'

function Button ({children, label, ...props})  {
  return (
        <ButtonStyles {...props}>  
           {label}     
           {children}
        </ButtonStyles>
  )
}

export default Button
 