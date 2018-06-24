import React from 'react'
import styled from 'styled-components'

import { COLORS, BORDER_RADIUS } from '../constants'

const StyledButton = styled.button`
  background: ${props =>
    props.active
      ? `linear-gradient(to bottom right, ${COLORS['primaryBlue']}, ${
          COLORS['secondaryBlue']
        })`
      : COLORS['lightGray']};
  color: ${props => (props.active ? COLORS['white'] : COLORS['gray'])};
  padding: 0.5rem 0rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: ${BORDER_RADIUS}px;
  border: 1px solid
    ${props => (props.active ? COLORS['primaryBlue'] : COLORS['gray'])};
  box-sizing: border-box;
  outline: none;
  transition: 0.3s all;
  cursor: pointer;

  &:hover {
    border: 1px solid ${COLORS['secondaryBlue']};
    background-color: ${COLORS['white']};
  }
`

const Button = class extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const { detail, onClick } = this.props
    onClick(detail)
  }

  render() {
    const { displayText, active, detail } = this.props
    return (
      <StyledButton active={active} {...this.props} onClick={this.handleClick}>
        {displayText}
      </StyledButton>
    )
  }
}

export default Button
