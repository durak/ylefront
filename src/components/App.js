import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { itemsGet } from '../reducers/itemReducer'
import { categoriesGet } from '../reducers/categoryReducer'
import ItemList from './Item/ItemList'
import CategoryList from './Category/CategoryList'

class App extends Component {

  componentDidMount() {
    this.props.itemsGet(0)
    this.props.categoriesGet()
  }

  handleClick = () => {
    this.props.itemsGet(this.props.items.length)
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <div className="menu">
              <Link to="/">Programs</Link>&nbsp;
            <Link to="/categories">Categories</Link>
            </div>

            <div className="content">
              <Route exact path="/" render={() => <ItemList />} />
              <Route exact path="/categories" render={() => <CategoryList />} />
            </div>

            <div>
              <button onClick={this.handleClick}>More</button>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {items: state.items}
}

export default connect(
  mapStateToProps,
  { itemsGet, categoriesGet }
)(App)
