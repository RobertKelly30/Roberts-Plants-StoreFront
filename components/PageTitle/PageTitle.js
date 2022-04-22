import React from 'react';

import {PageTitleStyles, Title, Description} from './styles'
 

function PageTitle ( {children, title, tagline, ...props})  {
  return (
        <PageTitleStyles>
          <Title>{title || "uiTitle"}</Title>
          <Description>{tagline || "uiTagline"}</Description>          
        </PageTitleStyles>
  )
}

export default PageTitle

   