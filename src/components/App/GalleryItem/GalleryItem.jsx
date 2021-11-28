import React, {useState} from 'react';
import './GalleryItem.css';

function GalleryItem({ gallery, addLikes}){
const [showImage, setShowImage] = useState (true)

//likeClicks function is for the like button
const likeClicks = () =>{
    //addLikes function was passed over from the GalleryItem component and from App component through props 
    addLikes(gallery.id)
}
const imageSwitch = ()=>{
    //The ! is for the showImage is either true or false when switching back and forth.
    //Calling the setShowImage because we will need to set the state to change it. (Please correct me if I'm wrong here)
    setShowImage(!showImage)
}
//function that showsImage or the image description
//onClick is calling the imageSwitch function which is helping the images go back and forth from the description to the actual image
const displayImage = ()=>{
    //I believe this if else statement is called conditional rendering.
    if (showImage){
        return <img
            onClick={imageSwitch}
            className="img-size"
            key={gallery.id}
            //This is calling the "gallery which is the handoff from GalleryItem component and the App component through props.The ".path"
            //is the image src from out array of objects in the gallery.data.js
            src={gallery.path}
            />
    }else {
        return <div
            onClick={imageSwitch}
            className = "font">
            {gallery.description}
            </div>
    }
}

return(
<div className = "picture-lining">
    
        <div>
            {/* Calling the displayImage function and this is what is showing on the DOM */}
        {displayImage()}
        </div>
         <button className ="button"onClick={likeClicks}>💜 it!</button>
        <div className="Clicks-text">{gallery.likes}  💜 for this picture!</div>
   
</div>
)
};
export default GalleryItem;