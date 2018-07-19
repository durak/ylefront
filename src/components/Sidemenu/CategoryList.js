import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const CategoryList = ({ categories, filter, isCollapsed, handleMainClick, handleSubClick, handleMainCollapse }) => {

  const mainCategory = (category) => {
    const c = filter(category)
    const collapsed = isCollapsed(category)
    
    return (
      <Menu.Item key={c.id}>

        <Icon
          name={c.status === '-' ? "toggle off" : "toggle on"}
          size="small"
          color={c.status === '-' ? "red" : "green"}
          onClick={() => handleMainClick(c)}
        />

        <Menu.Header>
          <a onClick={() => handleMainCollapse(c)}>{c.title}</a>
        </Menu.Header>

        <Menu.Menu>
          {collapsed !== true && c.children && c.children.map((n) => subCategory(n))}
        </Menu.Menu>

      </Menu.Item>
    )
  }

  const subCategory = (category) => {
    if (category.children) return mainCategory(category)
    
    const c = filter(category)

    return (
      <Menu.Item key={c.id} onClick={() => handleSubClick(c)}>
        {c.title}
        <Icon
          name={c.status ? c.status === '+' ? "plus circle" : "minus circle" : "circle"}
          color={c.status ? c.status === '+' ? "green" : "red" : "grey"}
        />

      </Menu.Item>
    )
  }

  return (
    categories.tv.children.map((n) => {
      return mainCategory(n)
    })
  )
}

export default CategoryList