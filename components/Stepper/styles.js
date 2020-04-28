import styled from 'styled-components'

import {
  MediaQuery
} from './../../common/styles'

import {
  COLORS
} from './../../common/helpers'

const CONTAINER = styled.div`
  text-align: center;
  font-size: 13px;
  color: ${COLORS.white};
  text-align: right;

  > ul {
    display: none;
    flex-direction: row;
    width: auto;

    > li {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      margin-left: 15px;

      > span {
        display: inline-block;
        color: ${ COLORS.red1 };
      }

      > span.icon {
        border-radius: 10px;
        border: ${ COLORS.red1 } 1px solid;
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-weight: bold;
        margin-right: 10px;
        text-align: center;

        > i {
          display: block;
          width: 12px;
          height: 12px;
          margin: 0px auto;

          > img {
            width: 100%;
            height: auto;
          }
        }
      }

      > span.icon-after {
        margin-left: 15px;
        align-self: flex-end;
      }
    }

    > li.completed {
      > span.icon {
        background: ${ COLORS.red1 };
      }
    }

    > li:last-child {
      flex: none;
    }
  }

  ${
    MediaQuery.desktop`
      margin-bottom: 50px;

      > span {
        display: none;
      }

      > ul {
        display: inline-block;
      }
    `
  }
`

export {
  CONTAINER
}
