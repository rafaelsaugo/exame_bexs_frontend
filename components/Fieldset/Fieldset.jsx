import React from 'react'

import {
  CONTAINER
} from './styles'

function Fieldset(props) {
  const {
    children
  } = props

  return (
    <CONTAINER {...props} className="fieldset">
      { children }
    </CONTAINER>
  )
}

export default Fieldset
