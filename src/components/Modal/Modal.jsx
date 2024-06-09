import { Component } from 'react';
import { StyledModal } from './Styled';

export default class Modal extends Component {
  state = {
    counter: 1,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'auto';
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Modal has succesfully been updated!');
  }

  handleIncrementProduct = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <StyledModal onClick={this.handleOverlayClick}>
        <div className="modal">
          <button onClick={this.props.closeModal} className="closeBtn">
            &times;
          </button>
          <h2>Product details</h2>
          <div>
            <h3>Title: {this.props.modalData.title}</h3>
            <p>Price: {this.props.modalData.price}$</p>
            <p>Discount: {this.props.modalData.discount}$</p>
            <button onClick={this.handleIncrementProduct}>
              Add product: {this.state.counter}
            </button>
          </div>
        </div>
      </StyledModal>
    );
  }
}
