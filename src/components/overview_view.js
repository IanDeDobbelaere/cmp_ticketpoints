import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSellPoints } from '../actions';
import axios from 'axios';


class OverviewView extends Component {
  componentDidMount() {
    const gemeente  = this.props.match.params.location;
    console.log(gemeente)
    this.props.fetchSellPoints(gemeente);
  }

  renderSellPoints(){
    return _.map(this.props.Sellpoints, Sellpoint => {
      return (
        <li className="list-group-item" key={ Sellpoint.primaryKey }>
            { Sellpoint.naamString }
            <br/>
            <h6> { Sellpoint.adres } </h6>
        </li>
      );
    });
  }

  render(){
    return(
      <div>
        <Link to="/">Back to index</Link>
        <ul className="list-group">
          {this.renderSellPoints()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { Sellpoints: state.Sellpoints };
}

export default connect(mapStateToProps, { fetchSellPoints })(OverviewView);
