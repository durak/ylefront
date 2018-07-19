import React from 'react'
import { Menu, Image } from 'semantic-ui-react'
import areenaLogo from '../yle-areena-white_V.svg'


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

      
      <Menu.Item>
      <Image as={Menu.Item} src={areenaLogo} centered size="tiny" href={`https://areena.yle.fi/`} target="blank" rel="noopener noreferrer" />      
      </Menu.Item>
      
    </Menu>
  )
}

export default Sidemenu