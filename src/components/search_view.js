import React, { Component } from 'react';

import SearchBar from '../containers/search_city';

export default class SearchView extends Component {

  render() {
    return (
      <div className='startwrap'>
        <img className='delijnback' src='/assets/img/delijn_logo_BW.png'/>
        <img className='startpaginaimg' src='/assets/img/startpagina.jpg'/>
        <img className='delijnfront' src='/assets/img/delijn_logo_color.png'/>

        <div className='introtitle'>
            <h1>Betaal</h1>
            <h1>uw biljet</h1>
            <h1>met uw gsm</h1>
            <p>Sms DL naar 4884</p>
        </div>
        <SearchBar />
      </div>
    );
  }
}
