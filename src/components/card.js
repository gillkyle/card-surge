import React from 'react'
import styled from 'styled-components'

import { COLORS } from 'constants'

const CardWrapper = styled.div`
  flex: 1;
  background-color: #fff;
  padding: ${props => (props.padding ? props.padding : '0.5rem')};
  transition: 0.3s all;

  /* styles driven by page state */
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '6px')};
  box-shadow: ${props =>
    `${props.normal.x} ${props.normal.y} ${props.normal.blur} ${
      props.normal.spread
    } rgba(${props.normal.rgb}, ${props.normal.opactiy})`};

  &:hover {
    border-radius: ${props =>
      props.borderRadius ? props.borderRadius : '6px'};
    box-shadow: ${props =>
      `${props.hover.x} ${props.hover.y} ${props.hover.blur} ${
        props.hover.spread
      } rgba(${props.hover.rgb}, ${props.hover.opactiy})`};
  }
`

const Card = props => <CardWrapper {...props}>{props.children}</CardWrapper>

Card.defaultProps = {
  padding: '0.5rem',
  normal: {
    x: '0px',
    y: '3px',
    blur: '3px',
    spread: '0px',
    opactiy: 0.5,
    rgb: '200,200,200',
  },
  hover: {
    x: '0px',
    y: '4px',
    blur: '6px',
    spread: '2px',
    opactiy: 0.25,
    rgb: '200,200,200',
  },
}

export default Card
