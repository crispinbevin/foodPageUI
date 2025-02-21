import React, { useEffect, useState } from 'react';
import './App.css';
import './ViewProduct.css';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';

function ViewProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://foodpage.co.uk/v2/shop/products/1/0/0/online');
        const products = response.data.data.items;

        const selectedProduct = products.find(item => item.pID === id);

        setProduct(selectedProduct);
        if (selectedProduct) {
          console.log(`Found ${selectedProduct.name}`);
        } else {
          console.log(`ID ${id} not found`);
        }
      } catch (error) {
        toast.error('Fetch failed');
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="container-fluid prodinfo-section">
      <Navbar />
      <ToastContainer position="top-center" transition={Slide} hideProgressBar />
      <div className="container prodinfo-wrapper">
        {product === null ? (
          <h1>Loading...</h1> 
        ) : product ? (
          <>
            <div className="product-view">
              <h1>{product.name}</h1>
              <div className="product-info">
                <img src={product.photo} alt="" />
                <div className="description">
                  <span>
                    <span style={{fontSize:"1rem"}}>Description: <br /></span>
                    {product.description}
                  </span>
                  <span>Type: {product.type}</span>
                  </div>
              </div>
                <div className="price">{product.price}</div>
            </div>
          </>
        ) : (
          <h1>Product ID {id} not found</h1> 
        )}
      </div>
    </div>
  );
}

export default ViewProduct;