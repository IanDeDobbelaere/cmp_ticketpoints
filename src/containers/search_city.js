import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    event.preventDefault
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Zoek voor gemeentes..."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <Link to={`/overview/${this.state.term}`} className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Zoeken</button>
        </Link>
      </form>
    );
  }
}
