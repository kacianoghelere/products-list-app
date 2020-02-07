import React, { Component } from 'react'
import swal from 'sweetalert'

export default class ProductsSelector extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: '',
    }
  }

  changeText(e) {
    let text = e.target.value

    this.setState({ text })

    swal.setActionValue(text)
  }

  render() {
    return (
      <input
        value={this.state.text}
        onChange={this.changeText.bind(this)}
      />
    )
  }
}
