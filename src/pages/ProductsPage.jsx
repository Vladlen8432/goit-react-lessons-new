import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { Product } from '../components/Product/Product';
import Section from '../components/Section/Section';
import ProductForm from '../components/ProductForm/ProductForm';
import Modal from '../components/Modal/Modal';
import { deleteProduct, addProduct } from '../redux/products/products.reduser';
import css from '../components/App.module.css';

const ProductsPage = () => {
  const dispatch = useDispatch();

  const isOpenModal = useSelector(state => state.modal.isOpenModal);
  const products = useSelector(state => state.productsStore.products);

  const handleDeleteProduct = productId => {
    dispatch(deleteProduct(productId));
  };

  const handleAddProduct = productData => {
    const hasDuplicates = products.some(
      product => product.title === productData.title
    );

    if (hasDuplicates) {
      alert(`Oops, product with title '${productData.title}' already exist`);
      return;
    }

    const finalProduct = {
      ...productData,
      id: nanoid(),
    };

    dispatch(addProduct(finalProduct));
  };

  const sortedProducts = [...products].sort((a, b) => b.discount - a.discount);

  return (
    <div>
      <Section>
        <h1>LOGO</h1>
      </Section>

      <Section title="Add product form">
        <ProductForm handleAddProduct={handleAddProduct} />
      </Section>

      <Section title="Product list">
        <div className={css.productList}>
          {sortedProducts.map(product => {
            return (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                discount={product.discount}
                imageURL={product.imageURL}
                handleDeleteProduct={handleDeleteProduct}
              />
            );
          })}
        </div>
      </Section>

      {isOpenModal && <Modal />}
    </div>
  );
};

export default ProductsPage;
