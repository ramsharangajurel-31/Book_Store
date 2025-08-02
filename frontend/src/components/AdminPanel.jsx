import React, { useState, useContext, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AddProduct from './product/AddProduct';
import BooksByCategory from './product/BooksByCategory';
import EditProductModal from './product/EditProductModal';
import axios from 'axios';
import ProductContext from '../Context/ProductContext';

const AdminPanel = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('auth-token');
  const [activeTab, setActiveTab] = useState(null); // null means no form shown initially
  const [modalVisible, setModalVisible] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);

  // Since we're using ProtectedRoute, we don't need to check for token here
  // But we'll keep the logout functionality

  const openEditModal = (product) => {
    setSelectProduct(product);
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setSelectProduct(null);
    setModalVisible(false);
  };

  const saveEdit = async (updateData) => {
    try {
      const authToken = localStorage.getItem('auth-token') || '';
      const response = await axios.put(
        `http://localhost:5000/api/products/books/${selectProduct._id}`,
        updateData,
        {
          headers: {
            'auth-token': authToken,
          },
        }
      );
      if (response.status === 200) {
        alert('Product updated successfully');
        closeEditModal();
        // Optionally refresh product list or update state here
      } else {
        alert('Failed to update product');
      }
    } catch (error) {
      // Handle 401 errors by redirecting to login
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('auth-token');
        alert('Session expired. Please log in again.');
        navigate('/login');
        return;
      }
      console.error('Error updating product:', error);
      alert('Error updating product');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'add':
        return <AddProduct />;
      case 'edit':
        return (
          <div>
            <h3>Edit Products</h3>
            <ProductList onEdit={openEditModal} />
          </div>
        );
      case 'delete':
        return (
          <div>
            <h3>Delete Products</h3>
            <ProductListWithDelete onDelete={deleteProduct} />
          </div>
        );
      default:
        return null;
    }
  };

  const { allProduct } = useContext(ProductContext);

  const deleteProduct = async (product) => {
    if (!window.confirm(`Are you sure you want to delete "${product.title}"?`)) {
      return;
    }
    try {
      const authToken = localStorage.getItem('auth-token') || '';
      const response = await axios.delete(
        `http://localhost:5000/api/products/books/${product._id}`,
        {
          headers: {
            'auth-token': authToken,
          },
        }
      );
      if (response.status === 200) {
        alert('Product deleted successfully');
        // Refresh product list
        allProduct();
      } else {
        alert('Failed to delete product');
      }
    } catch (error) {
      // Handle 401 errors by redirecting to login
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('auth-token');
        alert('Session expired. Please log in again.');
        navigate('/login');
        return;
      }
      console.error('Error deleting product:', error);
      alert('Error deleting product');
    }
  };

  return (
    <div className="admin-panel-container">
      <h1>Admin Panel</h1>
      <div className="admin-buttons">
        <button onClick={() => setActiveTab('add')}>
          Add Product
        </button>
        <button onClick={() => setActiveTab('edit')}>
          Edit Product
        </button>
        <button onClick={() => setActiveTab('delete')}>
          Delete Product
        </button>
        <button onClick={() => {
          localStorage.removeItem('auth-token');
          navigate('/login');
        }}>
          Logout
        </button>
      </div>
      <div className="admin-content">
        {renderContent()}
      </div>
      {modalVisible && selectProduct && (
        <EditProductModal
          product={selectProduct}
          onClose={closeEditModal}
          onSave={saveEdit}
        />
      )}
    </div>
  );
};

const ProductList = ({ onEdit }) => {
  const { state: { products }, allProduct } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    allProduct();
    setLoading(false);
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product._id}>
            <td>{product.title}</td>
            <td>{product.author}</td>
            <td>{product.category}</td>
            <td>Rs.{product.price}</td>
            <td>{product.stock}</td>
            <td>
              <button className="btn btn-primary" onClick={() => onEdit(product)}>
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ProductListWithDelete = ({ onDelete }) => {
  const { state: { products }, allProduct } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    allProduct();
    setLoading(false);
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product._id}>
            <td>{product.title}</td>
            <td>{product.author}</td>
            <td>{product.category}</td>
            <td>Rs.{product.price}</td>
            <td>{product.stock}</td>
            <td>
              <button className="btn btn-danger" onClick={() => onDelete(product)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminPanel;
