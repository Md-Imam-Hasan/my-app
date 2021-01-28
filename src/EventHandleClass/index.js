import React, { Component } from 'react'

export default class EventHandleClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      changedValue: ''
    }
  }
  handleOnChange = (e) => {
    this.setState({
      changedValue: e.target.value
    })
  }

  render() {
    const { changedValue } = this.state
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} />
        <p>{changedValue}</p>
      </div>
    )
  }
}
