import styled from 'styled-components'

import {
  MediaQuery
} from './../../common/styles'

import {
  COLORS
} from './../../common/helpers'

const CONTAINER = styled.div`
  display: none;
  width: 100%;
  max-width: 327px;
  background: ${COLORS.white};
  height: 285px;
  max-height: 285px;

  ${
    MediaQuery.desktop`
      display: unset;
    `
  }
`

export {
  CONTAINER
}
