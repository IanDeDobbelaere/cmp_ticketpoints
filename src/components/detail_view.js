import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSellPoints  } from '../actions';

class DetailView extends Component {

  componentDidMount() {
    const { primaryKey } = this.props.match.params;
    this.props.fetchSellPoints(primaryKey);
  }

  render(){

    const { sellpoint } = this.props;

    if (!sellpoint) {
      return <div>Loading</div>;
    }

    return(
      <div>
        <Link to="/">Back to index</Link>
        { sellpoint.naamString }
        <br/>
        <h6> { sellpoint.adres } </h6>
     </div>
    );
  }
}


function mapStateToProps({Sellpoints, ownProps}) {
  return { Sellpoint: Sellpoints[ownProps.match.params.detail] };
}

export default connect(mapStateToProps, {fetchSellPoints}) (DetailView);
