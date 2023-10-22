import React, { Component } from "react";

export default class Home extends Component {
  state = {
    id: 0,
  };

  contChange = () => {
    let count = this.state.id;

    count = this.state.id++;

    this.setState({ count});
  };

  render() {
    console.log('rrrrrrrrrrrrrr')

    // console.log(this.props);
    let { name, email, phone, address, salary, gender, isMarried } =
      this.props.prods;
    return (
      <div>
        <div className="bg-danger text-white m-5 w-25">
          <h1>{name}</h1>
          <h1>{email}</h1>
          <h1>{phone}</h1>
          <h1>{address}</h1>
          <h1>{salary}</h1>
          <h1>{gender}</h1>
          <h1>{isMarried}</h1>
          <h2>{this.state.id}</h2>
          <button onClick={this.contChange}>adddddddddddddddddd</button>
        </div>
      </div>
    );
  }
}
