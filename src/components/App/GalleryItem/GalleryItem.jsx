import React, {useState} from 'react';

function GalleryItem({gallery}){
const [showImage, setShowImage] = useState (true)

const imageSwitch = ()=>{
    setShowImage(!showImage)
}

const displayImage = ()=>{
    if (showImage){
        return <img
            onClick={imageSwitch}
            key={gallery.id}
            src={gallery.path}
            />
    }else {
        return <p onClick={imageSwitch}>
                  {gallery.description}
               </p>
    }
}

return(
<>
    <div>
        {displayImage()}
    </div>
</>
)
};
export default GalleryItem;