import React from 'react'
import InputNumber from 'rc-input-number'
import 'rc-input-number/assets/index.css'
import './num-input.css'

import { COLORS } from '../../constants'

class NumInput extends React.Component {
  render() {
    const { max, min, defaultValue } = this.props
    return (
      <div>
        <InputNumber
          style={{ height: 40 }}
          max={max}
          min={min}
          defaultValue={defaultValue}
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
