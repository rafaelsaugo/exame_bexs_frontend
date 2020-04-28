import React from 'react'

import {
  CONTAINER
} from './styles'

function Heading(props) {
  const {
    children
  } = props

  return (
    <CONTAINER {...props}>
      { children }
    </CONTAINER>
  )
}

export default Heading
