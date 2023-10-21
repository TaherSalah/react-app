import React, { Component } from "react";
import Home from "./../Home/Home";

export default class Contacts extends Component {
  state = {
    products: [
      {
        name: "taher salah",
        email: "gmail",
        phone: 1234567890,
        address: "syria damascus",
        salary: 20000,
        gender: "male",
        isMarried: false,
      },
      {
        name: "taher",
        email: "gmail",
        phone: 123654,
        address: "syria",
        salary: 20000,
        gender: "male",
        isMarried: false,
      },
      {
        name: "tahedddr",
        email: "gmail",
        phone: 123654,
        address: "syria",
        salary: 20000,
        gender: "male",
        isMarried: false,
      },
      {
        name: "tahddder",
        email: "gmail",
        phone: 123654,
        address: "syria",
        salary: 20000,
        gender: "male",
        isMarried: false,
      },
      {
        name: "d",
        email: "gmail",
        phone: 123654,
        address: "syria",
        salary: 20000,
        gender: "male",
        isMarried: false,
      },
      {
        name: "fggv",
        email: "gmail",
        phone: 123654,
        address: "syria",
        salary: 20000,
        gender: "male",
        isMarried: false,
      },
      {
        name: "ffsf",
        email: "gmail",
        phone: 123654,
        address: "syria",
        salary: 20000,
        gender: "male",
        isMarried: false,
      },
      {
        name: "ffsf",
        email: "gmail",
        phone: 123654,
        address: "syria",
        salary: 20000,
        gender: "male",
        isMarried: false,
      },
      {
        name: "s",
        email: "gmail",
        phone: 123654,
        address: "syria",
        salary: 20000,
        gender: "male",
        isMarried: false,
      },
      {
        name: "fd",
        email: "gmail",
        phone: 123654,
        address: "syria",
        salary: 20000,
        gender: "male",
        isMarried: false,
      },
    ],
  };

  render() {
    return (
      <div>
        <div className="bg-dark">
          <div className="row">
            {this.state.products.map((product) => (
              <Home prods={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
