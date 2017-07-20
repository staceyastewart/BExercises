import React from 'react';
import PropTypes from 'prop-types';

class Shelter extends React.Component {
  constructor(props) {
    super(props)
    this.adoptAFriend = this.adoptAFriend.bind(this)
    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    this.setState({animals: this.props.animals})
  }

  adoptAFriend(name) {
    let friendAdopted = this.state.animals.filter((el) => {
      return el.name !== name
    })
    this.setState({animals: friendAdopted})
  }

  renderAdoptableAnimals() {
    if (this.state.animals.length !== 0) {
      return (
        <div className="ui middle aligned divided list">
          {this.state.animals.map((animal, i) =>  
            <div className="item" key={i} style={{padding: "20px"}}>
              <div className="right floated content">
                <div className="ui button" onClick={() => this.adoptAFriend(animal.name)}>
                  Adopt
                </div>
              </div>
              <div className="content">
                <div className="header"><h3>{animal.name}</h3></div>
                <div className="description">{animal.description}</div>
              </div>
            </div>
          )}
        </div>
      )
    } else {
      return (
        <div>
          No animals to adopt! Hurray!
        </div>
      )
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.roof}></div>
        <div style={styles.sign}>
          <h2 style={{color: "green"}}>HappyTails</h2>
        </div>
        <div style={styles.house}>
          {this.renderAdoptableAnimals()} 
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    width: "600px",
    margin: "0 auto",
  },
  roof: {
    width: 0,
    height: 0,
    borderLeft: "300px solid transparent",
    borderRight: "300px solid transparent",
    borderBottom: "100px solid blue",
    textAlign: "center"
  },
  sign: {
    border: "2px solid blue",
    width: "100%",
    textAlign: "center",
    padding: "20px"
  },
  house: {
    border: "2px solid blue",
    width: "100%"
  }
}

Shelter.propTypes = {
  animals: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    species: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    description: PropTypes.string
  })).isRequired
}

export default Shelter
