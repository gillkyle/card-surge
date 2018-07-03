import React from 'react'
import styled from 'styled-components'
import { CirclePicker, ChromePicker, SketchPicker } from 'react-color'
import * as MD from 'react-icons/lib/md'

import { COLORS, MEDIA_QUERIES, BORDER_RADIUS } from '../constants'

import NumberInput from './Input/NumInputs'
import Button from './button'

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0px 1fr 1fr 10px 1fr 1fr 1fr;
  grid-gap: 1rem 2rem;
  align-items: center;
  margin: 2rem 2.5rem 2.5rem 2.5rem;
  color: ${COLORS['gray']};
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0px 1fr 1fr 1fr 1fr 10px 1fr 1fr 1fr;
    margin: 1rem 1.5rem 1.5rem 1.5rem;
  }
`
const baseInputGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-gap: 1rem;
`
const InputGrid = styled(baseInputGrid)`
  align-items: center;
`
const InputLabel = styled.div`
  letter-spacing: 2px;
  font-size: 0.8rem;
`
const ColumnGrid = styled(InputGrid)`
  align-items: flex-end;
  justify-items: center;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    display: ${props => (props.hide ? 'none' : 'inherit')};
  }
`
const ColumnHeader = styled.span`
  position: relative;
  font-size: 0.5rem;
  letter-spacing: 2px;
  color: ${COLORS['primaryBlue']};
  top: 0.5rem;
`
const QuadGrid = styled.div`
  display: grid;
  grid-column: span 2;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`
const SwatchSelector = styled.div`
  min-height: 30px;
  background-color: ${props =>
    `rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${
      props.color.a
    })`};
  grid-column: span 2;
  border-radius: ${BORDER_RADIUS}px;
  border: 1px solid ${COLORS['gray']};
  cursor: pointer;
`
const ColorPopover = styled.div`
  position: absolute;
  z-index: 2;
`

