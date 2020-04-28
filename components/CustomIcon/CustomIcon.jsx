import React from 'react'

import Image from './../Image'

import {
  CONTAINER
} from './styles'

import CardIconSVG from './../../assets/svg/card-icon.svg'
import ArrowLeftIconPNG from './../../assets/png/arrow-left-icon.png'
import ArrowRightIconPNG from './../../assets/png/arrow-right-icon.png'
import ArrowDownIconPNG from './../../assets/png/arrow-down-icon.png'
import InfoIconPNG from './../../assets/png/info-icon.png'
import VisaIconPNG from './../../assets/png/visa-logo.png'
import CheckIconPNG from './../../assets/png/check-icon.png'

function CustomIcon(props) {
  const {
    name,
    width
  } = props

  return (
    <CONTAINER width={width}>
      { !!name && name === 'card' && <CardIconSVG /> }

      { !!name && name === 'arrow-left' && <Image src={ArrowLeftIconPNG} /> }

      { !!name && name === 'arrow-right' && <Image src={ArrowRightIconPNG} /> }

      { !!name && name === 'arrow-down' && <Image src={ArrowDownIconPNG} /> }

      { !!name && name === 'info' && <Image src={InfoIconPNG} /> }

      { !!name && name === 'visa' && <Image src={VisaIconPNG} /> }

      { !!name && name === 'check' && <Image src={CheckIconPNG} /> }
    </CONTAINER>
  )
}

export default CustomIcon
