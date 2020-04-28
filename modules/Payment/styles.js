import styled from 'styled-components'

import {
  MediaQuery
} from './../../common/styles'

import {
  COLORS
} from './../../common/helpers'

const CONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.white};
  width: 100%;
  height: 100%;
  text-align: center;

  ${MediaQuery.desktop`
    flex-direction: row;
    max-width: 1024px;
    width: 1024px;
    max-height: 595px;
    height: 595px;
  `}
`

const HEADERCONTAINER = styled.div`
  background: ${COLORS.red1};
  box-sizing: border-box;
  width: 100%;
  height: 240px;

  .button {
    > i {
      > img {
        width: 40px;
      }
    }

    > span {
      display: none;
    }
  }

  ${MediaQuery.desktop`
    padding: 50px 0px 0px 65px;
    width: 350px;
    height: auto;

    .button {
      margin-left: -10px;

      > i {
        > img {
          width: 25px;
        }
      }

      > span {
        display: unset;
      }
    }
  `}
`

const CONTENTCONTAINER = styled.div`
  padding-top: 120px;
  width: 280px;
  margin: 0px auto;
  text-align: left;

  > form {
    > fieldset {
      > div.input {
        display: inline-block;
        margin-bottom: 10px;
        width: 100%;
      }

      > div.input.date {
        margin-right: 30px;
        width: 125px;
        flex: none;
      }

      > div.input.cvv {
        width: 125px;
        flex: none;
      }

      > .control {
        padding-top: 10px;
      }
    }
  }

  ${MediaQuery.desktop`
    padding-top: 55px;
    width: 420px;
    margin: 0px;
    margin-left: 160px;

    > form {
      > fieldset {
        > div.input {
          margin-bottom: 20px;
        }

        > div.input.date {
          width: 205px;
          margin-right: 15px;
        }

        > div.input.cvv {
          width: 200px;
        }
      }
    }
  `}
`

const BREADCRUMB = styled.div`
  margin-bottom: 15px;
  margin-top: 20px;
  position: relative;

  > .stepper {
    display: block;
    position: absolute;
    left: 50%;
    top: 25px;
    transform: translate(0, -50%);
    margin-left: -45px;
  }

  ${MediaQuery.desktop`
    margin-bottom: 50px;
    margin-top: 0px;

    > .stepper {
      display: none;
    }
  `}
`

const TITLE = styled.div`
  display: flex;
  margin-bottom: 15px;
  text-align: center;
  justify-content: center;
  align-items: center;

  > i {
    margin-right: 15px;
  }

  > h1 {
    align-self: center;
    flex: none;
    width: auto;
    max-width: 165px;
  }

  ${MediaQuery.desktop`
    text-align: left;
    justify-content: unset;
    align-items: unset;
    margin-bottom: 30px;

    > h1 {
      max-width: 205px;
    }
  `}
`

const CARD = styled.div`
  position: relative;
`

export {
  CONTAINER,
  HEADERCONTAINER,
  CONTENTCONTAINER,
  BREADCRUMB,
  TITLE,
  CARD
}
