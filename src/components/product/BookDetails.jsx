import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductContext from '../../Context/ProductContext';
import { getImageUrl } from '../../utils/imageUtils';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state: { products } } = useContext(ProductContext);

  if (!products) return <p>Loading...</p>;

  // For MongoDB ObjectId comparison, we need to convert to string
  const book = products.find(b => b._id === id || b._id.toString() === id);

  if (!book) return <p className="book-not-found">Book not found</p>;

  return (
    <div className="book-details-wrapper">
      <button className="back-button" onClick={() => navigate(`/books/${book.category}`)}>
        &larr; Back
      </button>

      <div className="book-details-container">
        <div className="book-details-image">
          <img src={getImageUrl(book.image)} alt={book.title} />
        </div>

        <div className="book-details-content">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Category:</strong> {book.category}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Price:</strong> Rs.{book.price}</p>
          <p><strong>In Stock:</strong> {book.stock}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
