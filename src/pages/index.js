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
  margin-bottom: 0.5rem;
`
const CardFooter = styled.div`
  width: 100%;
  margin-left: 0;
`
const InfoCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    margin-bottom: 1rem;
  }
`
const InlineLinks = styled.a`
  margin: 0;
  text-decoration: none;
  font-weight: 700;
  color: ${COLORS['secondaryBlue']};
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
    let newState = { ...this.state }
    newState.border.color = result.rgb
    this.setState({ ...newState })
  }
  onChangeShadowColor = result => {
    let newState = { ...this.state }
    newState.shadowColor = result.rgb
    newState.normal['opacity'] = result.rgb.a
    this.setState({ ...newState })
  }
  onHoverToggle = () => {
    this.setState({ hoverStyles: !this.state.hoverStyles })
  }
  onBorderToggle = edge => {
    let newState = { ...this.state }
    newState.border[edge] = !newState.border[edge]
    this.setState({ ...newState })
  }
  onOpacityChange = (name, value, type) => {
    let newState = { ...this.state }
    if (type === 'normal') {
      newState['shadowColor']['a'] = value
    } else {
      newState['hover']['opacity'] = value
    }
    this.setState({ ...newState })
  }
  onNumInputChange = (name, value, type) => {
    let newState = { ...this.state }
    if (type) {
      newState[type][name] = value
    } else {
      newState[name] = value
    }
    this.setState({ ...newState })
  }
  onChangeSlider = (oldIndex, newIndex) => {
    let newState = {}
    try {
      newState = JSON.parse(JSON.stringify(SliderOptions[newIndex].state))
    } catch (e) {
      console.error("couldn't stringify state from options list")
    }
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
            hoverStyles={hoverStyles}
          />
        </Row>
        <InfoCardRow>
          <InfoCard padding="2rem">
            <div>
              <CardHeader>How It Was Made</CardHeader>
              <CardContent>
                Card Surge was built with a variety of modern tools and
                technologies including: Gatsby, React, and Netlify, among
                others.
              </CardContent>
              <CardContent>
                You're welcome to fork the code on Github and contribute what
                you'd like to see added:
              </CardContent>
            </div>
            <CardFooter>
              <a href="https://github.com/gillkyle/card-surge" target="_blank">
                <Button
                  style={{
                    padding: '.5rem 1rem',
                    textAlign: 'left',
                    background: COLORS['secondaryBlue'],
                    border: '0px solid white',
                  }}
                  active
                  displayText="See the code"
                  onClick={() => null}
                />
              </a>
            </CardFooter>
          </InfoCard>
          <InfoCard padding="2rem">
            <div>
              <CardHeader>Why Make This?</CardHeader>
              <CardContent>
                Designing cards takes tweaking subtle details, and an easier to
                use playground makes finding the right styles faster.
              </CardContent>
              <CardContent>
                Read about the whole process and how it was built in an upcoming
                blog post:
              </CardContent>
            </div>
            <CardFooter>
              <a href="https://medium.com/@kyle.robert.gill" target="_blank">
                <Button
                  style={{
                    padding: '.5rem 1rem',
                    textAlign: 'left',
                    background: COLORS['secondaryBlue'],
                    border: '0px solid white',
                  }}
                  active
                  displayText="View Blog"
                  onClick={() => null}
                />
              </a>
            </CardFooter>
          </InfoCard>
          <InfoCard padding="2rem">
            <div>
              <CardHeader>Contact</CardHeader>
              <CardContent>
                If you want to contact me about anything related to the site,
                you have questions, or want to pull or include your site in the
                gallery, feel free to reach out on{' '}
                <InlineLinks
                  href="https://www.twitter.com/gill_kyle"
                  target="_blank"
                >
                  Twitter
                </InlineLinks>,{' '}
                <InlineLinks
                  href="https://www.producthunt.com/@gill_kyle"
                  target="_blank"
                >
                  Product Hunt
                </InlineLinks>, or via{' '}
                <InlineLinks href="mailto:kylerobertgill@gmail.com">
                  email.
                </InlineLinks>
              </CardContent>
            </div>
            <CardFooter>
              <a href="mailto:kylerobertgill@gmail.com">
                <Button
                  style={{
                    padding: '.5rem 1rem',
                    textAlign: 'left',
                    background: COLORS['secondaryBlue'],
                    border: '0px solid white',
                  }}
                  active
                  displayText="Drop a Line"
                  onClick={() => null}
                />
              </a>
            </CardFooter>
          </InfoCard>
        </InfoCardRow>
      </div>
    )
  }
}

export default IndexPage
