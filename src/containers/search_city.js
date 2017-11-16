import React, { Component } from 'react';
import { Router, Route, withRouter} from 'react-router-dom';

export default class SearchBar extends Component {

  constructor (props) {
    super(props);

    this.state = { term : ''};

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({ term : event.target.value});
  }

  onFormSubmit(event) {
    event.prefentDefault();

  }

  render(){
    return(
      <form onSubmit={onFormSubmit} className="input-group">
        <input
          placeholder="Zoek voor gemeentes..."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Zoeken</button>
        </span>
      </form>
    );
  }
}
