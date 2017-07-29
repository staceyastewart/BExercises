import React from 'react';
import Shelter from './Shelter.js';
import Home from './Home.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.adoptAFriend = this.adoptAFriend.bind(this)
    this.state = {
      shelter: {
        animals: [2, 3],
        name: "Backenders"
      },
      homes: {
        1: {
          name: "happyhome",
          animals: [1]
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
        3: {
          name: "phillip",
          species: "turtle",
          breed: "snapping",
          age: 100,
          description: "Outlived all of its owners"
        }
      }
    }
  }
  passShelterAnimals(){
    return Object.keys(this.state.animals).filter(key => {
           // console.log(this.state.shelter.animals.includes(parseInt(key)))
            return this.state.shelter.animals.includes(parseInt(key))
          }).reduce((obj, key) => {
            obj[key] = this.state.animals[key];
            return obj;
          }, {})   
  }
  adoptAFriend(id) {
    let adoptableFriends = this.state.shelter.animals.filter((el) => {
      return el !== parseInt(id)
    })
    var newShelter = Object.assign({}, this.state.shelter, { animals: adoptableFriends })
    console.log(newShelter)
    this.setState({ shelter: newShelter }, function(){console.log(this.state.shelter)})
    console.log(this.state.shelter)
  }
  render() {
    return (
      <div className="App">
        <div style={{ margin: "0 auto", padding: "50px" }}>
          <Shelter animals={this.passShelterAnimals()} adoptAFriend={this.adoptAFriend} />
        </div>
        <div style={{ border:"2px solid blue", width: "200px"}}><Home animal={this.state.homes[1].animals} /></div>
      </div>
    );
  }
}

export default App;
