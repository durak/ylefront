import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Container, Segment, Menu } from 'semantic-ui-react'

import { itemsGetMore, itemsNewQuery } from '../reducers/itemReducer'
import { categoriesGet } from '../reducers/categoryReducer'
import ItemList from './Item/ItemList'
import CategoryList from './Category/CategoryList'

class App extends Component {

  componentDidMount() {
    //this.props.itemsGet(0)
    this.props.itemsNewQuery()
    this.props.categoriesGet()
  }

  handleClick = () => {
    this.props.itemsGetMore()
  }

  render() {
    return (
      <Router>
        <Container>

          
          <Menu inverted fixed="left" vertical style={{ width: '250px', overflowY: 'scroll' }}>

            <Menu.Item>regular item </Menu.Item>
            <Menu as={Menu.Item}>
              <Menu.Item><span> EKAA </span><span> TOKAA </span></Menu.Item>
              <Menu.Item link as={Link} to="/">Programs</Menu.Item>
              <Menu.Item link as={Link} to="/categories">Categories</Menu.Item>
              <Menu.Item link>Asetukset</Menu.Item>
              <Menu.Item link>Suosikits</Menu.Item>
            
            </Menu>
            

            
              <CategoryList />
            
          </Menu>

          <div style={{ marginLeft: '250px' }}>

            <div className="menu">
              <Link to="/">Programs</Link>&nbsp;
            <Link to="/categories">Categories</Link>
            </div>

            <Segment vertical floated="right">
              <div className="content">
                <Route exact path="/" render={() => <ItemList />} />
                <Route exact path="/categories" render={() => <CategoryList />} />
              </div>
            </Segment>

            <div>
              <button onClick={this.handleClick}>More</button>
            </div>

          </div>


        </Container>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(
  mapStateToProps,
  { itemsGetMore, itemsNewQuery, categoriesGet }
)(App)
