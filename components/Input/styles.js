import styled from 'styled-components'

import {
  COLORS
} from './../../common/helpers'

const CONTAINER = styled.div`
  text-align: left;
  margin-bottom: 15px;
  position: relative;
`

const LABEL = styled.label`
  color: ${COLORS.grey2};
  font-size: 13px;
  height: 15px;
  line-height: 15px;
  opacity: ${ props => {
    return !!props.isActive ? 1 : 0
  }};
  transition: all .5s;
`

const INPUT = styled.input`
  text-align: left;
  height: 30px;
  line-height: 30px;
  font-size: 17px;
  border: 0px none;
  color: ${ props => {
    const color = {
      code: COLORS.grey2
    }

    if(!props.isValid) {
      Object.assign(color, {
        code: COLORS.red1
      })
    }

    if(props.isValid && !!props.touched) {
      Object.assign(color, {
        code: COLORS.grey4
      })
    }

    return color.code;
  }};
  border-bottom: ${ props => {
    const border = {
      style: `${COLORS.grey2} 2px solid`
    }

    if(!props.isValid) {
      Object.assign(border, {
        style: `${COLORS.red1} 2px solid`
      })
    }

    if(props.isValid && !!props.touched) {
      Object.assign(border, {
        style: `${COLORS.grey4} 2px solid`
      })
    }

    return border.style;
  }};
  width: ${ props => props.width || `100%` }
  outline: none;
  margin-bottom: 2px;
  transition: all .5s;

  &&::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${ props => props.isValid ? COLORS.grey2 : COLORS.red1};
  }

  &&:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${ props => props.isValid ? COLORS.grey2 : COLORS.red1};
  }

  &&::-ms-input-placeholder { /* Microsoft Edge */
    color: ${ props => props.isValid ? COLORS.grey2 : COLORS.red1};
  }
`

const WARNING = styled.div`
  transition: all .5s;
  opacity: ${ props => !props.isValid ? 1 : 0 }

  > p {
    color: ${COLORS.red2}
    font-size: 11px;
  }
`

const ICON = styled.span`
  position: absolute;
  right: 0px;
  top: 23px;
  width: 13px;
  height: 13px;
  text-align: right;
  pointer-events: none;
  background: ${COLORS.white};

  > i {
    display: inline-block;
    width: 100%;
    height: 100%;

    > img {
      width: 100%;
      height: auto;
    }
  }
`

export {
  CONTAINER,
  LABEL,
  INPUT,
  WARNING,
  ICON
}
