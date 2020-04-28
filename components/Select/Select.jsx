import React from 'react'

import CustomIcon from '../CustomIcon'

import {
  CONTAINER,
  SELECTCONTAINER,
  SELECT,
  LABEL,
  WARNING,
  BUTTON
} from './styles'

function Select(props) {
  const {
    placeholder: label,
    warning,
    isValid,
    data
  } = props

  const selectRef = React.createRef()

  return (
    <CONTAINER className="select">
      <LABEL {...props}>{ label }</LABEL>
      <SELECTCONTAINER {...props}>
        <SELECT
          {...props}
          ref={selectRef}
          >
          <option value="">
            {
              label
            }
          </option>
          {
            data && data.length && data.map(
              (item, i) => {
                const {
                  value,
                  label
                } = item

                const key = `select-option-${i}`

                return (
                  <option key={key} value={value}>
                    { label }
                  </option>
                )
              }
            )
          }
        </SELECT>
        <BUTTON>
          <CustomIcon name="arrow-down" />
        </BUTTON>
      </SELECTCONTAINER>
      <WARNING isValid={isValid}>
        <p>{ warning }</p>
      </WARNING>
    </CONTAINER>
  )
}

export default Select
