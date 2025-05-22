import React, { useState } from 'react';
import './AddProduct.css'; // You can add some basic styling here
import { addProduct } from '../../services/productService';

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    image: '', // This will store the URL or base64 if you handle file uploads
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the product data to your backend API
    console.log('Product to be added:', product);
    alert('Product added! Check console for data.');
    // Optionally, reset the form after submission
    addProduct({
      ...product
    });
  };

  return (
    <div className="AddProduct">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="url" // Use type="url" for image URLs
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="e.g., https://example.com/product-image.jpg"
          />
          {product.image && (
            <div className="image-preview">
              <p>Image Preview:</p>
              <img src={product.image} alt="Product Preview" style={{ maxWidth: '200px', height: 'auto' }} />
            </div>
          )}
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;