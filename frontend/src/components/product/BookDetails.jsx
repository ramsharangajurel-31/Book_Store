import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductContext from '../../Context/ProductContext';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state: { products }, dispatch } = useContext(ProductContext);

  const bookId = Number(id);
  const book = products.find((b) => b._id === bookId);

  if (!book) return <p className="book-not-found">Book not found</p>;

  return (
    <div className="book-details-container">
      <button className="back-button" onClick={() => navigate(`/books/${book.category}`)}>
        &larr; Back
      </button>
      <div className="book-details-image">
        <img src={book.image} alt={book.title} />
      </div>
      <div className="book-details-content">
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Price:</strong> Rs.{book.price.toFixed(2)}</p>
        <p><strong>In Stock:</strong> {book.stock}</p>
        <button
          className="book-details-button"
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: book })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default BookDetails;
