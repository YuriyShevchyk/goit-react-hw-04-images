import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryUL } from './ImageGallery.styled';

export default function ImageGallery({ items, onClick }) {
  return (
    <ImageGalleryUL>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClick}
        />
      ))}
    </ImageGalleryUL>
  );
}

ImageGallery.prototype = {
  onClick : PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ), 
}