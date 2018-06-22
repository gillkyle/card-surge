import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Card from '../components/card'
import { COLORS } from '../constants'
import SliderCard from '../components/Slider/SliderCard'
import SliderOptions from '../components/Slider/SliderOptions.json'

const Row = styled.section`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
`
const SliderWrapper = styled.div`
  width: 100%;
`

const CodeCard = styled(Card)`
  display: flex;
  flex-direction: row;
`
const CodeColumn = styled.div`
  border-top-left-radius: ${props =>
    props.borderRadius ? props.borderRadius : '6px'};
  border-bottom-left-radius: ${props =>
    props.borderRadius ? props.borderRadius : '6px'};
  color: ${COLORS['secondaryBlue']};
  background-color: ${COLORS['secondaryBlueT']};
  padding: 1rem 0.5rem 1rem 1.5rem;
`
const CodeContent = styled.div`
  padding: 1rem 0.5rem;
  color: ${COLORS['gray']};
`

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}

const IndexPage = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const sliderSettings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    return (
      <div>
        <Row>
          <Card padding="2rem">
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
          </Card>
        </Row>
        <Row>
          <SliderWrapper>
            <Slider {...sliderSettings}>
              {SliderOptions.map(example => <SliderCard example={example} />)}
            </Slider>
          </SliderWrapper>
        </Row>
        <Row>
          <CodeCard padding="0rem">
            <CodeColumn>
              <div>0</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </CodeColumn>
            <CodeContent>border-color: 'lalala'</CodeContent>
          </CodeCard>
        </Row>
        <Row>
          <Card padding="2rem">
            <h3>How it Works</h3>
          </Card>
          <Card padding="2rem" style={{ margin: '0rem 1rem' }}>
            <h3>Why</h3>
          </Card>
          <Card padding="2rem">
            <h3>Subscribe</h3>
          </Card>
        </Row>
      </div>
    )
  }
}

export default IndexPage
