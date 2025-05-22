import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import { getProducts } from '../../services/productService'; // Crearemos este servicio
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error("Error al obtener los productos:", err);
        setError('No se pudieron cargar los productos. Intenta más tarde.');
        setProducts([]); // Asegurarse de que no haya productos si hay error
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="loading-message">Cargando productos...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (products.length === 0) {
    return <p className="no-products-message">No hay productos disponibles en este momento.</p>;
  }

  return (
    <div className="product-list-container">
      <h2>Nuestros Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id || product.name} product={product} /> // Asume que tu backend devuelve un 'id'
        ))}
      </div>
    </div>
  );
};

export default ProductList;