import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSellPoints } from '../actions';
import axios from 'axios';


class OverviewView extends Component {
  componentDiDMount() {
    this.props.fetchSellPoints();
  }

  render(){
    console.log(this.props.Sellpoints)
    return(
      <div>
      Overview View
      </div>
    );
  }
}

function mapStateToProps(state){
  return { Sellpoints: state.Sellpoints };
}

export default connect(mapStateToProps, { fetchSellPoints })(OverviewView);
