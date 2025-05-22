// src/services/productService.js

// Reemplaza esta URL con la URL de tu endpoint de productos del backend
const API_URL =  `${import.meta.env.VITE_BASE_URL}/products`; // Ejemplo, ajusta el puerto y la ruta

export const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      // Si el servidor responde con un error (ej: 404, 500)
      const errorData = await response.json().catch(() => ({ message: response.statusText }));
      throw new Error(`Error ${response.status}: ${errorData.message || 'No se pudo obtener la data'}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en getProducts:', error);
    // Re-lanzar el error para que el componente lo maneje
    throw error;
  }
};

export const addProduct = async (product) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: response.statusText }));
      throw new Error(`Error ${response.status}: ${errorData.message || 'No se pudo agregar el producto'}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en addProduct:', error);
    throw error;
  }
};

// Podrías añadir más funciones aquí (getProductById, createProduct, etc.)