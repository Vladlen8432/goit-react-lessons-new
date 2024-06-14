import { useEffect, useState } from 'react';
import { StyledModal } from './Styled';

const Modal = ({ modalData, closeModal }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  useEffect(() => {
    console.log('Product counter value: ' + counter);
  }, [counter]);

  const handleIncrementProduct = () => {
    setCounter(prevState => prevState + 1);
    // setCounter(counter + 1);
  };

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <StyledModal onClick={handleOverlayClick}>
      <div className="modal">
        <button onClick={closeModal} className="closeBtn">
          &times;
        </button>
        <h2>Product details</h2>
        <div>
          <h3>Title: {modalData.title}</h3>
          <p>Price: {modalData.price}$</p>
          <p>Discount: {modalData.discount}$</p>
          <button onClick={handleIncrementProduct}>
            Add product:
            {counter}
          </button>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
