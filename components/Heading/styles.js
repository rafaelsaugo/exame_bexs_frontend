import styled from 'styled-components'

import {
  MediaQuery
} from './../../common/styles'

import {
  COLORS
} from './../../common/helpers'

const CONTAINER = styled.h1`
  color: ${COLORS.white};
  font-size: 16px;
  line-height: 16px;

  ${MediaQuery.desktop`
    font-size: 20px;
    line-height: 20px;
  `}
`

export {
  CONTAINER
}
