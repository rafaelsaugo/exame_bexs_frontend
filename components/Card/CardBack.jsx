import React, {
  Fragment
} from 'react'

import Image from './../Image'

import {
  CONTAINER,
  OVERLAY,
  NAME,
  NUMBER,
  CODE,
  DATE,
  BOX
} from './styles'

import CardBackPNG from './../../assets/png/card-back-image.png'
import CardBlankBackPNG from './../../assets/png/card-blank-back-image.png'

const Overlay = (props) => {
  const {
    name,
    number,
    date,
    code
  } = props

  return (
    <OVERLAY>
      {
        !!name && <NAME>{name}</NAME>
      }

      {
        !!number && <NUMBER>{number}</NUMBER>
      }

      {
        !!date && <DATE>{date}</DATE>
      }

      {
        !!code && <CODE>{code}</CODE>
      }
    </OVERLAY>
  )
}

const Empty = ({
  filled,
  code,
  zIndex
}) => {
  return !filled && (
    <BOX className='card' zIndex={zIndex}>
      <Overlay code={code} />

      <Image src={CardBlankBackPNG} />
    </BOX>
  )
}

const Filled = ({
  filled,
  code,
  zIndex
}) => {
  return !!filled && (
    <BOX className='card' zIndex={zIndex}>
      <Overlay code={code} />
      
      <Image src={CardBackPNG} />
    </BOX>
  )
}

function CardFront(props) {
  return (
    <Fragment>
      <Empty {...props} />
      <Filled {...props} />
    </Fragment>
  )
}

export default CardFront
