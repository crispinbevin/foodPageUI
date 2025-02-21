import React, { useEffect, useState } from 'react';
import './App.css';
import './ViewProduct.css';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Don't forget this import

function ViewProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  const ProductSkeleton = () => (
    <div className="product-view">
      <h1><Skeleton width={300} /></h1>
      <div className="product-info">
        <Skeleton height={300} width={300} /> {/* For image */}
        <div className="description">
          <span>
            <span style={{fontSize:"1rem"}}><Skeleton width={100} /></span>
            <Skeleton count={3} width={500}/> {/* For description */}
          </span>
          <span><Skeleton width={150} /></span> {/* For type */}
        </div>
      </div>
      <div className="price">
        <Skeleton width={80} />
      </div>
    </div>
  );

  return (
    <div className="container-fluid prodinfo-section">
      <Navbar />
      <ToastContainer position="top-center" transition={Slide} hideProgressBar />
      <div className="container prodinfo-wrapper">
        {loading ? (
          <ProductSkeleton />
        ) : product ? (
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
        ) : (
          <h1>Product ID {id} not found</h1>
        )}
      </div>
    </div>
  );
}

export default ViewProduct;