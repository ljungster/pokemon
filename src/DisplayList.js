import React, { Component } from 'react'
import MyCard from './MyCard'

export default class DisplayList extends Component {
  render() {
    const renderCard = (info) => {
      return (
        <MyCard
          handleClick={this.props.handleClick}
          inCart={this.props.inCart}
          info={info}
          key={info.name}
        />
      )
    }
    if (this.props.list.length > 0) {
      return <div className="container">{this.props.list.map(renderCard)}</div>
    } else {
      return (
        <div>
          {this.props.inCart ? (
            <p>Add pokemon to your team!</p>
          ) : (
            <p>There were no results that matched your search...</p>
          )}
        </div>
      )
    }
  }
}
