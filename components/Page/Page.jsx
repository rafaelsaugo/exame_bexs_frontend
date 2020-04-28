import React from 'react'

import {
  CONTAINER
} from './styles'

function Page(props) {
  const {
    children
  } = props

  return (
    <CONTAINER {...props} className='page'>
      { children }
    </CONTAINER>
  )
}

export default Page
