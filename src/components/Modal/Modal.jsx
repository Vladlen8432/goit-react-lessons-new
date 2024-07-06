import { useEffect, useState } from 'react';
import { StyledModal } from './Styled';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modal.reducer';
import { selectModalData } from '../../redux/modal/modal.selectors';

const Modal = () => {
  const modalData = useSelector(selectModalData);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };

  return (
    <StyledModal onClick={handleOverlayClick}>
      <div className="modal">
        <button onClick={() => dispatch(closeModal())} className="closeBtn">
          &times;
        </button>
        <h2>Product details</h2>
        <div>
          <h3>Title: {modalData.title}</h3>
          <p>Price: {modalData.price}$</p>
          <p>Discount: {modalData.discount}$</p>
        </div>
        <br />
        <button onClick={() => setCounter(prev => prev + 1)}>
          Product count: {counter}
        </button>
      </div>
    </StyledModal>
  );
};

export default Modal;
