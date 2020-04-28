import React from 'react'

import Page from './components/Page'

import MainHeader from './modules/MainHeader'
import MainContent from './modules/MainContent'
import Aside from './modules/Aside'
import Payment from './modules/Payment'

import GlobalStyle from './styles'

function App () {
  return (
    <Page>
      <GlobalStyle />

      <MainHeader />
      <MainContent
        aside={Aside}
        feature={Payment}
      />
    </Page>
  )
}

export default App
