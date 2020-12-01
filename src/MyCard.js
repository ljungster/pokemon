import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class MyCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '12rem' }}>
          <Card.Img variant="top" src={this.props.info.sprites.front_default} />
          <Card.Body>
            <Card.Title>
              {this.props.info.name.charAt(0).toUpperCase() +
                this.props.info.name.slice(1)}
            </Card.Title>
            <Card.Text>Size: {this.props.info.size} </Card.Text>
            <Card.Text>
              Type:{' '}
              {this.props.info.types[0].type.name.charAt(0).toUpperCase() +
                this.props.info.types[0].type.name.slice(1)}
            </Card.Text>
            <Card.Text>Weight: {this.props.info.weight} kg</Card.Text>
            {this.props.inCart ? (
              <Button
                onClick={() => this.props.handleClick(this.props.info)}
                variant="danger"
              >
                Remove
              </Button>
            ) : (
              <Button
                onClick={() => this.props.handleClick(this.props.info)}
                variant="primary"
              >
                Add to Team
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
    )
  }
}
