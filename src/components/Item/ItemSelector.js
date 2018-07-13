import React from 'react'
import { connect } from 'react-redux'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }


  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    <form onSubmit={this.handleSubmit}>
      <h1>Make your choice</h1>

      <label>search</label>
      <input        
        type="text"
        name="search"
        value={title}
        onChange={handleChange}
        error={!valid.title}
      />



      <label>author</label>
      <input
        fluid
        type="text"
        name="author"
        value={author}
        onChange={handleChange}
        error={!valid.author}
      />


      <label>url</label>
      <input
        fluid
        type="text"
        name="url"
        value={url}
        onChange={handleChange}
        error={!valid.url}
      />




      <button type="submit">submit</Button>

    </form>
  }
}