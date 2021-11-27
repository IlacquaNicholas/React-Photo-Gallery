import GalleryItem from "../GalleryItem/GalleryItem";
//This GalleryList is what we called in the return on the App.jsx component. 
//Also we are passing 2 parameters here "galleryList and addLikes" 
function GalleryList({ galleryList, addLikes}){
        return(
        <div> 
           
            <>
            {/* .Map is like a for loop. We are looping through our gallery.data.js array
            We are also passing the "gallery and addLike props" again and passing it on to the GalleryItem component.
            The key helps with pin pointing out where the ID of the object is and will stop us from getting a little red error on the DOM console.  
            */}
                {galleryList.map((gallery) =>{
                    return <GalleryItem 
                    key = {gallery.id}
                    gallery={gallery}
                    addLikes={addLikes}
                    />
               })}
               

            </>
        </div>
        )

    }
    export default GalleryList;