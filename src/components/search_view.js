import React, { Component } from 'react';

import SearchBar from '../containers/search_city';

export default class SearchView extends Component {

  render() {
    return (
      <div className='startwrap'>
        <div className='statusbar'>
          <img src='/assets/img/Status_Network.svg'/>
          <img src='/assets/img/Status_Time.svg'/>
          <img src='/assets/img/Status_Battery.svg'/>
        </div>
        <div className='header'>
          <h3>Ticketpoints</h3>
          <img src='/assets/img/Lijn_logo.svg'/>
        </div>

        <img className='delijnback' src='/assets/img/Group.svg'/>
        <img className='startpaginaimg' src='/assets/img/startpagina.jpg'/>
        <img className='delijnfront' src='/assets/img/delijn_logo_color.png'/>

        <div className='introtitle'>
            <h1>Betaal</h1>
            <h1>uw biljet</h1>
            <h1>met uw gsm.</h1>
            <p>sms DL naar 4884</p>
        </div>
        <SearchBar />
      </div>
    );
  }
}
