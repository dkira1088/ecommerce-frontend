import React from 'react';
import ProductList from './components/ProductList';
import './App.css'; // Para estilos globales de la app
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Tienda Online</h1>
        {/* Aquí podrías añadir un Navbar en el futuro */}
      </header>
      <main>

        <AddProduct />|
        <ProductList />
      </main>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Mi E-commerce. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;