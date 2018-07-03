import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Card from '../components/card'
import SliderCard from '../components/Slider/SliderCard'
import SliderOptions from '../components/Slider/SliderOptions.json'
import { NextArrow, PrevArrow } from '../components/Slider/SliderArrows'

import { COLORS, MEDIA_QUERIES } from '../constants'
import ControlsForm from '../components/ControlsForm'
import CodeBlock from '../components/CodeBlock'
import Button from '../components/button'

const Row = styled.section`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    flex-direction: column;
  }
`
const InfoCardRow = styled(Row)`
  * + * {
    margin-left: 1rem;
    @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
      margin-left: 0;
    }
  }
`
const SliderWrapper = styled.div`
  width: 100%;
`
const CardHeader = styled.div`
  color: ${COLORS['secondaryBlueT']};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`
const CardContent = styled.div`
  color: ${COLORS['gray']};
  font-size: 1rem;
  margin-left: 0;
`
const InfoCard = styled(Card)`
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    margin-bottom: 1rem;
  }
`

const IndexPage = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverStyles: false,
      shadowColor: { r: 187, g: 187, b: 187, a: 1 },
      normal: {
        x: 0,
        y: 3,
        blur: 0,
        spread: 0,
        opacity: 0.3,
      },
      hover: {
        x: 0,
        y: 6,
        blur: 12,
        spread: 3,
        opacity: 0.2,
      },
      border: {
        top: true,
        bottom: false,
        right: false,
        left: false,
        radius: 12,
        width: 6,
        color: { r: 244, g: 191, b: 98, a: 1 },
      },
    }
  }

  onChangeBorderColor = result => {
    console.log(result)
    let newState = { ...this.state }
    newState.border.color = result.rgb
    this.setState({ ...newState })
  }
  onChangeShadowColor = result => {
    console.log(result)
    let newState = { ...this.state }
    newState.shadowColor = result.rgb
    newState.normal['opacity'] = result.rgb.a
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
  onOpacityChange = (name, value, type) => {
    console.log(name, value, type)
    let newState = { ...this.state }
    if (type === 'normal') {
      newState['shadowColor']['a'] = value
    } else {
      newState['hover']['opacity'] = value
    }
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
        hoverStyles: newState.hoverStyles,
        border: { ...newState.border },
        normal: { ...newState.normal },
        shadowColor: { ...newState.shadowColor },
      })
      if (newState.hover.hasOwnProperty('x')) {
        this.setState({
          hover: { ...newState.hover },
        })
      } else {
        this.setState({
          hover: { ...newState.normal },
        })
      }
    }
  }

  render() {
    const { shadowColor, hoverStyles, normal, hover, border } = this.state
    const sliderSettings = {
      centerMode: true,
      easing: 'cubic-bezier',
      focusOnSelect: true,
      infinite: true,
      initialSlide: 0,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div>
        <Row>
          <Card
            padding="0rem"
            normal={normal}
            hover={hover}
            border={border}
            shadowColor={shadowColor}
            hoverStyles={hoverStyles}
          >
            <ControlsForm
              normal={normal}
              hover={hover}
              border={border}
              hoverStyles={hoverStyles}
              shadowColor={shadowColor}
              onChangeNum={this.onNumInputChange}
              onChangeOpacity={this.onOpacityChange}
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
          <CodeBlock
            border={border}
            normal={normal}
            hover={hover}
            shadowColor={shadowColor}
          />
        </Row>
        <InfoCardRow>
          <InfoCard padding="2rem">
            <CardHeader>How it Works</CardHeader>
            <CardContent>
              Tweak options, view standout examples, and copy CSS to your own
              projects and designs.
            </CardContent>
          </InfoCard>
          <InfoCard padding="2rem">
            <CardHeader>Why</CardHeader>
            <CardContent>
              A good tool should make getting to the end result easier. By
              building on top of existing designs and limiting options to ranges
              where better designs for cards are met, it's easier to mock up a
              design that works.
            </CardContent>
          </InfoCard>
          <InfoCard padding="2rem">
            <CardHeader>Subscribe</CardHeader>
          </InfoCard>
        </InfoCardRow>
      </div>
    )
  }
}

export default IndexPage
