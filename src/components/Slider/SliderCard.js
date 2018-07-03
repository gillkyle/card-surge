import React from 'react'
import Card from '../card'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import './slick-slider.css'

const Avatar = styled.div`
  border-radius: 50px;
  height: 100%;
  min-height: 50px;
  width: 100%;
  min-width: 50px;
  background-size: cover;
  background-position: center;
  background-image: ${props =>
    props.src
      ? `url(${props.src})`
      : `url(https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj2q_bmg-bbAhUqsFQKHfl2Bh4QjRx6BAgBEAU&url=http%3A%2F%2Fpaintdotnet.blogspot.com%2F2011%2F04%2Fhow-to-draw-circle-outline-in-paintnet.html&psig=AOvVaw2k-MWv9einKKGXWmLuSKAt&ust=1529714249235707)`};
`
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`
const CardName = styled.div`
  letter-spacing: 2px;
  color: ${COLORS['secondaryBlue']};
`
const CardDescription = styled.div`
  color: ${COLORS['gray']};
  font-size: 0.6rem;
  letter-spacing: 1px;
  line-height: 1;
`

const SliderCard = class extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      normal,
      hover,
      shadowColor,
      example: { src, name, description, state },
      onClick,
      index,
    } = this.props
    return (
      <Card
        normal={normal}
        hover={hover}
        shadowColor={shadowColor}
        padding="1rem"
        onClick={() => onClick(undefined, index)}
        style={{
          flex: 1,
          margin: '3px 0.5rem',
          display: 'grid',
          gridTemplateColumns: '50px 1fr',
          gridGap: '0.5rem',
          flexDirection: 'row',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <Avatar src={src} />
        <CardInfo>
          <CardName>{name}</CardName>
          <CardDescription>{description}</CardDescription>
        </CardInfo>
      </Card>
    )
  }
}

export default SliderCard
