import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const MainCategory = ({ category, filter, handleMainClick, handleMainCollapse }) => {

  const c = filter(category)

  return (
    <Menu.Item key={c.id}>

      <Icon name="toggle off" size="small" color="green" onClick={handleMainClick(c)} />
      <Menu.Header disabled={true}>
        <a onClick={handleMainCollapse(c)}>{c.title}</a>
      </Menu.Header>

      <Menu.Menu>
        {c.collapsed === false && c.children && c.children.map((n) =>
          subCategory(n)
        )}
      </Menu.Menu>

    </Menu.Item>
  )
}

export default MainCategory