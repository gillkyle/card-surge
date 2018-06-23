import React from 'react'
import styled from 'styled-components'
import Card from '../card'

import { COLORS } from '../../constants'

const ArrowCard = styled(Card)`
  display: flex;
  align-items: center;
  right: ${props => (props.type === 'next' ? 0 : undefined)};
  left: ${props => (props.type === 'prev' ? 0 : undefined)};
  position: absolute;
  color: ${COLORS['gray']};
  height: 100%;
  padding: 1rem;
  fontsize: 24;
  z-index: 10;
`

function NextArrow(props) {
  const { onClick } = props
  return (
    <ArrowCard type="next" onClick={onClick}>
      {`>`}
    </ArrowCard>
  )
}

function PrevArrow(props) {
  const { onClick } = props
  return (
    <ArrowCard type="prev" onClick={onClick}>
      {`<`}
    </ArrowCard>
  )
}

export default { NextArrow, PrevArrow }
