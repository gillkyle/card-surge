import React from 'react'
import styled, { css } from 'styled-components'

import { COLORS } from 'constants'

const CardWrapper = styled.div`
  flex: 1;
  background-color: #fff;
  padding: ${props => (props.padding ? props.padding : '0.5rem')};
  transition: 0.3s all;

  /* styles driven by page state */
  border-radius: ${props =>
    props.borderRadius ? `${props.borderRadius}px` : '6px'};
  box-shadow: ${props =>
    `${props.normal.x}px ${props.normal.y}px ${props.normal.blur}px ${
      props.normal.spread
    }px rgba(${props.activeColorRgb.r}, ${props.activeColorRgb.g},${
      props.activeColorRgb.b
    }, ${props.normal.opacity})`};

  ${props =>
    props.hoverInput &&
    css`
      &:hover {
        border-radius: ${props =>
          props.borderRadius ? props.borderRadius : '6px'};
        box-shadow: ${props =>
          `${props.hover.x}px ${props.hover.y}px ${props.hover.blur}px ${
            props.hover.spread
          }px rgba(${props.activeColorRgb.r},${props.activeColorRgb.g},${
            props.activeColorRgb.b
          }, ${props.hover.opacity})`};
      }
    `};
`

const Card = props => <CardWrapper {...props}>{props.children}</CardWrapper>

Card.defaultProps = {
  padding: '0.5rem',
  borderRadius: 5,
  activeColorRgb: {
    r: 187,
    g: 187,
    b: 187,
  },
  normal: {
    x: 0,
    y: 3,
    blur: 3,
    spread: -1,
    opacity: 0.5,
  },
  hover: {
    x: 0,
    y: 4,
    blur: 4,
    spread: 0,
    opacity: 0.25,
  },
}

export default Card
