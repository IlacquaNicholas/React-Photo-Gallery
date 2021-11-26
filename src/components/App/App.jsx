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

const addLikes = (numberLike)=>{
  axios({
    method: 'PUT',
    url: `/gallery/like/${numberLike}`
  }).then ((response)=>{
    console.log('in the PUT', response);
    fetchGalleryInfo();
  }).catch((err)=>{
    console.log('In PUT error',err);
  });
};


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
        galleryList={galleryList}
        addLikes={addLikes}
        />
       

      </div>
    );
}

export default App;
