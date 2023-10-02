import React from 'react'
import './App.css'
import './videodata.css';
import GalleryData from './GalleryData';

function App() {
  return(
    <div>
      <header>
      <a>All</a>
      <a>Music</a>
      <a>Home</a>
      <a>Videos</a>
      <a>Playlist</a>
      </header>

      <div className="logo-item">
        <img className="logo" width="90px"  src="https://yt3.googleusercontent.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s176-c-k-c0x00ffffff-no-rj-mo"/>
        <h2 className="data">Ashish Chanchlani Vines
        <p>@ashishchanchlanivines</p></h2>
        </div>

        <GalleryData/>
      </div>
  )
}

export default App;
