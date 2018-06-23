import React from 'react'
import Card from '../card'
import styled from 'styled-components'

import './slick-slider.css'

const Avatar = styled.div`
  border-radius: 25px;
  height: 50px;
  width: 50px;
  background-size: cover;
  background-image: ${props =>
    props.src
      ? `url(${props.src})`
      : `url(https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj2q_bmg-bbAhUqsFQKHfl2Bh4QjRx6BAgBEAU&url=http%3A%2F%2Fpaintdotnet.blogspot.com%2F2011%2F04%2Fhow-to-draw-circle-outline-in-paintnet.html&psig=AOvVaw2k-MWv9einKKGXWmLuSKAt&ust=1529714249235707)`};
`

const SliderCard = class extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      normal,
      hover,
      activeColorRgb,
      example: { src, name },
    } = this.props
    return (
      <Card
        normal={normal}
        hover={hover}
        activeColorRgb={activeColorRgb}
        padding="1rem"
        style={{
          margin: '3px 0.5rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div style={{}}>
          <Avatar src={src} />
        </div>
        <div>{name}</div>
      </Card>
    )
  }
}

export default SliderCard
