import React from 'react'

import Image from './../Image'

import {
  CONTAINER
} from './styles'

import CardFront from './CardFront'
import CardBack from './CardBack'

import CardBackPNG from './../../assets/png/card-back-image.png'
import CardBlankBackPNG from './../../assets/png/card-blank-back-image.png'

function Card(props) {
  const {
    number,
    name,
    date,
    code,
    company,
    filled,
    frontFilled,
    backFilled,
    rotateRight,
    rotateLeft
  } = props

  return (
    <CONTAINER {...props} id='payment-header-card'>
      <CardFront
        company={company}
        number={number}
        name={name}
        date={date}
        filled={filled}
        zIndex={rotateRight && !rotateLeft ? 2 : 1}
      />

      <CardBack
        code={code}
        filled={filled}
        zIndex={rotateLeft && !rotateRight ? 1 : 0} 
      />
    </CONTAINER>
  )
}

export default Card
