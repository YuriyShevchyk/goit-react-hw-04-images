import PropTypes from 'prop-types';
import {
    ImageGalleryItemLi,
    ImageGalleryItemImage,
  } from './ImageGalleryItem.styled';
  
  export default function ImageGalleryItem({
    webformatURL,
    largeImageURL,
    tags,
    onClick,
  }) {
    return (
      <ImageGalleryItemLi>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={() => onClick(largeImageURL)}
        />
      </ImageGalleryItemLi>
    );
  }

ImageGalleryItem.prototype = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}  