const ControlsForm = class extends React.Component {
  state = {
    displayColorPicker: false,
    displayShadowColorPicker: false,
  }

  handleColorOpen = () => this.setState({ displayColorPicker: true })
  handleColorClose = () => this.setState({ displayColorPicker: false })

  handleShadowColorOpen = () =>
    this.setState({ displayShadowColorPicker: true })
  handleShadowColorClose = () =>
    this.setState({ displayShadowColorPicker: false })

  handleColorChange = (color, e) => {
    this.props.onChangeBorderColor(color)
  }
  handleShadowColorChange = (color, e) => {
    this.props.onChangeShadowColor(color)
  }

  render() {
    const {
      normal,
      hover,
      border,
      hoverStyles,
      shadowColor,
      onChangeNum,
      onChangeOpacity,
      onHoverToggle,
      onBorderToggle,
    } = this.props
    const { displayColorPicker, displayShadowColorPicker } = this.state

    return (
      <div>
        <FormGrid>
          <ColumnGrid>
            <div style={{ justifySelf: 'flex-start', fontWeight: 700 }}>
              <ColumnHeader>BORDER</ColumnHeader>
            </div>
            <div>
              <ColumnHeader>RADIUS</ColumnHeader>
            </div>
            <div>
              <ColumnHeader>WIDTH</ColumnHeader>
            </div>
          </ColumnGrid>
          <ColumnGrid hide>
            <div />
            <div />
            <div />
          </ColumnGrid>
          <InputGrid>
            <InputLabel>BORDER SIZES</InputLabel>
            <NumberInput
              value={border.radius}
              defaultValue={border.radius}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              parser={value => value.replace('px', '')}
              name="radius"
              type="border"
              max={25}
              min={0}
            />
            <NumberInput
              value={border.width}
              defaultValue={border.width}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              parser={value => value.replace('px', '')}
              name="width"
              type="border"
              max={10}
              min={0}
            />
          </InputGrid>
          <InputGrid>
            <InputLabel>HOVER STYLES</InputLabel>
            <Button
              active={hoverStyles}
              style={{ gridColumn: 'span 2' }}
              displayText={hoverStyles ? 'ON' : 'OFF'}
              onClick={onHoverToggle}
            />
          </InputGrid>
          <InputGrid>
            <InputLabel>BORDER COLOR</InputLabel>
            {/* <CirclePicker
              color={border.color}
              onChange={onChangeBorderColor}
              colors={['#F4BF62', '#69B6F7', '#ff999b', '#bcbcbe', '#000000']}
            /> */}
            <SwatchSelector color={border.color} onClick={this.handleColorOpen}>
              {displayColorPicker ? (
                <ColorPopover>
                  <ChromePicker
                    color={border.color}
                    onChange={this.handleColorChange}
                  />
                </ColorPopover>
              ) : null}
            </SwatchSelector>
            {displayColorPicker ? (
              <div
                onClick={this.handleColorClose}
                style={{
                  position: 'fixed',
                  top: '0px',
                  right: '0px',
                  bottom: '0px',
                  left: '0px',
                }}
              />
            ) : null}
          </InputGrid>
          <InputGrid>
            <InputLabel>BORDER EDGES</InputLabel>
            <QuadGrid>
              <Button
                active={border.top}
                displayText={
                  border.top ? (
                    <MD.MdBorderTop />
                  ) : (
                    <MD.MdBorderTop color={COLORS['gray']} />
                  )
                }
                onClick={onBorderToggle}
                detail="top"
              />
              <Button
                active={border.right}
                displayText={
                  border.right ? (
                    <MD.MdBorderRight />
                  ) : (
                    <MD.MdBorderRight color={COLORS['gray']} />
                  )
                }
                onClick={onBorderToggle}
                detail="right"
              />
              <Button
                active={border.bottom}
                displayText={
                  border.bottom ? (
                    <MD.MdBorderBottom />
                  ) : (
                    <MD.MdBorderBottom color={COLORS['gray']} />
                  )
                }
                onClick={onBorderToggle}
                detail="bottom"
              />
              <Button
                active={border.left}
                displayText={
                  border.left ? (
                    <MD.MdBorderLeft />
                  ) : (
                    <MD.MdBorderLeft color={COLORS['gray']} />
                  )
                }
                onClick={onBorderToggle}
                detail="left"
              />
            </QuadGrid>
          </InputGrid>
          <ColumnGrid>
            <div style={{ justifySelf: 'flex-start', fontWeight: 700 }}>
              <ColumnHeader>SHADOW</ColumnHeader>
            </div>
            <div>
              <ColumnHeader>NORMAL</ColumnHeader>
            </div>
            <div>
              <ColumnHeader>HOVER</ColumnHeader>
            </div>
          </ColumnGrid>
          <ColumnGrid hide>
            <div />
            <div>
              <ColumnHeader hide>NORMAL</ColumnHeader>
            </div>
            <div>
              <ColumnHeader hide>HOVER</ColumnHeader>
            </div>
          </ColumnGrid>
          <InputGrid>
            <InputLabel>HORIZONTAL</InputLabel>

            <NumberInput
              value={normal.x}
              defaultValue={normal.x}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              parser={value => value.replace('px', '')}
              name="x"
              type="normal"
              max={30}
              min={0}
            />
            <NumberInput
              disabled={!hoverStyles}
              value={hover.x}
              defaultValue={hover.x}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              parser={value => value.replace('px', '')}
              name="x"
              type="hover"
              max={30}
              min={0}
            />
          </InputGrid>
          <InputGrid>
            <InputLabel>VERTICAL</InputLabel>
            <NumberInput
              value={normal.y}
              defaultValue={normal.y}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              parser={value => value.replace('px', '')}
              name="y"
              type="normal"
              max={30}
              min={0}
            />
            <NumberInput
              disabled={!hoverStyles}
              value={hover.y}
              defaultValue={hover.y}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              parser={value => value.replace('px', '')}
              name="y"
              type="hover"
              max={30}
              min={0}
            />
          </InputGrid>
          <InputGrid>
            <InputLabel>BLUR</InputLabel>
            <NumberInput
              value={normal.blur}
              defaultValue={normal.blur}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              parser={value => value.replace('px', '')}
              name="blur"
              type="normal"
              max={100}
              min={0}
            />
            <NumberInput
              disabled={!hoverStyles}
              value={hover.blur}
              defaultValue={hover.blur}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              parser={value => value.replace('px', '')}
              name="blur"
              type="hover"
              max={100}
              min={0}
            />
          </InputGrid>
          <InputGrid>
            <InputLabel>SPREAD</InputLabel>
            <NumberInput
              value={normal.spread}
              defaultValue={normal.spread}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              parser={value => value.replace('px', '')}
              name="spread"
              type="normal"
            />
            <NumberInput
              disabled={!hoverStyles}
              value={hover.spread}
              defaultValue={hover.spread}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              parser={value => value.replace('px', '')}
              name="spread"
              type="hover"
            />
          </InputGrid>
          <InputGrid>
            <InputLabel>SHADOW COLOR</InputLabel>
            {/* <CirclePicker
              color={shadowColor}
              onChange={onChangeShadowColor}
              colors={['#dddddd', '#bbbbbb', '#999999', '#777777', '#555555']}
            /> */}
            <SwatchSelector
              color={shadowColor}
              onClick={this.handleShadowColorOpen}
            >
              {displayShadowColorPicker ? (
                <ColorPopover>
                  <ChromePicker
                    color={shadowColor}
                    onChange={this.handleShadowColorChange}
                  />
                </ColorPopover>
              ) : null}
            </SwatchSelector>
            {displayShadowColorPicker ? (
              <div
                onClick={this.handleShadowColorClose}
                style={{
                  position: 'fixed',
                  top: '0px',
                  right: '0px',
                  bottom: '0px',
                  left: '0px',
                }}
              />
            ) : null}
          </InputGrid>
          <InputGrid>
            <InputLabel>OPACITY</InputLabel>
            <NumberInput
              value={shadowColor.a}
              defaultValue={shadowColor.a}
              onChangeNum={onChangeOpacity}
              name="opacity"
              type="normal"
              step={0.1}
              max={1}
              min={0}
            />
            <NumberInput
              disabled={!hoverStyles}
              value={hover.opacity}
              defaultValue={hover.opacity}
              onChangeNum={onChangeOpacity}
              name="opacity"
              type="hover"
              step={0.1}
              max={1}
              min={0}
            />
          </InputGrid>
        </FormGrid>
      </div>
    )
  }
}

export default ControlsForm
