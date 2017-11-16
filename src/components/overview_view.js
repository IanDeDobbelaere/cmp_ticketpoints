import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import axios from 'axios';


class OverviewView extends Component {
  componentDiDMount() {
    this.props.fetchSalePoints();
  }

  render(){
    console.log(this.props.Salepoints)
    return(
      <div>
      Overview View
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.Salepoints };
}

export default connect(null, { fetchSalePoints })(OverviewView);
