import React from 'react'
import styled from 'styled-components'
import { CirclePicker, SketchPicker } from 'react-color'

import { COLORS } from '../constants'

import NumberInput from './Input/num-input'
import Button from './button'

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0px 1fr 1fr 10px 1fr 1fr 1fr;
  grid-gap: 1rem 2rem;
  align-items: center;
  margin: 1.5rem 2rem 2rem 2rem;
  color: ${COLORS['gray']};
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

const ControlsForm = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      normal,
      hover,
      border,
      hoverStyles,
      shadowColor,
      onChangeNum,
      onChangeShadowColor,
      onChangeBorderColor,
      onHoverToggle,
      onBorderToggle,
    } = this.props

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
          <ColumnGrid>
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
            <CirclePicker
              color={border.color}
              onChange={onChangeBorderColor}
              colors={['#F4BF62', '#69B6F7', '#ff999b', '#bcbcbe', '#000000']}
            />
          </InputGrid>
          <InputGrid>
            <InputLabel>BORDER EDGES</InputLabel>
            <QuadGrid>
              <Button
                active={border.top}
                displayText={border.top ? 'O' : 'o'}
                onClick={onBorderToggle}
                detail="top"
              />
              <Button
                active={border.right}
                displayText={border.right ? 'O' : 'o'}
                onClick={onBorderToggle}
                detail="right"
              />
              <Button
                active={border.bottom}
                displayText={border.bottom ? 'O' : 'o'}
                onClick={onBorderToggle}
                detail="bottom"
              />
              <Button
                active={border.left}
                displayText={border.left ? 'O' : 'o'}
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
          <ColumnGrid>
            <div />
            <div>
              <ColumnHeader>NORMAL</ColumnHeader>
            </div>
            <div>
              <ColumnHeader>HOVER</ColumnHeader>
            </div>
          </ColumnGrid>
          <InputGrid>
            <InputLabel>HORIZONTAL</InputLabel>

            <NumberInput
              value={normal.x}
              defaultValue={normal.x}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              name="x"
              type="normal"
            />
            <NumberInput
              disabled={!hoverStyles}
              value={hover.x}
              defaultValue={hover.x}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              name="x"
              type="hover"
            />
          </InputGrid>
          <InputGrid>
            <InputLabel>VERTICAL</InputLabel>
            <NumberInput
              value={normal.y}
              defaultValue={normal.y}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              name="y"
              type="normal"
            />
            <NumberInput
              disabled={!hoverStyles}
              value={hover.y}
              defaultValue={hover.y}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              name="y"
              type="hover"
            />
          </InputGrid>
          <InputGrid>
            <InputLabel>BLUR</InputLabel>
            <NumberInput
              value={normal.blur}
              defaultValue={normal.blur}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              name="blur"
              type="normal"
            />
            <NumberInput
              disabled={!hoverStyles}
              value={hover.blur}
              defaultValue={hover.blur}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              name="blur"
              type="hover"
            />
          </InputGrid>
          <InputGrid>
            <InputLabel>SPREAD</InputLabel>
            <NumberInput
              value={normal.spread}
              defaultValue={normal.spread}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              name="spread"
              type="normal"
            />
            <NumberInput
              disabled={!hoverStyles}
              value={hover.spread}
              defaultValue={hover.spread}
              onChangeNum={onChangeNum}
              formatter={value => `${value}px`}
              name="spread"
              type="hover"
            />
          </InputGrid>
          <InputGrid>
            <InputLabel>SHADOW COLOR</InputLabel>
            <CirclePicker
              color={shadowColor}
              onChange={onChangeShadowColor}
              colors={['#dddddd', '#bbbbbb', '#999999', '#777777', '#555555']}
            />
          </InputGrid>
          <InputGrid>
            <InputLabel>OPACITY</InputLabel>
            <NumberInput
              value={normal.opacity}
              defaultValue={normal.opacity}
              onChangeNum={onChangeNum}
              formatter={value => `${value * 100}%`}
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
              onChangeNum={onChangeNum}
              formatter={value => `${value * 100}%`}
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
