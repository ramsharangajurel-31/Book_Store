import React, { useState } from "react";

const EditProductModal = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: product.title,
    author: product.author,
    description: product.description,
    price: product.price,
    category: product.category,
    stock: product.stock,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div
        className="modal open"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "block" , color:"black" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Product</h5>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="title"
                    value={formData.title}
                    id="title"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">
                    Author
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="author"
                    value={formData.author}
                    id="author"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                    id="description"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="category"
                    value={formData.category}
                    id="category"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={handleChange}
                    name="price"
                    value={formData.price}
                    id="price"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="stock" className="form-label">
                    Stock
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={handleChange}
                    name="stock"
                    value={formData.stock}
                    id="stock"
                    aria-describedby="emailHelp"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProductModal;
