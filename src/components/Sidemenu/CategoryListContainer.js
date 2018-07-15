import React from 'react'
import { connect } from 'react-redux'

import CategoryList from './CategoryList'
import { categoryFilterToggle, mainCategoryFilterToggle } from '../../reducers/categoryFilterReducer'


class CategoryListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { collapsed: [] }
  }

  handleSubclick = (category) => {
    this.props.categoryFilterToggle(category)    
  }

  handleMainClick = (category) => {        
    this.props.mainCategoryFilterToggle(category)
  }


  handleMainCollapse = (category) => {
    if (category.collapsed) {
      this.setState({ collapsed: this.state.collapsed.filter(id => id !== category.id) })
      category.collapsed = undefined
    } else {
      this.setState({ collapsed: this.state.collapsed.concat(category.id) })
      category.collapsed = true
    }            
  }

  handleFiltering = (category) => {
    let categoryIsFiltered = this.props.filter.find((f) => f.id === category.id)
    if (categoryIsFiltered) category = categoryIsFiltered
    
    return category
  }

  render() {
    return (
      <CategoryList
        categories={this.props.categories}
        filter={this.handleFiltering}
        handleMainClick={this.handleMainClick}
        handleSubClick={this.handleSubclick}
        handleMainCollapse={this.handleMainCollapse}
      />
    )
  }

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
)(CategoryListContainer)