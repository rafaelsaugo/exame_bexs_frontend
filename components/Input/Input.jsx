import React from 'react'

import CustomIcon from '../CustomIcon'

import {
  CONTAINER,
  INPUT,
  LABEL,
  WARNING,
  ICON
} from './styles'

function Input(props) {
  const {
    placeholder: label,
    warning,
    isValid,
    className,
    icon
  } = props

  return (
    <CONTAINER className={`input ${className}`}>
      <LABEL {...props}>{ label }</LABEL>
      <INPUT {...props} />
      {
        icon && <ICON>
          <CustomIcon name={icon} />
        </ICON>
      }
      <WARNING isValid={isValid}>
        <p>{ warning }</p>
      </WARNING>
    </CONTAINER>
  )
}

export default Input
