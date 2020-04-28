import React from 'react'

import {
  ITEM,
  LINK
} from './styles'

function NavItem(props) {
  const {
    label,
    url
  } = props

  return (
    <ITEM>
      <LINK href={url}>
        {
          label
        }
      </LINK>
    </ITEM>
  )
}

export default NavItem
