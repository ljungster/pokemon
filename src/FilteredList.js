import React, { Component } from 'react'
import DisplayList from './DisplayList'
import Aggregator from './Aggregator'
import Navigation from './Navigation'

export default class FilteredList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartContents: [],
      type: 'All',
      size: 'All',
      sort: 'Select',
      weightTitle: 'Select',
      totalWeight: 0,
    }
  }

  clickAddToCart = (info) => {
    if (this.state.cartContents.length > 5) {
      alert('You may only have up to 6 pokemon in your team')
    } else {
      if (this.state.cartContents.includes(info)) {
        alert('You may only select one of each pokemon for your team')
      } else {
        this.setState({
          cartContents: [...this.state.cartContents, info],
          totalWeight: this.state.totalWeight + info.weight,
        })
      }
    }
  }

  clickRemoveFromCart = (info) => {
    if (this.state.cartContents.includes(info)) {
      var checkInArray = (item) => {
        return item !== info
      }
      this.setState({
        cartContents: this.state.cartContents.filter(checkInArray),
        totalWeight: this.state.totalWeight - info.weight,
      })
    }
  }

  onSelectFilterSize = (event) => {
    this.setState({
      size: event,
    })
  }

  onSelectSort = (event) => {
    this.setState({
      sort: event,
      weightTitle: event,
    })
  }

  onSelectFilterType = (event) => {
    this.setState({
      type: event,
    })
  }

  sortBySize = (item) => {
    const array_to_sort = item
    if (this.state.sort === 'Select') {
      array_to_sort.sort(function (a, b) {
        return 0
      })
    } else if (this.state.sort === 'Smallest to Largest') {
      array_to_sort.sort(function (a, b) {
        return a.weight - b.weight
      })
    } else if (this.state.sort === 'Largest to Smallest') {
      array_to_sort.sort(function (a, b) {
        return b.weight - a.weight
      })
    }
    return array_to_sort
  }

  matchesFilterSize = (item) => {
    if (this.state.size === 'All') {
      return true
    } else if (this.state.size === 'Small') {
      if (item.size === 'Small') {
        return true
      }
    } else if (this.state.size === 'Medium') {
      if (item.size === 'Medium') {
        return true
      }
    } else if (this.state.size === 'Large') {
      if (item.size === 'Large') {
        return true
      }
    } else {
      return false
    }
  }

  matchesFilterType = (item) => {
    if (this.state.type === 'All') {
      return true
    } else if (this.state.type === 'Grass') {
      if (item.types[0].type.name === 'grass') {
        return true
      }
    } else if (this.state.type === 'Water') {
      if (item.types[0].type.name === 'water') {
        return true
      }
    } else if (this.state.type === 'Fire') {
      if (item.types[0].type.name === 'fire') {
        return true
      }
    } else if (this.state.type === 'Normal') {
      if (item.types[0].type.name === 'normal') {
        return true
      }
    } else if (this.state.type === 'Bug') {
      if (item.types[0].type.name === 'bug') {
        return true
      }
    } else {
      return false
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="cards-container">
          <div className="navigation-spacing">
            <Navigation
              className="navigation"
              type={this.state.type}
              onSelectFilterSize={this.onSelectFilterSize}
              onSelectFilterType={this.onSelectFilterType}
              onSelectSort={this.onSelectSort}
              size={this.state.size}
              weightTitle={this.state.weightTitle}
            />
          </div>
          <DisplayList
            className="display-list"
            inCart={false}
            handleClick={this.clickAddToCart}
            list={this.sortBySize(
              this.props.list
                .filter(this.matchesFilterSize)
                .filter(this.matchesFilterType)
            )}
          />
        </div>
        <div className="cart-container">
          <Aggregator
            inCart={true}
            list={this.state.cartContents}
            handleClick={this.clickRemoveFromCart}
            totalWeight={this.state.totalWeight}
          />
        </div>
      </div>
    )
  }
}
