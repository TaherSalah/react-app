import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    state={
        products:{
            proName:'samasong',
            price:1000,
            quantity:2,
            totalPrice:2000

        }
    }
  render() {
    return (
      <div>
      <Child proInfo={this.state.products}/>

      </div>
    )
  }
}
