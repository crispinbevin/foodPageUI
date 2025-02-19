import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

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
        <div className="container products-wrapper">
            <h1>Products</h1>
            <div className="product-grid">
                {products.map((product)=>
                    <div className="product-card" key={product.pID}>
                        <div className="product-name">{product.name}</div>
                        <div className="product-img"><img src={product.photo} alt="" /></div>
                        <div className="product-id"><strong>pID:</strong> {product.pID}</div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Products