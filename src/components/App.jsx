import HomePage from 'pages/HomePage';
import PostDetails from 'pages/PostDetails';
import PostsPage from 'pages/PostsPage';
import { ProductsPage } from 'pages/ProductsPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:postId/*" element={<PostDetails />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

// import { useContext, useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';

// import { Product } from './Product/Product';
// import { productData } from './Product/ProductData';
// import Section from './Section/Section';
// import ProductForm from './ProductForm/ProductForm';
// import css from './App.module.css';
// import Modal from './Modal/Modal';
// import { ModalContext } from 'context/ModalContext';

// export const App = () => {
//   const [products, setProducts] = useState(() => {
//     const stringifiedProducts = localStorage.getItem('product');
//     const parsedProducts = JSON.parse(stringifiedProducts) ?? productData;

//     return parsedProducts;
//   });

//   const { isOpenModal } = useContext(ModalContext);

//   useEffect(() => {
//     const stringifiedProducts = JSON.stringify(products);
//     localStorage.setItem('products', stringifiedProducts);
//   }, [products]);

//   const handleDeleteProduct = productId => {
//     setProducts(products.filter(product => product.id !== productId));
//   };

//   const handleAddProduct = productData => {
//     const hasDuplicates = products.some(
//       product => product.title === productData.title
//     );

//     if (hasDuplicates) {
//       alert(`Oops, product with title '${productData.title}' already exist`);
//       return;
//     }

//     const finalProduct = {
//       ...productData,
//       id: nanoid(),
//     };

//     setProducts([...products, finalProduct]);
//   };

//   const sortedProducts = [...products].sort((a, b) => b.discount - a.discount);

//   return (
//     <div>
//       <Section>
//         <h1>LOGO</h1>
//       </Section>

//       <Section title="Add product form">
//         <ProductForm handleAddProduct={handleAddProduct} />
//       </Section>

//       <Section title="Product list">
//         <div className={css.productList}>
//           {sortedProducts.map(product => {
//             return (
//               <Product
//                 key={product.id}
//                 id={product.id}
//                 title={product.title}
//                 price={product.price}
//                 discount={product.discount}
//                 imageURL={product.imageURL}
//                 handleDeleteProduct={handleDeleteProduct}
//               />
//             );
//           })}
//         </div>
//       </Section>

//       {isOpenModal && <Modal />}
//     </div>
//   );
// };
