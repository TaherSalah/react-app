import React, { Component } from "react";

export default class Footer extends Component {
  state = {};
// componentWillUnmount(){
//   console.log('Footer component will unmount');
// }
  render() {
    // console.log(this.props.proData);
    // let { userId, id, title, body, onSale } = this.props.proData;
    return (
      <>
        {/* <div className="col-md-4">
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
              onClick={() => this.props.deleteItem(this.props.proData)}
              className="button my-4 btn btn-outline-success mx-5"
            >
              delete
            </button>
            <div className="col">

              <div className="row">

              <button
              onClick={() => this.props.increment(this.props.proData)}
              className="button  btn btn-outline-success"
            >
              +
            </button>
            <button
              onClick={() => this.props.decrementProd(this.props.proData)}
              className="button my-5 btn btn-outline-success"
            >
              -
            </button>
              </div>
            </div>
          </div>
          
        </div> */}
        <div className="bg-dark fixed-bottom bottom-0 end-0 ">
          <h1 className="text-white text-center">foooter</h1>
        </div>
      </>
    );
  }
}
