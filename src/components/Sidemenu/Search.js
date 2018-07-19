import React from 'react'
import { connect } from 'react-redux'
import { Form, Menu } from 'semantic-ui-react'

import { searchFilterChange } from '../../reducers/queryFilterReducer'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '' }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(' submit happens')
    this.props.searchFilterChange(this.state.input)
  }

  handleChange = (e) => {
    // when field is empty again automatically send new query
    // when field length > 0 show rex cross to delete search
    this.setState({ input: e.target.value })
    if (e.target.value.length === 0) {
      this.props.searchFilterChange('')
    }

  }

  render() {

    return (
      <Menu.Item>
        <Form onSubmit={this.handleSubmit} size="tiny" >
          <Form.Field>
            <input placeholder="hakusana" value={this.state.input} onChange={this.handleChange} />
          </Form.Field>
        </Form>
      </Menu.Item>
    )
  }

}

export default connect(
  null,
  { searchFilterChange }
)(Search)

