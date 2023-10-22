import React, { Component } from "react";
import Footer from "../Footer/Footer";
export default class About extends Component {
  state = {
    data: [
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: true,
      },
      {
        userId: 2,
        id: 2,
        title: "reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: false,
      },
      {
        userId: 3,
        id: 3,
        title: "excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: true,
      },
      {
        userId: 4,
        id: 4,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: true,
      },
      {
        userId: 4,
        id: 5,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: true,
      },
      {
        userId: 4,
        id: 6,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: true,
      },
      {
        userId: 4,
        id: 7,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: true,
      },
      {
        userId: 4,
        id: 8,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: false,
      },
      {
        userId: 4,
        id: 9,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: true,
      },
      {
        userId: 4,
        id: 10,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: true,
      },
      {
        userId: 4,
        id: 11,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: false,
      },
      {
        userId: 4,
        id: 12,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: false,
      },
      {
        userId: 4,
        id: 13,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: true,
      },
      {
        userId: 4,
        id: 14,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: false,
      },
      {
        userId: 4,
        id: 15,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: true,
      },
      {
        userId: 4,
        id: 16,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
      },
      {
        userId: 4,
        id: 17,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
      },
      {
        userId: 4,
        id: 18,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: false,
      },
      {
        userId: 4,
        id: 19,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
        onSale: false,
      },
      {
        userId: 4,
        id: 20,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
      },
      {
        userId: 4,
        id: 21,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
      },
      {
        userId: 4,
        id: 22,
        title: "repelli excptio reprehenderit",
        body: "quiaeprehenderit molestem sunt rem eveniet architecto",
      },
    ],
  };
  deleteItem = (id) => {

    let products =this.state.data;

    let index =products.indexOf(id);

    products =products.splice(index,2)
    this.setState({products})
    console.log(index);
  }


  increment =(currentProd)=>{

    let products=this.state.data;

currentProd.userId ++;


this.setState({products})
    
    console.log(currentProd);

    

    
  }

  decrementProd=(currentProd)=>{

  let  products=this.state.data;

    currentProd.userId--;

    this.setState({products})

    console.log('decrementProd')
  }
  

  render() {
    return (
      <> 
        <div className="bg-danger ">
          <div className="row">
            {this.state.data.map((data) => (
              <Footer
                key={data.id}
                proData={data}
                deleteItem={this.deleteItem}
                increment={this.increment}
                decrementProd={this.decrementProd}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
