import React, { Component } from 'react'

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      tests: [
        {
          testName: "Calculus Test",
          noOfQuestions: 20,
          time: '30 min'
        },
        {
          testName: "Average Test",
          noOfQuestions: 20,
          time: '30 min'
        },
        {
          testName: "Chain Rule Test",
          noOfQuestions: 20,
          time: '30 min'
        }

      ]
    }
  }


  render(){
    return (
      <div className="container mt-2">
        <h1>Tests:</h1>
        {
          this.state.tests.map((ele, index) => {
            return <TestCard key={index} data={ele} />
          })
        }
      </div>
    )
  }
  }
  
  

   export  function TestCard(props) {
    console.log(props);
  return (
    <div>
      <div className="card my-1" style={{width: "18rem" }}>
        
          <div className="card-body">
            <h5 className="card-title">{props.data.testName}</h5>
            <p className="card-text">No. of Questions:{props.data.noOfQuestions} Time:{props.data.time}</p>
            <a href="#" className="btn btn-primary">Start Now</a>
          </div>
        
      </div>
      </div>
      )
  }

