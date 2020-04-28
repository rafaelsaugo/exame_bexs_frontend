import styled from 'styled-components'

import { MediaQuery } from './media-query'

const CONTENTBODY = styled.div`
  margin: 0px auto;
  height: 100%;
  display: ${
    props => !!props.flex ? 'flex' : 'block'
  };
  align-items: ${
    props => !!props.vCenter ? 'center' : 'unset'
  };
  justify-content: space-between;
  flex-direction: ${
    props => !!props.row ? 'row' : 'column'
  };

  ${
    MediaQuery.mobileV`
      width: 100%;
    `
  }

  ${
    MediaQuery.desktop`
      width: 1366px;
      flex-direction: row;
    `
  }
`

export {
  CONTENTBODY
}

export {
  MediaQuery
} from './media-query'
