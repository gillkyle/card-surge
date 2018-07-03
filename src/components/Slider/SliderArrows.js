import React from 'react'
import styled from 'styled-components'
import * as TI from 'react-icons/lib/ti'
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
  padding: 0.8rem;
  fontsize: 24;
  z-index: 10;
  cursor: pointer;
`

function NextArrow(props) {
  const { onClick } = props
  return (
    <ArrowCard type="next" onClick={onClick}>
      <TI.TiChevronRight />
    </ArrowCard>
  )
}

function PrevArrow(props) {
  const { onClick } = props
  return (
    <ArrowCard type="prev" onClick={onClick}>
      <TI.TiChevronLeft />
    </ArrowCard>
  )
}

export default { NextArrow, PrevArrow }
