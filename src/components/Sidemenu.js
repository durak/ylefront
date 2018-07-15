import React from 'react'
import { Menu } from 'semantic-ui-react'


import Topmenu from './Sidemenu/Topmenu'
import Search from './Sidemenu/Search'
import Filtermenu from './Sidemenu/Filtermenu'
import CategoryListContainer from './Sidemenu/CategoryListContainer'


const Sidemenu = (props) => {

  const menuStyle = {
    width: '250px',
    overflowY: 'scroll',
    position: 'left'
  }

  return (
    <Menu
      inverted
      fixed={menuStyle.position}
      vertical
      style={{ width: menuStyle.width, overflowY: menuStyle.overflowY }}
    >

      <Topmenu />
      <Search />
      <Filtermenu />
      <CategoryListContainer />

    </Menu>
  )
}

export default Sidemenu