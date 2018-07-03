import React from 'react'
import InputNumber from 'rc-input-number'
import 'rc-input-number/assets/index.css'
import './num-input.css'

import { COLORS } from '../../constants'

class NumInput extends React.Component {
  onChangeValue = value => {
    const { name, onChangeNum, type } = this.props
    this.props.onChangeNum(name, value, type)
  }

  render() {
    const { max, min, defaultValue, step = 1, type } = this.props
    return (
      <div>
        <InputNumber
          style={{ height: 40 }}
          step={step}
          type={type}
          max={max}
          min={min}
          defaultValue={defaultValue}
          onChange={this.onChangeValue}
          {...this.props}
        />
      </div>
    )
  }
}

export default NumInput

NumInput.defaultProps = {
  max: 20,
  min: -20,
  defaultValue: 0,
}
