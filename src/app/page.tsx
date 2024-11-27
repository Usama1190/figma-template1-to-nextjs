'use client'

import { useEffect, useState } from 'react';
import { Product } from './types/product';
import Navbar from './components/Navbar';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get('/api/products').then((response) => setProducts(response.data));
    }, []);

    return (
        <>
            <Navbar />
            <div>
                <h1>Our Products</h1>
                <div>
                    {products.map((product) => (
                        <div key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
