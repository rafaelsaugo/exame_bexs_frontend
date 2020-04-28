import React, {
  Fragment
} from 'react'

import Image from './../Image'
import CustomIcon from './../CustomIcon'

import {
  CONTAINER,
  OVERLAY,
  NAME,
  NUMBER,
  CODE,
  DATE,
  BOX,
  LOGO
} from './styles'

import CardFrontPNG from './../../assets/png/card-front-image.png'
import CardBlankFrontPNG from './../../assets/png/card-blank-front-image.png'

const Overlay = (props) => {
  const {
    name,
    number,
    date,
    code,
    company
  } = props

  return (
    <OVERLAY>
      {
        !!company && company === 'visa' && <LOGO>
          <CustomIcon name="visa" />
        </LOGO>
      }

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
  name,
  number,
  date,
  company,
  zIndex
}) => {
  return !filled && (
    <BOX className='card' zIndex={zIndex}>
      <Overlay company={company} name={name} number={number} date={date} />

      <Image src={CardBlankFrontPNG} />
    </BOX>
  )
}

const Filled = ({
  filled,
  name,
  number,
  date,
  company,
  zIndex
}) => {
  return !!filled && (
    <BOX className='card' zIndex={zIndex}>
      <Overlay company={company} name={name} number={number} date={date} />
      
      <Image src={CardFrontPNG} />
    </BOX>
  )
}

function CardFront(props) {
  return (
    <Fragment>
      <Empty {...props}  />
      <Filled {...props} />
    </Fragment>
  )
}

export default CardFront
