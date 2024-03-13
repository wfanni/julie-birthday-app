

import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import images from './images.js';



export default function Gallery() {
    return (
        <div>
            <ReactImageGallery items={images} infitnite={false} showThumbnails={false} srcSet={images}/>
        </div>
    )
}