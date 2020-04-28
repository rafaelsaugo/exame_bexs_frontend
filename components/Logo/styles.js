import styled from 'styled-components'

import {
  MediaQuery
} from './../../common/styles'

import {
  COLORS
} from './../../common/helpers'

const CONTAINER = styled.a`
  border: 0px none;
  color: ${COLORS.grey4};
  width: 150px;
  margin-left: 15px;

  ${MediaQuery.tabletV`
    width: 200px;
  `}

  ${MediaQuery.desktop`
    width: 260px;
    margin-left: 0px;
  `}

  > img {
    width: 100%;
    height: auto;
  }
`

export {
  CONTAINER
}
