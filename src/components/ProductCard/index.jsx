import React from 'react';
import './ProductCard.css'; // Crearemos este archivo para los estilos

const ProductCard = ({ product }) => {
  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="product-card">
      <img src={product.image || 'https://via.placeholder.com/150'} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${Number(product.price).toFixed(2)}</p>
        <button className="add-to-cart-button">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;