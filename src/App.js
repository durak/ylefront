import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { Container, Segment, Icon } from 'semantic-ui-react'

import { itemsGetMore, itemsNewQuery } from './reducers/itemReducer'
import { categoriesGet } from './reducers/categoryReducer'
import ItemList from './components/ItemList'

import Sidemenu from './components/Sidemenu'

class App extends Component {

  componentDidMount() {    
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

          <Sidemenu />
          

          <Segment style={{ marginLeft: '250px' }}>



            <Segment vertical padded>              
                <Route exact path="/" render={() => <ItemList />} />
                <Route exact path="/categories" render={() => null} />              
            </Segment>

            <Segment vertical >
              <Icon link name="angle double down" onClick={this.handleClick} />              
            </Segment>

          </Segment>


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




{/* <div className="menu">
<Link to="/">Programs</Link>&nbsp;
<Link to="/categories">Categories</Link>
</div>
 */}


{/* <Segment vertical floated="right">
<div className="content">
  <Route exact path="/" render={() => <ItemList />} />
  <Route exact path="/categories" render={() => null} />
</div>
</Segment> */}