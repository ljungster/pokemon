import React, { Component } from 'react'
import { Navbar, Button } from 'react-bootstrap'
import DisplayList from './DisplayList'

export default class Aggregator extends Component {
  onClick = () => {
    const message =
      "Your team's total weight is: " + this.props.totalWeight + ' kg'
    alert(message)
  }
  render() {
    return (
      <div className="cart">
        <h3>Current Team</h3>
        <div className="display-cart">
          <DisplayList
            handleClick={this.props.handleClick}
            inCart={this.props.inCart}
            list={this.props.list}
          />
        </div>
        <div className="start-training">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand style={{ paddingRight: '2rem' }} href="#home">
              Total Weight: {this.props.totalWeight} kg
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Button onClick={this.onClick} variant="success">
                Start Training!
              </Button>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}
