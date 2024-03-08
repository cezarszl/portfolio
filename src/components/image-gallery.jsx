import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const prepareImages = (project) => {
    return [
        {
            original: project.imagePath1,
            thumbnail: project.imagePath1,
            originalAlt: project.title,
            thumbnailAlt: project.title,

        },
        {
            original: project.imagePath2,
            thumbnail: project.imagePath2,
            originalAlt: project.title,
            thumbnailAlt: project.title,
        }
    ].map(image => ({
        ...image,
        originalClass: 'image-gallery-image', // Klasa dla pełnego obrazka
        thumbnailClass: 'image-gallery-thumbnail', // Klasa dla miniaturki
        originalHeight: 600, // Wysokość pełnego obrazka
        thumbnailHeight: 100, // Wysokość miniaturki
        originalWidth: 800, // Szerokość pełnego obrazka
        thumbnailWidth: 100, // Szerokość miniaturki
    }));
};

const ImageGallery = ({ project }) => {
    console.log(project);
    const galleryImages = prepareImages(project);
    console.log(galleryImages);

    return (
        <ReactImageGallery
            items={galleryImages}
            showFullscreenButton={true}
            showPlayButton={false}
            showBullets={true}
        />
    );
};

export default ImageGallery;