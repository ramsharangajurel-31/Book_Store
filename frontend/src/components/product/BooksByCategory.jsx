import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductContext from '../../Context/ProductContext';
import { getImageUrl } from '../../utils/imageUtils';

const BooksByCategory = ({ categoryParam }) => {
  const category = categoryParam || useParams().category;
  const navigate = useNavigate();
  const { state: { cart, products }, dispatch, allProduct } = useContext(ProductContext);

  useEffect(() => {
    allProduct();
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/book/${id}`);
  };

  const filteredBooks = products.filter(book => book.category === category);

  return (
    <div className="books-category-container">
      <h2 className="books-category-heading">{category} Books</h2>
      <div className="books-category-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((item) => (
            <div className="books-category-card" key={item._id}>
              <img
                src={getImageUrl(item.image)}
                alt={item.title}
                className="books-category-img"
              />
              <div className="books-category-info">
                <div className="title-content">
                  <h3 className="books-category-title">{item.title}</h3>
                </div>
                <p><strong>Author:</strong> {item.author}</p>
                <p><strong>Description:</strong> {item.description}</p>
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Price:</strong> Rs.{item.price}</p>
                <p><strong>Stock:</strong> {item.stock}</p>
                <div className="books-category-buttons">
                  <button
                    className="btn-view"
                    onClick={() => handleViewDetails(item._id)}
                  >
                    View Details
                  </button>
                  {cart.some(p => p._id === item._id) ? (
                    <button
                      className="btn-remove"
                      onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className="btn-cart"
                      onClick={() => dispatch({ type: "ADD_TO_CART", payload: {...item, qty: 1} })}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-books-message">No books available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default BooksByCategory;
