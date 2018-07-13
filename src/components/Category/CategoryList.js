import React from 'react'
import { connect } from 'react-redux'

const CategoryList = ({ categories }) => {


  const category = (c) => {
    return (
      <ul key = {c.id}>
        <li><a href={`localhost:3003/api/items?category=${c.id}`} target="_blank" rel="noreferrer">{c.title}</a></li>      
        {c.children && c.children.map((n) => category(n))}  
      </ul>
    )
  }

  console.log(categories.tv)

  return (
    <div>
      {categories.tv.children.map((n) => category(n))}
      {categories.radio.children.map((n) => category(n))}
      {categories.analytics.children.map((n) => category(n))}
    </div>
  )


}


const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    categories: state.categories
  }
}

export default connect(
  mapStateToProps
)(CategoryList)