import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import GalleryList from './GalleryList/GalleryList';
import GalleryItem from './GalleryItem/GalleryItem';


function App() {
const [galleryList, setGalleryList] = useState ([]);
useEffect(()=>{
  fetchGalleryInfo();
}, []);

const fetchGalleryInfo = ()=>{
  axios({
    method:'GET',
    url: '/gallery'
  }).then((response)=>{
    console.log('got a response', response);
    setGalleryList(response.data)
  }).catch((error)=>{
    console.log('Get/gallery failed', error);
  });
};


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryList}/>
        {/* <GalleryItem/> */}

      </div>
    );
}

export default App;
