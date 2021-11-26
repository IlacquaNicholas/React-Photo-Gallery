import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, addLikes}){
        return(
        <div> 
            <p>Gallery goes here</p>
            <p>
                {galleryList.map((gallery) =>{
                    return <GalleryItem 
                    key = {gallery.id}
                    gallery={gallery}
                    addLikes={addLikes}
                    />
               })}
               

            </p>
        </div>
        )

    }
    export default GalleryList;