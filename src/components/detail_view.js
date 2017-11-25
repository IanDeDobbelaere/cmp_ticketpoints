import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSellPoints } from '../actions';
import axios from 'axios';



class DetailView extends Component {

  render(){
    const { search } = this.props.location;
    const parsed = queryString.parse(search);

    return(
      <div>
        <h4>Adres: { parsed.adres } </h4>
        <h4>Adres: { parsed.minadres } </h4>
        <h4>Naam: { parsed.naam } </h4>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { Sellpoints: state.Sellpoints };
}

export default connect(mapStateToProps, { fetchSellPoints })(DetailView);
