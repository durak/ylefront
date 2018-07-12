import React from 'react'
import { connect } from 'react-redux'

const ItemList = ({ items }) => {
  const item = (n) => {
    return (
      <li key={n.id}>
        <p>{n.title}</p>
        <p>{n.description}</p>
        <p>{n.originalTitle}</p>
      </li>
    )
  }

  return (
    <div>
      <ul>
        {items.map(i => item(i))}
      </ul>
    </div>
  )


}


const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(
  mapStateToProps
)(ItemList)