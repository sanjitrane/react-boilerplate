import React, { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends Component{
    
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className='container'>
                <h1>Detail page</h1>
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Detail);