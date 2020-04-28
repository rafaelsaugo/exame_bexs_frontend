import styled from 'styled-components'

import {
  MediaQuery
} from './../../common/styles'

import {
  COLORS
} from './../../common/helpers'

const CONTAINER = styled.div`
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 0px;
  width: 230px;
  margin-left: -115px;
  height: 170px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, .5);
  transition: all .1s;

  ${
    props => {
      if (!props.rotateRight) {
        return `transform: rotate3d(0, 1, 0, 0deg);`
      }

      if (!!props.rotateRight) {
        return `transform: rotate3d(0, 1, 0, 90deg);`
      }
    }
  }

  ${
    MediaQuery.desktop`
      left: 15px;
      width: 325px;
      margin-left: 0px;
      height: 224px;
    `
  }
`

const BOX = styled.div`
  border-radius: 10px;
  position: absolute;
  left: -25px;
  top: 0px;
  width: 280px;
  height: 170px;
  z-index: ${props => props.zIndex};

  > img {
    width: 100%;
    height: auto;
  }

  ${
    MediaQuery.desktop`
      left: -15px;
      width: 365px;
      height: 225px;
    `
  }
`

const OVERLAY = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  text-align: left;

  span {
    display: block;
    position: absolute;
    font-family: 'SF Pro Text', 'Verdana', 'Regular', 'Arial', 'Tahoma', 'Helvetica';
  }
`

const NAME = styled.span`
  color: ${COLORS.white};
  left: 15px;
  top: 125px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
  text-shadow: 0px 1px 2px ${COLORS.black};

  ${
    MediaQuery.desktop`
      left: 25px;
      font-size: 16px;
      top: 165px;
      width: 240px;
    `
  }
`

const NUMBER = styled.span`
  color: ${COLORS.white};
  font-size: 16px;
  left: 15px;
  letter-spacing: 3.9px;
  top: 75px;
  text-shadow: 0px 1px 2px ${COLORS.black};

  ${
    MediaQuery.desktop`
      left: 25px;
      top: 105px;
      font-size: 24px;
      letter-spacing: 2.4px;
    `
  }
`

const CODE = styled.span`
  font-size: 12px;
  left: 140px;
  top: 83px;
  color: ${COLORS.grey4};

  ${
    MediaQuery.desktop`
      left: 183px;
      top: 108px;
      font-size: 16px;
    `
  }
`

const DATE = styled.span`
  color: ${COLORS.white};
  font-size: 12px;
  left: 230px;
  top: 125px;
  text-shadow: 0px 1px 2px ${COLORS.black};

  ${
    MediaQuery.desktop`
      left: 290px;
      top: 165px;
      font-size: 16px;
    `
  }
`

const LOGO = styled.span`
  left: 15px;
  top: 25px;

  > i {
    display: block;
    width: 55px;

    > img {
      width: 100%;
      height: auto;
    }
  }

  ${
    MediaQuery.desktop`
      left: 25px;
      top: 35px;

      > i {
        display: block;
        width: 70px;
      }
    `
  }
`

export {
  CONTAINER,
  OVERLAY,
  NAME,
  NUMBER,
  CODE,
  DATE,
  BOX,
  LOGO
}
