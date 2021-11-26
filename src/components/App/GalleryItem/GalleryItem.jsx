import React, {useState} from 'react';

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
            key={gallery.id}
            src={gallery.path}
            />
    }else {
        return <div
            onClick={imageSwitch}>
            {gallery.description}
            </div>
    }
}

return(
<>
    
        <div>
        {displayImage()}
        </div>
         <button onClick={likeClicks}>💜 it!</button>
         <div>{gallery.likes}  Clicks for this picture!</div>
   
</>
)
};
export default GalleryItem;