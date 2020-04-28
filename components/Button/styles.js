import styled from 'styled-components'

import {
  MediaQuery
} from './../../common/styles'

import {
  COLORS
} from './../../common/helpers'

const CONTAINER = styled.button`
  border: 0px none;
  color: ${COLORS.white};
  font-size: ${ props => props.small ? '12px' : '17px' };
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  outline: none;
  display: block;
  text-transform: ${ props => props.lowercase ? 'none' : 'uppercase' };
  border-radius: 10px;
  font-family: 'SF Pro Text', 'Verdana', 'Regular', 'Arial', 'Tahoma', 'Helvetica';
  background: ${ props => !!props.noBackground ? 'none' : COLORS.red1 }
  ${ props => !!props.block && `
    width: 100%;
  `}
  ${ props => !props.noBackground && `
    height: 50px;
    line-height: 50px;
  `}

  > i {
    flex: 0;
    margin-right: 10px;
  }
  
  > span {
    flex: 1;
    height: 22px;

    ${ MediaQuery.desktop`
      top: 2px;
      position: relative;
    `}
  }

  ${ props => !!props.noBackground && MediaQuery.desktop`
    height: 25px;
    line-height: 25px;
  `}
`

export {
  CONTAINER
}
