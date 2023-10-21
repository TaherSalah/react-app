import React, { Component } from "react";

export default class Footer extends Component {
  state = {};

  render() {
    console.log(this.props);
    let { userId, id, title, body, onSale } = this.props.proData;
    return (
      <>
        <div className="col-md-4">
          <div className="m-4 p-5  bg-dark text-white position-relative text-center">
            <h1>{userId}</h1>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <h1>{body}</h1>
            {onSale ? (
              <div className="bg-success  position-absolute top-0 end-0 mx-4">
                sale
              </div>
            ) : (
              <div className="bg-white  position-absolute top-0 end-0 mx-4">
                sale
              </div>
            )}
            <button
              onClick={() => {
              }}
              className="button  btn btn-outline-success"
            >
              +
            </button>
            <button
              onClick={() => {
              }}
              className="button  btn btn-outline-success mx-5"
            >
              delete
            </button>
          </div>
        </div>
      </>
    );
  }
}
