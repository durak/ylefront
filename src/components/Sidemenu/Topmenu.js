import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Topmenu = () => {

  return (
    <Menu as={Menu.Item}>
      <Menu.Header>AREENATON</Menu.Header>
      <Menu.Item link as={Link} to="/">Ohjelmat</Menu.Item>
      <Menu.Item link>Suosikit</Menu.Item>
      <Menu.Item link>Asetukset</Menu.Item>
    </Menu>
  )
}

export default Topmenu