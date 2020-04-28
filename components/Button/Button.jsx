import React from 'react'

import CustomIcon from '../CustomIcon'

import {
  CONTAINER
} from './styles'

function Button(props) {
  const {
    children,
    icon
  } = props

  return (
    <CONTAINER {...props} className='button'>
      {
        icon && <CustomIcon name={icon} width={25} />
      }

      <span>{ children }</span>
    </CONTAINER>
  )
}

export default Button
