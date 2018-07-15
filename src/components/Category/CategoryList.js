import React from 'react'
import { connect } from 'react-redux'
import { Menu, Icon } from 'semantic-ui-react'
import { categoryFilterToggle, mainCategoryFilterToggle } from '../../reducers/categoryFilterReducer'

const CategoryList = ({ categories, filter, categoryFilterToggle, mainCategoryFilterToggle }) => {

  const handleclick = (category) => () => {
    categoryFilterToggle(category)
  }

  const handleMainClick = (category) => () => {
    console.log('happens')
    mainCategoryFilterToggle(category)
  }



  const mainCategory = (c) => {

    let isFiltered = filter.find((f) => f.id === c.id)
    if (isFiltered) c = isFiltered

    return (
      <Menu.Item key={c.id}>
        <Icon name="toggle off" size="small" color="green" />
        <Menu.Header disabled={true} onClick={handleMainClick(c)}>
          <a>{c.title}</a>
        </Menu.Header>
        
        <Menu.Menu>          

          {c.status !== '+' && c.children && c.children.map((n) => subCategory(n))}

        </Menu.Menu>
      </Menu.Item>
    )
  }

  const subCategory = (c) => {

    let isFiltered = filter.find((f) => f.id === c.id)
    if (isFiltered) c = isFiltered

    return (
      <Menu.Item key={c.id} onClick={handleclick(c)}>
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

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    filter: state.categoryFilter
  }
}

export default connect(
  mapStateToProps,
  { categoryFilterToggle, mainCategoryFilterToggle }
)(CategoryList)
