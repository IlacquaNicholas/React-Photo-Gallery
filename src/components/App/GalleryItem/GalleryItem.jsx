import React, {useState} from 'react';
import './GalleryItem.css';

function GalleryItem({ gallery, addLikes}){
const [showImage, setShowImage] = useState (true)

const likeClicks = () =>{
    addLikes(gallery.id)
}

const imageSwitch = ()=>{
    //The ! is for the showImage is either true or false when switching back and forth.
    setShowImage(!showImage)
}
//function that showsImage or the image description
//onClick
const displayImage = ()=>{
    if (showImage){
        return <img
            onClick={imageSwitch}
            className="img-size"
            key={gallery.id}
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
        {displayImage()}
        </div>
         <button onClick={likeClicks}>💜 it!</button>
        <div className="Clicks-text">{gallery.likes}  💜 for this picture!</div>
   
</div>
)
};
export default GalleryItem;