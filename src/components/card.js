import React from 'react'
import styled from 'styled-components'

import { COLORS } from 'constants'

const CardWrapper = styled.div`
  background-color: #fff;
  padding: ${props => (props.padding ? props.padding : '0.5rem')};

  /* styles driven by page state */
  border-radius: 6px;
`

const Card = props => <CardWrapper {...props}>{props.children}</CardWrapper>

export default Card
