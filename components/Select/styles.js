import styled from 'styled-components'

import {
  COLORS
} from './../../common/helpers'

const CONTAINER = styled.div`
  text-align: left;
  margin-bottom: 15px;
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

const SELECTCONTAINER = styled.div`
  text-align: left;
  height: 30px;
  line-height: 30px;
  border: 0px none;
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
  margin-bottom: 2px;
  position: relative;

  &&.warning {
    border-bottom: ${COLORS.red1} 2px solid;
  }
`

const SELECT = styled.select`
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
  width: ${ props => props.width || `100%` };
  padding: 0px;
  text-indent: 0px;
  outline: none;
  transition: all .5s;

  &&::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
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
  }

  &&:-ms-input-placeholder { /* Internet Explorer 10-11 */
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
  }

  &&::-ms-input-placeholder { /* Microsoft Edge */
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
  }

  > option {
    color: ${COLORS.grey2};
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

const BUTTON = styled.a`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 30px;
  height: 30px;
  text-align: right;
  pointer-events: none;
  background: ${COLORS.white};

  > i {
    display: inline-block;
    width: 20px;

    > img {
      width: 100%;
      height: auto;
    }
  }
`

export {
  CONTAINER,
  SELECTCONTAINER,
  LABEL,
  SELECT,
  BUTTON,
  WARNING
}
