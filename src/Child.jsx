import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    console.log(this.props);
    let {proName,price,quantity,totalPrice}=this.props.proInfo;
    return (
      <div>
        <h1>{proName}</h1>
        <h1>{price}</h1>
        <h1>{quantity}</h1>
        <h1>{totalPrice}</h1>

      </div>
    )
  }
}
