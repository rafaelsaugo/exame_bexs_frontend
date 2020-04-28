import React from 'react'

import Logo from './../../components/Logo'
import Nav from '../../components/Nav'

import {
  CONTAINER
} from './styles'

import {
  CONTENTBODY
} from './../../common/styles'
import {
  MainNav
} from './../../common/helpers'

function MainHeader(props) {
  return (
    <CONTAINER id="main-header">
      <CONTENTBODY flex vCenter row>
        <Logo />

        <Nav data={MainNav} />
      </CONTENTBODY>
    </CONTAINER>
  )
}

export default MainHeader
