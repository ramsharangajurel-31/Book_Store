import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
    instock: '',
    image :'',
  });

  const handleChange = (event) => {
    const { name, value, files, type } = event.target;

    if (type === 'file') {
      setProduct({
        ...product,
        [name]: files,
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( "Product Added Successfully", product);
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("instock", product.instock);
    if (product.image) {
      formData.append("image", product.image);
    }
    try {
      const response = axios.post(
        "http://localhost:5000/api/product/addproduct",
        formData,
        {
          headers: {
            "auth-token": "1234560 "
          }
        }
      )
      console.log(response.data);
       if (response) {
        alert("Product Added Successfully");
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    }
      

    
  };

  return (
    <div className="container">
      <div>
        <h5>Add Product</h5>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">

              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" name="title" value={product.title} onChange={handleChange} className="form-control" id="title" />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" name="description" value={product.description} onChange={handleChange} className="form-control" id="description" />
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" name="price" value={product.price} onChange={handleChange} className="form-control" id="price" />
              </div>

              <div className="mb-3">
                <label htmlFor="instock" className="form-label">Instock</label>
                <input type="number" name="instock" value={product.instock} onChange={handleChange} className="form-control" id="instock" />
              </div>

              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input type="file" name="image" multiple onChange={handleChange} className="form-control" id="image" />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
