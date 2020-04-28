import styled from 'styled-components'

import {
  MediaQuery
} from './../../common/styles'

import {
  COLORS
} from './../../common/helpers'

const CONTAINER = styled.div`
  flex: 1;
  background: ${COLORS.grey1};

  ${
    MediaQuery.desktop`
      padding-top: 65px;
    `
  }
`

export {
  CONTAINER
}
