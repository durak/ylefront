import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { itemsGet } from '../reducers/itemReducer'
import ItemList from './Item/ItemList'

class App extends Component {

  componentDidMount() {
    this.props.itemsGet()
  }

  render() {
    return (
      <div>
        <Router>
          <ItemList />
        </Router>
      </div>
    )
  }
}



export default connect(
  null,
  { itemsGet }
)(App)
