import { useContext, useEffect, useRef, useState } from 'react';
import { StyledModal } from './Styled';
import { ModalContext } from 'context/ModalContext';

const Modal = () => {
  const { modalData, closeModal } = useContext(ModalContext);
  const [counter, setCounter] = useState(1);
  const inputRef = useRef();
  const firstRenderRef = useRef(true);

  console.log('inputRef:', inputRef.current);

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

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  });

  const hanleButtonClick = () => {
    console.log('inputRef:', inputRef.current);
    // const inputWidth = getComputedStyle(inputRef.current).width;
    // console.log('inputWidth:', inputWidth);
    inputRef.current.focus();
  };

  useEffect(() => {
    if (firstRenderRef.current === false) {
      console.log('counter changed', counter);
    }

    return () => {
      firstRenderRef.current = false;
    };
  }, [counter]);

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
        </div>
        <input ref={inputRef} type="text" />
        <button onClick={hanleButtonClick}>Select input</button>
        <br />
        <button onClick={() => setCounter(prev => prev + 1)}>
          Product count: {counter}
        </button>
      </div>
    </StyledModal>
  );
};

export default Modal;
