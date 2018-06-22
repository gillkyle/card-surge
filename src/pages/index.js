import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { CirclePicker } from 'react-color'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Card from '../components/card'
import NumberInput from '../components/Input/num-input'
import SliderCard from '../components/Slider/SliderCard'
import SliderOptions from '../components/Slider/SliderOptions.json'

import { COLORS } from '../constants'

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
    this.state = {
      hoverInput: true,
      activeColor: '#777',
      activeColorRgb: { r: 119, g: 119, b: 119, a: 1 },
      normal: {
        x: 0,
        y: 3,
        blur: 3,
        spread: 0,
        opacity: 1,
      },
      hover: {
        x: 0,
        y: 4,
        blur: 6,
        spread: 2,
        opacity: 0.75,
      },
    }
  }

  onColorChange = result => {
    console.log(result)
    this.setState({ activeColor: result.hex, activeColorRgb: result.rgb })
  }

  render() {
    const {
      activeColor,
      activeColorRgb,
      hoverInput,
      normal,
      hover,
    } = this.state
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
          <Card
            padding="2rem"
            normal={normal}
            hover={hover}
            activeColorRgb={activeColorRgb}
          >
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <NumberInput formatter={value => `${value}px`} />
            <CirclePicker
              color={activeColor}
              onChange={this.onColorChange}
              colors={['#dddddd', '#bbbbbb', '#999999', '#777777', '#555555']}
            />
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
            <div>
              Tweak options, view standout examples, and copy CSS to your own
              projects and designs.
            </div>
          </Card>
          <Card padding="2rem" style={{ margin: '0rem 1rem' }}>
            <h3>Why</h3>
            <div>
              A good tool should make getting to the end result easier. By
              building on top of existing designs and limiting options to ranges
              where better designs for cards are met, it's easier to mock up a
              design that works.
            </div>
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
