import React from 'react'
import FilteredList from './FilteredList'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      pokemon_list: [],
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            items: result['results'],
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error,
          })
        }
      )
      .then(() => {
        for (const pokemon of this.state.items) {
          fetch(pokemon.url)
            .then((res) => res.json())
            .then(
              (result) => {
                if (result.weight < 50) {
                  result.size = 'Small'
                } else if (result.weight >= 50 && result.weight < 300) {
                  result.size = 'Medium'
                } else {
                  result.size = 'Large'
                }
                this.setState({
                  pokemon_list: [...this.state.pokemon_list, result],
                })
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error,
                })
              }
            )
        }
      })
      .then(() => {
        this.setState({
          isLoaded: true,
        })
      })
  }

  render() {
    const { error, isLoaded, list, pokemon_list } = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="app">
          <h1>Pokémon Team Builder</h1>
          <FilteredList list={this.state.pokemon_list} />
        </div>
      )
    }
  }
}

export default App
