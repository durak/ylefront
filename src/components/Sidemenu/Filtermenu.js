import React from 'react'
import { connect } from 'react-redux'
import { Menu, Icon } from 'semantic-ui-react'

import { orderFilterToggle, typeFilterToggle } from '../../reducers/queryFilterReducer'

class Filtermenu extends React.Component {

  handleOrderChange = () => {
    this.props.orderFilterToggle()
  }

  handleTypeChange = () => {
    this.props.typeFilterToggle()
  }

  render() {
    const { order, type } = this.props
    return (
      <Menu.Item fitted="horizontally">
        <div style={{ textAlign: "center" }}>
          <span>
            <Icon
              name={order.includes("desc") ? "sort amount down" : "sort amount up"}
              size="large"
              link color="blue"
              onClick={this.handleOrderChange}
            />
          </span>
          <span>
            <a onClick={this.handleTypeChange}>{type}</a>
            </span>
        </div>

      </Menu.Item>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    order: state.queryFilter.order,
    type: state.queryFilter.type
  }
}

export default connect(
  mapStateToProps,
  { orderFilterToggle, typeFilterToggle }
)(Filtermenu)


{/* <span><Icon name="sort numeric down" size="big"/></span>
<span><Icon name="sort numeric up" size="big" /></span>
<span><Icon name="video" size="big" />      </span> */}