import React from 'react';
import Shelter from './Shelter.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div style={{margin: "0 auto", padding: "50px"}}>
          <Shelter animals={[
            {
              name: "fred", 
              species: "dog", 
              breed: "mix", 
              age: 3, 
              description: "Best dog in the world"
            },
            {
              name: "ned",
              species: "cat",
              breed: "sib",
              age: 5,
              description: "Best cat in the world"
            }
          ]} />
        </div>
      </div>
    );
  }
}

export default App;
