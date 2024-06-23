import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { Product } from '../components/Product/Product';
// import { productData } from '../components/Product/ProductData';
import Section from '../components/Section/Section';
import ProductForm from '../components/ProductForm/ProductForm';
import Modal from '../components/Modal/Modal';
import { ModalContext } from 'context/ModalContext';
import css from '../components/App.module.css';
import { deleteProduct, addProduct } from '../redux/products/products.reduser';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { isOpenModal } = useContext(ModalContext);
  const products = useSelector(state => state.productsStore.products);
  console.log('products:', products);

  // const [products, setProducts] = useState(() => {
  //   const stringifiedProducts = localStorage.getItem('product');
  //   const parsedProducts = JSON.parse(stringifiedProducts) ?? productData;

  //   return parsedProducts;
  // });

  // useEffect(() => {
  //   const stringifiedProducts = JSON.stringify(products);
  //   localStorage.setItem('products', stringifiedProducts);
  // }, [products]);

  const handleDeleteProduct = productId => {
    dispatch(deleteProduct(productId))
    // const deleteProductAction = {
    //   type: 'products/deleteProducts',
    //   payload: productId,
    // };
    // setProducts(products.filter(product => product.id !== productId));
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

    // const addProductAction = {
    //   type: 'products/addProducts',
    //   payload: finalProduct,
    // };
    dispatch(addProduct(finalProduct));
    // setProducts([...products, finalProduct]);
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
