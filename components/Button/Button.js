import React from 'react';

import { SubmitButton} from './styles'

function Button ({children, label, ...props})  {
  return (
        <SubmitButton {...props}>  
           {label}     
           {children}
        </SubmitButton>
  )
}

export default Button
 