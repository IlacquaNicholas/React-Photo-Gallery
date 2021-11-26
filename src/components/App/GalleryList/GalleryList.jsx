import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList}){
        return(
        <div> 
            <p>Gallery goes here</p>
            <p>
                {galleryList.map((gallery) =>{
                    return <GalleryItem 
                    key = {gallery.id}
                    gallery={gallery}
                    />
               })}

            </p>
        </div>
        )

    }
    export default GalleryList;