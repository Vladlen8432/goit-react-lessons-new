import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { Product } from '../components/Product/Product';
import Section from '../components/Section/Section';
import ProductForm from '../components/ProductForm/ProductForm';
import Modal from '../components/Modal/Modal';
import { deleteProduct, addProduct } from '../redux/products/products.reduser';
import Filter from 'components/Filter/Filter';
import css from '../components/App.module.css';
import {
  selectProducts,
  // selectProductsFilterTerm,
  seletFilteredProducts,
} from '../redux/products/products.selectors';
import { selectIsOpenModal } from '../redux/modal/modal.selectors';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const isOpenModal = useSelector(selectIsOpenModal);
  const products = useSelector(selectProducts);
  const filteredProducts = useSelector(seletFilteredProducts);
  // const filterTerm = useSelector(selectProductsFilterTerm);

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

  // const filteredProducts = useMemo(() => {
  //   for (let i = 0; i < 1_000_000_000; i++) {}
  //   return products.filter(
  //     ({ price, title }) =>
  //       title.toLowerCase().includes(filterTerm.toLowerCase().trim()) ||
  //       price.toString().includes(filterTerm.toLowerCase().trim())
  //   );
  // }, [filterTerm, products]);

  const sortedProducts = [...filteredProducts].sort(
    (a, b) => b.discount - a.discount
  );

  return (
    <div>
      <Section>
        <h1>LOGO</h1>
      </Section>

      <Section title="Add product form">
        <ProductForm handleAddProduct={handleAddProduct} />
      </Section>

      <Section title="Filter product">
        <Filter />
      </Section>
      <button onClick={() => setCounter(prev => prev + 1)}>
        Counter: {counter}
      </button>

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
