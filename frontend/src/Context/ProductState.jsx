import React, { useReducer, useEffect } from 'react';
import ProductContext from './ProductContext';
import { cartReducer } from './Reducer';
import fiction1 from '../assets/fiction1.png';
import fiction2 from '../assets/fiction2.png';
import fiction3 from '../assets/fiction3.png';
import science1 from '../assets/science1.png';
import science2 from '../assets/science2.png';
import science3 from '../assets/science3.png';
import history1 from '../assets/history1.png';
import history2 from '../assets/history2.png';
import history3 from '../assets/history3.png';
import biography1 from '../assets/biography1.png';
import biography2 from '../assets/biography2.png';
import biography3 from '../assets/biography3.png';

const ProductState = (props) => {
  const initialProducts = [ 
    {
      _id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A classic novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.",
      price: 1500,
      stock: 10,
      category: "Fiction",
      image: fiction1,
    },
    {
      _id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel about racial injustice in the Deep South.",
      price: 1700,
      stock: 8,
      category: "Fiction",
      image: fiction2,
    },
     {
      _id: 3,
      title: "A Brief History of Time",
      author: "Stephen Hawking", 
      description: "An accessible overview of cosmology, discussing the nature of the universe and black holes.",
      price: 2000,
      stock: 5,
      category: "Science",
      image: science1,
    },
    {
      _id: 4,
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      description: "An introduction to evolutionary biology.",
      price: 1800,
      stock: 6,
      category: "Science",
      image: science2,
    },
   
    {
      _id: 5,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description: "A thought-provoking exploration of human history from the Stone Age to the 21st century.",
      price: 1850,
      stock: 7,
      category: "History",
      image: history1,
    },
    {
      _id: 6,
      title: "Guns, Germs, and Steel",
      author: "Jared Diamond",
      description: "A study of the factors that shaped human history.",
      price: 1675,
      stock: 9,
      category: "History",
      image: history2,
    },
     {
      _id: 7,
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      description: "The poignant diary of Anne Frank, a Jewish girl hiding during World War II.",
      price: 1275,
      stock: 8,
      category: "Biography",
      image: biography1,
    },
    {
      _id: 8,
      title: "Long Walk to Freedom",
      author: "Nelson Mandela",
      description: "The autobiography of Nelson Mandela.",
      price: 1450,
      stock: 5,
      category: "Biography",
      image: biography2,
    },
    {
      _id: 9,
      title: "Becoming",
      author: "Michelle Obama",
      description: "A memoir by the former First Lady of the United States.",
      price: 1600,
      stock: 6,
      category: "Biography",
      image: biography3,
    },
  
     {
      _id: 10,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about totalitarianism and surveillance.",
      price: 1350,
      stock: 9,
      category: "Fiction",
      image: fiction3,
    },
   
   
    {
      _id: 11,
      title: "The Elegant Universe",
      author: "Brian Greene",
      description: "A book on string theory and the nature of the universe.",
      price: 1950,
      stock: 7,
      category: "Science",
      image: science3,
    },
    {
      _id: 12,
      title: "The Wright Brothers",
      author: "David McCullough",
      description: "Biography of the Wright brothers and the invention of the airplane.",
      price: 1500,
      stock: 6,
      category: "History",
      image: history3,
    },
   
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: initialProducts,
    cart: [],
  });

  useEffect(() => {
    allProduct();
  }, []);

  // Fetch all products from backend and update state
  const allProduct = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products/books', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('auth-token') || 'xyz'
        }
      });

      // Handle 401 errors
      if (response.status === 401) {
        localStorage.removeItem('auth-token');
        alert('Session expired. Please log in again.');
        window.location.href = '/login'; // Use window.location for full page redirect
        return;
      }

      const data = await response.json();
      console.log("Fetched products from backend:", data);

      dispatch({ type: 'SET_PRODUCTS', payload: data }); // <-- Dispatch to update products
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Failed to fetch products", error);
    }
  };

  // Update product on backend
  const editProduct = async (id, updateData) => {
    const { title, description, stock, price } = updateData;

    try {
      const response = await fetch(`http://localhost:5000/api/products/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ 
          title, 
          description, 
          stock, 
          price 
        }),
      });

      // Handle 401 errors
      if (response.status === 401) {
        localStorage.removeItem('auth-token');
        alert('Session expired. Please log in again.');
        window.location.href = '/login'; // Use window.location for full page redirect
        return;
      }

      const data = await response.json();
      console.log("Edited product:", data);
      allProduct(); // Refresh list after editing
    } catch (error) {
      // Handle network errors or other exceptions
      console.log("Failed to update product:", error);
    }
  };

  // Delete product from backend
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/books/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem("auth-token"),
        },
      });

      // Handle 401 errors
      if (response.status === 401) {
        localStorage.removeItem('auth-token');
        alert('Session expired. Please log in again.');
        window.location.href = '/login'; // Use window.location for full page redirect
        return;
      }

      const data = await response.json();
      console.log("Deleted product:", data);
      allProduct(); // Refresh list after delete
    } catch (error) {
      // Handle network errors or other exceptions
      console.log("Failed to delete product:", error);
    }
  };

  return (
    <ProductContext.Provider value={{
      state,
      dispatch,
      allProduct,
      editProduct,
      deleteProduct
    }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
