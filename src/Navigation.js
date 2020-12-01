import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap'

export default class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      size_activeKey: 'All',
      type_activeKey: 'All',
    }
  }

  render() {
    const onSelectType = (eventKey) => {
      this.setState({
        type_activeKey: eventKey,
      })
    }

    const onSelectSize = (eventKey) => {
      this.setState({
        size_activeKey: eventKey,
      })
    }

    return (
      <div>
        <Navbar bg="light" expand="lg">
          <p className="text-center mt-4 mb-4">Size:</p>
          <Nav onSelect={onSelectSize} activeKey={this.state.size_activeKey}>
            <Nav.Item>
              <NavLink eventKey="All" onSelect={this.props.onSelectFilterSize}>
                All
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                eventKey="Small"
                onSelect={this.props.onSelectFilterSize}
              >
                Small
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                eventKey="Medium"
                onSelect={this.props.onSelectFilterSize}
              >
                Medium
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                eventKey="Large"
                onSelect={this.props.onSelectFilterSize}
              >
                Large
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar>
        {/* Nav for type */}
        <Navbar bg="light" expand="lg">
          <p className="text-center mt-4 mb-4">Type:</p>
          <Nav onSelect={onSelectType} activeKey={this.state.type_activeKey}>
            <Nav.Item>
              <NavLink eventKey="All" onSelect={this.props.onSelectFilterType}>
                All
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                eventKey="Grass"
                onSelect={this.props.onSelectFilterType}
              >
                Grass
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                eventKey="Water"
                onSelect={this.props.onSelectFilterType}
              >
                Water
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink eventKey="Fire" onSelect={this.props.onSelectFilterType}>
                Fire
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                eventKey="Normal"
                onSelect={this.props.onSelectFilterType}
              >
                Normal
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink eventKey="Bug" onSelect={this.props.onSelectFilterType}>
                Bug
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar>
        {/* Sort Function */}
        <Navbar bg="light" expand="lg">
          <p className="text-center mt-4 mb-4">Sort by Size:</p>
          <NavDropdown title={this.props.weightTitle} id="basic-nav-dropdown">
            <NavDropdown.Item
              eventKey="Select"
              onSelect={this.props.onSelectSort}
            >
              Select
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="Smallest to Largest"
              onSelect={this.props.onSelectSort}
            >
              Smallest to Largest
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="Largest to Smallest"
              onSelect={this.props.onSelectSort}
            >
              Largest to Smallest
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </div>
    )
  }
}
