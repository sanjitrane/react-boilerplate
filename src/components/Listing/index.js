import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Listing extends Component {

  
  constructor(props){
    super(props)
  }
  
  componentDidMount() {
  
  }


  render() {

    return(
      <div className="container">
        <h1>Listing page</h1>
      </div>
    );
  }
};

const mapStateToProps = state => state
export default connect(mapStateToProps)(Listing);