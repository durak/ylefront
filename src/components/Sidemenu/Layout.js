import React from 'react'
import { Menu } from 'semantic-ui-react'


const Layout = (props) => {

  return (
    <Menu inverted fixed="left" vertical style={{ width: '250px', overflowY: 'auto' }}>

      <Menu as={Menu.Item}>

        <Menu.Item link as={Link} to="/">Programs</Menu.Item>
        <Menu.Item link as={Link} to="/categories">Categories</Menu.Item>
        <Menu.Item link>Asetukset</Menu.Item>
        <Menu.Item link>Suosikits</Menu.Item>

      </Menu>


      <Menu.Item>
        <CategoryList />
      </Menu.Item>
    </Menu>
  )
}