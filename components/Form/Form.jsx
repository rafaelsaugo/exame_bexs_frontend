import React from 'react'

import {
  CONTAINER
} from './styles'

function Form(props) {
  const {
    children
  } = props

  return (
    <CONTAINER {...props} className="form">
      { children }
    </CONTAINER>
  )
}

export default Form
