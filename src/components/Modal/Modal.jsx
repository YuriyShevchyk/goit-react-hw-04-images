import { useEffect } from 'react';
import { Overlay, ModalWrapp } from './Modal.styled';

const modalRoot = document.getElementById('modal-root')

export default function Modal({ largeImageURL, onClose}) {
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = element => {
      if (element.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const instance = (
    <Overlay onClick={handleBackdropClick}>
      <ModalWrapp>
        <img src={largeImageURL} alt="" />
      </ModalWrapp>
    </Overlay>
  );

  return createPortal(instance, modalRoot);
}