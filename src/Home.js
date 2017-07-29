import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Home extends Component{
    constructor(props) {
    super(props)
  }
    render(){
    return (
        <div>{this.props.animal}</div>
    )
    }
}
export default Home