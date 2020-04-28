import React from 'react'

import Image from './../Image'

import {
  CONTAINER
} from './styles'

import DemoShopPNG from './../../assets/png/demo-shop-logo.png'

function Logo() {
  return (
    <CONTAINER href='#'>
      <Image src={DemoShopPNG} />
    </CONTAINER>
  )
}

export default Logo
