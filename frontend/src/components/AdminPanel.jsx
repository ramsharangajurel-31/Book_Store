import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProduct from './product/AddProduct';
import EditProductModal from './product/EditProductModal';
import axios from 'axios';
import ProductContext from '../Context/ProductContext';


const AdminPanel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);
  const { allProduct } = useContext(ProductContext);

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
        allProduct(); // refresh products
      } else {
        alert('Failed to update product');
      }
    } catch (error) {
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
        allProduct(); // refresh list
      } else {
        alert('Failed to delete product');
      }
    } catch (error) {
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

  return (
    <div className="admin-panel-container" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="admin-header">
        <h1>Admin Panel</h1>
        <button
          className="logout-button"
          onClick={() => {
            localStorage.removeItem('auth-token');
            navigate('/login');
          }}
        >
          Logout
        </button>
      </div>

      <div className="admin-buttons">
        <button onClick={() => setActiveTab('add')}>Add Product</button>
        <button onClick={() => setActiveTab('edit')}>Edit Product</button>
        <button onClick={() => setActiveTab('delete')}>Delete Product</button>
      </div>

      <div className="admin-content">{renderContent()}</div>

      {modalVisible && selectProduct && (
        <EditProductModal product={selectProduct} onClose={closeEditModal} onSave={saveEdit} />
      )}
    </div>
  );
};

const ProductList = ({ onEdit }) => {
  const { state: { products }, allProduct } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      await allProduct();
      setLoading(false);
    };
    fetch();
  }, [allProduct]);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="table-responsive">
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
              <td>{product.instock}</td>
              <td>
                <button className="btn btn-primary" onClick={() => onEdit(product)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProductListWithDelete = ({ onDelete }) => {
  const { state: { products }, allProduct } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      await allProduct();
      setLoading(false);
    };
    fetch();
  }, [allProduct]);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="table-responsive">
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
              <td>{product.instock}</td>
              <td>
                <button className="btn btn-danger" onClick={() => onDelete(product)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
