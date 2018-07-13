import React from 'react'
import { connect } from 'react-redux'

const ItemList = ({ items }) => {
  items.forEach((n) => console.log(n.image.id))
  const item = (n) => {
    return (
      <li key={n.id}>
        <p>{n.title}</p>
        <p>{n.description}</p>
        <p>{n.originalTitle}</p>
        <img src={`http://images.cdn.yle.fi/image/upload/w_120,h_120,c_fit/${n.image.id}.jpg`} alt="kuva" />        
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