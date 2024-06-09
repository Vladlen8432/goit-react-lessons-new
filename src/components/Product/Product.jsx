import css from './Product.module.css';

export const Product = ({
  title,
  price,
  imageURL,
  discount,
  handleDeleteProduct,
  id,
  openModal,
}) => {
  const productBg = discount ? '#00b300' : '#d9d9d9';

  const productStyles = {
    backgroundColor: productBg,
  };

  return (
    <div className={css.product} style={productStyles}>
      <img
        className={css.productImg}
        src={imageURL}
        alt="Tacos With Lime"
        width="640"
      />
      <h2>{title}</h2>
      {discount && <h3 className={css.discountBage}>Discount: {discount}$</h3>}
      <p>{price}$</p>
      <button className={css.productAddToCardBtn} type="button">
        Add to cart
      </button>

      <button
        onClick={() => openModal({ title, price, discount })}
        className={css.productAddToCardBtn}
        type="button"
      >
        See the details
      </button>

      <button
        onClick={() => handleDeleteProduct(id)}
        className={css.productAddToCardBtn}
        type="button"
      >
        &times;
      </button>
    </div>
  );
};
