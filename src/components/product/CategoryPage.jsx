import React from "react";
import { useNavigate } from "react-router-dom";


const categories = [
  { name: "Fiction", image: "/fiction.png" },
  { name: "Science", image: "/science.png" },
  { name: "History", image: "/history.png" },
  { name: "Biography", image: "/biography.png" },
];

const CategoryPage = () => {
  const navigate = useNavigate();

  const handleViewBooks = (category) => {
    navigate(`/books/${category}`);
  };

  return (
    <div className="container category-page my-5">
      <h2 className="text-center mb-4 fw-bold">Browse by Categories</h2>
      <div className="row g-4">
        {categories.map((cat, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="category-card shadow-sm">
              <img src={cat.image} alt={cat.name} className="category-img" />
              <div className="category-body">
                <h5 className="category-title">{cat.name}</h5>
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => handleViewBooks(cat.name)}
                >
                  View Books
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
