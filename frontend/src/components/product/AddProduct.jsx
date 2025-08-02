import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const initialState = {
    title: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    author: '',
    image: null,
  };

  const [product, setProduct] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === 'file') {
      setProduct((prev) => ({
        ...prev,
        [name]: files,
      }));
    } else {
      setProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append('title', product.title.trim());
    formData.append('description', product.description.trim());
    formData.append('price', Number(product.price));
    formData.append('stock', Number(product.stock)); // Fixed field name
    formData.append('category', product.category.trim());
    formData.append('author', product.author.trim());

    if (product.image && product.image.length > 0) {
      formData.append('image', product.image[0]);
    }

    console.group('FormData Preview');
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    console.groupEnd();

    try {
      const { data, status } = await axios.post(
        'http://localhost:5000/api/products/books',
        formData,
        {
          headers: {
            'auth-token': localStorage.getItem('auth-token') || '',
          },
          validateStatus: (s) => s < 500, // handle 4xx in catch
        }
      );

      if (status === 200 || status === 201) {
        alert('Product Added Successfully');
        setProduct(initialState); // reset form
      } else if (status === 401) {
        // Handle 401 errors by redirecting to login
        localStorage.removeItem('auth-token');
        alert('Session expired. Please log in again.');
        window.location.href = '/login'; // Use window.location for full page redirect
        return;
      } else {
        const msg =
          data?.errors?.map((err) => err.msg || err.message).join('\n') ||
          'Validation failed';
        console.error('Validation errors', data);
        alert(msg);
      }
    } catch (err) {
      // Handle 401 errors by redirecting to login
      if (err.response && err.response.status === 401) {
        localStorage.removeItem('auth-token');
        alert('Session expired. Please log in again.');
        window.location.href = '/login'; // Use window.location for full page redirect
        return;
      }
      console.error('Unexpected error', err);
      alert('Unexpected error occurred. See console.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div>
        <h5>Add Product</h5>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                  className="form-control"
                  id="title"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input
                  type="text"
                  name="author"
                  value={product.author}
                  onChange={handleChange}
                  className="form-control"
                  id="author"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input
                  type="text"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  className="form-control"
                  id="description"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className="form-control"
                  id="price"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="stock" className="form-label">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                  className="form-control"
                  id="stock"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="form-control"
                  id="category"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="form-control"
                  id="image"
                  accept="image/*"
                />
              </div>

              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
