import React from 'react'
import styled from 'styled-components'
import { CirclePicker } from 'react-color'

import { COLORS } from '../constants'

import NumberInput from './Input/num-input'

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  align-items: center;
`
const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  align-items: center;
  color: ${COLORS['gray']};
`

const ControlsForm = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      borderRadius,
      normal,
      hover,
      activeColor,
      onChangeNum,
      onColorChange,
    } = this.props

    return (
      <FormGrid>
        <InputGrid>
          <div>BORDER RADIUS</div>
          <NumberInput
            defaultValue={borderRadius}
            onChangeNum={onChangeNum}
            formatter={value => `${value}px`}
            name="borderRadius"
          />
        </InputGrid>
        <InputGrid>
          <div>HORIZONTAL</div>
          <NumberInput
            defaultValue={normal.x}
            onChangeNum={onChangeNum}
            formatter={value => `${value}px`}
            name="x"
            type="normal"
          />
          <NumberInput
            disabled
            defaultValue={hover.x}
            onChangeNum={onChangeNum}
            formatter={value => `${value}px`}
            name="x"
            type="hover"
          />
        </InputGrid>
        <InputGrid>
          <div>VERTICAL</div>
          <NumberInput
            defaultValue={normal.y}
            onChangeNum={onChangeNum}
            formatter={value => `${value}px`}
            name="y"
            type="normal"
          />
          <NumberInput
            disabled
            defaultValue={hover.y}
            onChangeNum={onChangeNum}
            formatter={value => `${value}px`}
            name="y"
            type="hover"
          />
        </InputGrid>
        <InputGrid>
          <div>BLUR</div>
          <NumberInput
            defaultValue={normal.blur}
            onChangeNum={onChangeNum}
            formatter={value => `${value}px`}
            name="blur"
            type="normal"
          />
          <NumberInput
            disabled
            defaultValue={hover.blur}
            onChangeNum={onChangeNum}
            formatter={value => `${value}px`}
            name="blur"
            type="hover"
          />
        </InputGrid>
        <InputGrid>
          <div>SPREAD</div>
          <NumberInput
            defaultValue={normal.spread}
            onChangeNum={onChangeNum}
            formatter={value => `${value}px`}
            name="spread"
            type="normal"
          />
          <NumberInput
            disabled
            defaultValue={hover.spread}
            onChangeNum={onChangeNum}
            formatter={value => `${value}px`}
            name="spread"
            type="hover"
          />
        </InputGrid>
        <CirclePicker
          color={activeColor}
          onChange={onColorChange}
          colors={['#dddddd', '#bbbbbb', '#999999', '#777777', '#555555']}
        />
      </FormGrid>
    )
  }
}

export default ControlsForm
