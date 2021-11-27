import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, addLikes}){
        return(
        <div> 
           
            <>
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