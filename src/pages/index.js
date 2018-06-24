import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Card from '../components/card'
import SliderCard from '../components/Slider/SliderCard'
import SliderOptions from '../components/Slider/SliderOptions.json'
import { NextArrow, PrevArrow } from '../components/Slider/SliderArrows'

import { COLORS, BORDER_RADIUS } from '../constants'
import ControlsForm from '../components/controls-form'

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
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-bottom-left-radius: ${BORDER_RADIUS}px;
  color: ${COLORS['secondaryBlue']};
  background-color: ${COLORS['secondaryBlueT']};
  padding: 1rem 0.5rem 1rem 1.5rem;
`
const CodeContent = styled.div`
  padding: 1rem 0.5rem;
  color: ${COLORS['gray']};
`

const IndexPage = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverStyles: false,
      shadowColor: '#bbbbbb',
      shadowColorRgb: { r: 187, g: 187, b: 187, a: 1 },
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
      border: {
        top: true,
        bottom: false,
        right: false,
        left: false,
        radius: 5,
        width: 4,
        color: COLORS['gold'],
      },
    }
  }

  onChangeShadowColor = result => {
    console.log(result)
    this.setState({ shadowColor: result.hex, shadowColorRgb: result.rgb })
  }
  onChangeBorderColor = result => {
    console.log(result)
    let newState = { ...this.state }
    newState.border.color = result.hex
    this.setState({ ...newState })
  }
  onHoverToggle = () => {
    this.setState({ hoverStyles: !this.state.hoverStyles })
  }
  onBorderToggle = edge => {
    console.log(edge)
    let newState = { ...this.state }
    newState.border[edge] = !newState.border[edge]
    this.setState({ ...newState })
  }

  onNumInputChange = (name, value, type) => {
    console.log(name, value, type)
    let newState = { ...this.state }
    if (type) {
      newState[type][name] = value
    } else {
      newState[name] = value
    }
    this.setState({ ...newState })
  }
  onChangeSlider = (oldIndex, newIndex) => {
    console.log(newIndex)
    console.log(SliderOptions)
    let newState = {}
    try {
      newState = JSON.parse(JSON.stringify(SliderOptions[newIndex].state))
    } catch (e) {
      console.log("couldn't stringify state from options list")
    }
    console.log(newState)
    if (newState.hasOwnProperty('border')) {
      this.setState({
        border: newState.border,
        normal: newState.normal,
        shadowColor: newState.shadowColor,
        shadowColorRgb: newState.shadowColorRgb,
      })
      if (newState.hover.hasOwnProperty('x')) {
        this.setState({
          hover: newState.hover,
        })
      }
    }
  }

  render() {
    const {
      shadowColor,
      shadowColorRgb,
      hoverStyles,
      normal,
      hover,
      border,
    } = this.state
    const sliderSettings = {
      centerMode: true,
      easing: 'cubic-bezier',
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    }
    return (
      <div>
        <Row>
          <Card
            padding="0rem"
            normal={normal}
            hover={hover}
            border={border}
            shadowColorRgb={shadowColorRgb}
            hoverStyles={hoverStyles}
          >
            <ControlsForm
              normal={normal}
              hover={hover}
              border={border}
              hoverStyles={hoverStyles}
              shadowColor={shadowColor}
              onChangeNum={this.onNumInputChange}
              onChangeShadowColor={this.onChangeShadowColor}
              onChangeBorderColor={this.onChangeBorderColor}
              onHoverToggle={this.onHoverToggle}
              onBorderToggle={this.onBorderToggle}
            />
          </Card>
        </Row>
        <Row style={{ marginBottom: 0, paddingBottom: '3rem' }}>
          <SliderWrapper>
            <Slider beforeChange={this.onChangeSlider} {...sliderSettings}>
              {SliderOptions.map((example, index) => (
                <SliderCard
                  key={index}
                  example={example}
                  onClick={this.onChangeSlider}
                  index={index}
                />
              ))}
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
          <Card padding="2rem" style={{ margin: '0rem 2rem' }}>
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
