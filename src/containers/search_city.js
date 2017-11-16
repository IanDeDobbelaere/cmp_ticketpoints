import React, { Component } from 'react';
import { Router, Route, history, withRouter} from 'react-router-dom';

class SearchBar extends Component {

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
    this.props.push(`overview?city=${this.state.term}`)
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
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Zoeken</button>
        </span>
      </form>
    );
  }
}

export default withRouter(SearchBar)
