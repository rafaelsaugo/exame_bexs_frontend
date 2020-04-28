import styled from 'styled-components'

import {
  COLORS
} from './../../common/helpers'

const CONTAINER = styled.i`
  svg {
    color: ${COLORS.white};
    fill: ${COLORS.white};
    width: ${props => props.width ? `${props.width}px` : 'auto'}
  }

  > img {
    width: ${props => props.width ? `${props.width}px` : 'auto'}
    height: auto;
    vertical-align: middle;
  }
`

export {
  CONTAINER
}
