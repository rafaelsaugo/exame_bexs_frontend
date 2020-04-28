import styled from 'styled-components'

import { MediaQuery } from './../../common/styles'

import {
  COLORS
} from './../../common/helpers'

const CONTAINER = styled.nav``

const LIST = styled.ul`
  display: none;

  ${MediaQuery.desktop`
    display: flex;
  `}

  list-style: inside none;
`

const ITEM = styled.li`
  background: ${COLORS.grey3};
  margin-right: 35px;
  height: 18px;
  line-height: 18px;
  width: 100px;
  text-align: center;
  border-radius: 5px;

  &&:last-child {
    margin-right: 0px;
  }
`

const LINK = styled.a`
  display: block;
  color: ${COLORS.white};
  text-decoration: none;
  font-size: 16px;
`

export {
  CONTAINER,
  LIST,
  ITEM,
  LINK
}
