import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const SubCategory = ({category, filter, handleSubClick}) => {

  const c = filter(category)

  return (
    <Menu.Item key={c.id} onClick={handleSubClick(c)}>
      {c.title}
      <Icon
        name={c.status ? c.status === '+' ? "plus circle" : "minus circle" : "circle"}
        color={c.status ? c.status === '+' ? "green" : "red" : "grey"}
      />
    </Menu.Item>
  )
}

export default SubCategory