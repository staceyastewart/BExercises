import React from 'react';
import Shelter from './Shelter.js';
import Home from './Home.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.adoptAFriend = this.adoptAFriend.bind(this)
    this.state = {
      shelter: {
        animals:[1,2],
        name:"Backenders",
      },
      homes:{
        1:{
          name:"happyhome",
          animals:[3]
        }
      },
      animals: {
              1: {
                name: "fred", 
                species: "dog", 
                breed: "mix", 
                age: 3, 
                description: "Best dog in the world"
                },
              2: {
                name: "vincent",
                species: "cat",
                breed: "sib",
                age: 5,
                description: "Meows constantly"
              },
              3:{
                name:"phillip",
                species: "turtle",
                breed:"snapping",
                age:100,
                description:"outlived all of its owners"
              }
            }
    }
  }
  adoptAFriend(id) {
    console.log(id)
    let friendAdopted = this.state.shelter.animals.filter((el) =>{
      return el.id !== id
    })

    var newShelter = Object.assign({}, this.state.shelter, {animals:friendAdopted})
    // let newShelter = this.state.shelter
    // newShelter.animals = friendAdopted
    this.setState({shelter: newShelter})
    // let friendAdopted = this.state.animals.filter((el) => {
    //   return el.id !== id
    // })
    // this.setState({animals: friendAdopted})
  }
  render() {
    return (
      <div className="App">
        <div style={{margin: "0 auto", padding: "50px"}}>
          <Shelter animals={this.state.shelter.animals} adoptAFriend={this.adoptAFriend} />
        </div>
      </div>
    );
  }
}

export default App;
