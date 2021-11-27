import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import GalleryList from './GalleryList/GalleryList';



function App() {
const [galleryList, setGalleryList] = useState ([]);

//We use the useEffect function to stop the DOM from reloading constantly. 
useEffect(()=>{
  fetchGalleryInfo();
}, []);
//This function is fetching the data from our array with all the images and description coming from out gallery.data.js file. 
const fetchGalleryInfo = ()=>{
  //axios is like $.ajax in jquery. Axios is getting the info from our server and the server is grabbing the info in the gallery.data.js file.
  axios({
    method:'GET',
    url: '/gallery'
  }).then((response)=>{
    console.log('got a response', response);
    //We are setting the state with the setGalleryList function from up above (I believe we need to set the sate to change the state or something like that.)
    setGalleryList(response.data)
  }).catch((error)=>{
    console.log('Get/gallery failed', error);
  });
};
// This function is adding the likes  when we click on the likes button on the DOM. The Parameter is allowing  the likes to stay on the DOM
//while refreshing the DOM.
const addLikes = (likeCount)=>{
  //Axios is grabbing the data from our route server and the "router.put" which is grabbing the likesCount in our gallery.data.js module file. 
  axios({
    method: 'PUT',
    url: `/gallery/like/${likeCount}`
  }).then ((response)=>{
    console.log('in the PUT', response);
    //Calling the fetchGalleryInfo function because once we click on the like button it will post it and then we will need to GET the info again. (I think thats why but I could be wrong)
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
        {/* Calling the GalleryList and giving it the prop to hand the galleyList for the Images and the addLikes for the likeCount.
        This is being handed off to the GalleryList.jsx component and then from there its being handed off again to the GalleryItem.jsx component. 
        */}
        <GalleryList 
        galleryList={galleryList}
        addLikes={addLikes}
        />
       

      </div>
    );
}

export default App;
