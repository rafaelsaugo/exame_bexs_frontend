import React from 'react'

import NavItem from './NavItem'

import {
  CONTAINER,
  ITEM,
  LINK,
  LIST
} from './styles'

function Nav(props){
  const {
    data
  } = props

  return (
    <CONTAINER>
      <LIST>
        { data && data.length && data.map(
          (item, i) => {
            const itemProps = {
              ...props
            }

            const key = `nav-item-${i}`

            return (
              <NavItem key={key} {...itemProps} />
            )}
        ) }
      </LIST>
    </CONTAINER>
  )
}

export default Nav
