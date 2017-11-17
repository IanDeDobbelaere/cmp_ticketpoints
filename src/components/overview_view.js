import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSellPoints } from '../actions';
import axios from 'axios';


class OverviewView extends Component {
  componentDidMount() {
    this.props.fetchSellPoints();
  }

  renderSellPoints(){
    return _.map(this.props.Sellpoints, Sellpoint => {
      return (
        <li className="list-group-item" key={ Sellpoint.primaryKey }>
          <Link to={`/overview/${Sellpoint.gemeente}/${Sellpoint.primaryKey}`}>
            { Sellpoint.naamString }
            <br/>
            <h6> { Sellpoint.adres } </h6>
          </Link>
        </li>
      );
    });
  }

  render(){
    console.log(this.props.Sellpoints)
    return(
      <div>
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
