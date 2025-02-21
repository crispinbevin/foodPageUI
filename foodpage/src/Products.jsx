import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setLoading(true)
        try {
            const response = await axios.get('https://foodpage.co.uk/v2/shop/products/1/0/0/online')
            console.log('response is ', response.data.data.items)
            setProducts(response.data.data.items)
        } catch (error) {
            console.error('Error fetching products:', error)
        } finally {
            setLoading(false)
        }
    }

    // Skeleton loader for a single product card
    const ProductCardSkeleton = () => (
        <div className="product-card">
            <div className="product-name">
                <Skeleton width={150} />
            </div>
            <div className="product-img">
                <Skeleton height={200} width={200} />
            </div>
            <Skeleton width={100} height={35} /> {/* For button */}
        </div>
    )

    // Array of skeleton loaders while loading
    const SkeletonGrid = () => (
        <>
            {[1, 2, 3, 4, 5, 6].map((index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </>
    )

    return (
        <div className="products-section">
            <Navbar />
            <div className="container products-wrapper">
                <h1>{loading ? <Skeleton width={200} /> : 'Products'}</h1>
                <div className="product-grid">
                    {loading ? (
                        <SkeletonGrid />
                    ) : (
                        products.map((product) =>
                            <div className="product-card" key={product.pID}>
                                <div className="product-name">{product.name}</div>
                                <div className="product-img">
                                    <img src={product.photo} alt="" />
                                </div>
                                <Link to={`/productpage/${product.pID}`}>
                                    <button className='std-btn'>VIEW ITEM</button>
                                </Link>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products