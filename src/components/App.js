import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Container, Segment, Menu, Icon } from 'semantic-ui-react'

import { itemsGetMore, itemsNewQuery } from '../reducers/itemReducer'
import { categoriesGet } from '../reducers/categoryReducer'
import ItemList from './ItemList'
import CategoryListContainer from './Category/CategoryListContainer'
import Sidemenu from './Sidemenu'

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

            
            <Menu as={Menu.Item}>   
              <Menu.Header>AREENATON</Menu.Header>           
              <Menu.Item link as={Link} to="/">Ohjelmat</Menu.Item>              
              <Menu.Item link>Suosikit</Menu.Item>
              <Menu.Item link>Asetukset</Menu.Item>                        
            </Menu>
            

            
              <CategoryListContainer />
            
          </Menu>

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