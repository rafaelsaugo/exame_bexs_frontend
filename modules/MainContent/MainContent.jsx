import React from 'react'

import {
  CONTAINER
} from './styles'

import {
  CONTENTBODY
} from './../../common/styles'

function MainContent(props) {
  const {
    aside: AsideComponent,
    feature: FeatureComponent
  } = props

  return (
    <CONTAINER id='main-content'>
      <CONTENTBODY flex>
        <FeatureComponent />
        <AsideComponent />
      </CONTENTBODY>
    </CONTAINER>
  )
}

export default MainContent
