import React, {useState, useEffect} from 'react';
import * as API from '../API/Api'
import {Searchbar} from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import {Container} from './App.styled'



export default function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }

    const loadImages = async (query, page) => {
      setIsLoading(true);

      try {
        const data = await API.fetchImages(query, page);

        setItems(prevState => [...prevState, ...data.hits]);
        setTotalPages(data.totalHits);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
    };

    loadImages(query, page);
  }, [query, page]);

  const handleSearchSubmit = query => {
    setQuery(query);
    setItems([]);
    setPage(1);
    setTotalPages(0);
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const onOpenModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  const onCloseModal = () => {
    setLargeImageURL('');
  };

  return (
    <Container>
      <Searchbar onSearch={handleSearchSubmit} />
      {error && <p>Whoops, something went wrong: {error.message}</p>}

      {items.length > 0 && <ImageGallery items={items} onClick={onOpenModal} />}
      {isLoading && <Loader />}

      {page < Math.ceil(totalPages / 12) && <Button onLoadMore={onLoadMore} />}
      {largeImageURL && (
        <Modal onClose={onCloseModal} largeImageURL={largeImageURL} />
      )}
    </Container>
  );
}