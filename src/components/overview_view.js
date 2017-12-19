import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSellPoints } from '../actions';
import axios from 'axios';



class OverviewView extends Component {


  locationItem() {
    return (this.props.match.params.location);
  }


  componentDidMount() {
    const gemeente  = this.props.match.params.location;
    this.props.fetchSellPoints(gemeente);
  }

  renderSellPoints(){
    return _.map(this.props.Sellpoints, Sellpoint => {
      return (
        <Link to={`/detail?adres=${Sellpoint.adresString}&minadres=${Sellpoint.adres}&naam=${Sellpoint.naamString}`}>
          <li className="list-group-item" key={ Sellpoint.primaryKey }>
              <i className="fa fa-ticket fa-3x ticket" aria-hidden="true"></i>
              <div className="textTicketpoint">
                <h6>{ Sellpoint.naamString }</h6>
                <br/>
                <p> { Sellpoint.adres } </p>
              </div>
          </li>
        </Link>
      );
    });
  }

  render(){
    return(
      <div>
        <img className='delijnfront' src='/assets/img/delijn_logo_color.png'/>
        <img className='bg-img' src='/assets/img/delijn_logo_BW.png'/>
        <Link to="/" className='back-btn'>
          <i className="fa fa-arrow-left fa-2x arrow"></i>
          <div className="my-text">{ this.locationItem()}</div>
        </Link>
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
