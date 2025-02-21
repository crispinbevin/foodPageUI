import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Products() {
    const [products, setProducts] = useState([])


    useEffect( ()=>{
        getData()
    },[])

    const getData = async () =>{
        const response = await axios.get('https://foodpage.co.uk/v2/shop/products/1/0/0/online')
        console.log('response is ',response.data.data.items);
        setProducts(response.data.data.items)
        return response
    }

    console.log(products)

  return (
      <div className="products-section">
            <Navbar />
            <div className="container products-wrapper">
                <h1>Products</h1>
                <div className="product-grid">
                    {products.map((product)=>
                        <div className="product-card" key={product.pID}>
                            <div className="product-name">{product.name}</div>
                            <div className="product-img"><img src={product.photo} alt="" /></div>
                            <Link to= {`/productpage/${product.pID}` }><button className='std-btn'>VIEW ITEM</button></Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
  )
}

export default Products