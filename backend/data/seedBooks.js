const mongoose = require('mongoose');
const Product = require('../model/Product');
const connectDB = require('../config/db');


const seedBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A classic novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.",
    price: 1500,
    stock: 10,
    category: "Fiction",
    image: "/uploads/fiction1.png",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel about racial injustice in the Deep South.",
    price: 1700,
    stock: 8,
    category: "Fiction",
    image: "/uploads/fiction2.png",
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    description: "An accessible overview of cosmology, discussing the nature of the universe and black holes.",
    price: 2000,
    stock: 5,
    category: "Science",
    image: "/uploads/science1.png",
  },
  {
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    description: "An introduction to evolutionary biology.",
    price: 1800,
    stock: 6,
    category: "Science",
    image: "/uploads/science2.png",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description: "A thought-provoking exploration of human history from the Stone Age to the 21st century.",
    price: 1850,
    stock: 7,
    category: "History",
    image: "/uploads/history1.png",
  },
  {
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    description: "A study of the factors that shaped human history.",
    price: 1675,
    stock: 9,
    category: "History",
    image: "/uploads/history2.png",
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    description: "The poignant diary of Anne Frank, a Jewish girl hiding during World War II.",
    price: 1275,
    stock: 8,
    category: "Biography",
    image: "/uploads/biography1.png",
  },
  {
    title: "Long Walk to Freedom",
    author: "Nelson Mandela",
    description: "The autobiography of Nelson Mandela.",
    price: 1450,
    stock: 5,
    category: "Biography",
    image: "/uploads/biography2.png",
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    description: "A memoir by the former First Lady of the United States.",
    price: 1600,
    stock: 6,
    category: "Biography",
    image: "/uploads/biography3.png",
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about totalitarianism and surveillance.",
    price: 1350,
    stock: 9,
    category: "Fiction",
    image: "/uploads/fiction3.png",
  },
  {
    title: "The Elegant Universe",
    author: "Brian Greene",
    description: "A book on string theory and the nature of the universe.",
    price: 1950,
    stock: 7,
    category: "Science",
    image: "/uploads/science3.png",
  },
  {
    title: "The Wright Brothers",
    author: "David McCullough",
    description: "Biography of the Wright brothers and the invention of the airplane.",
    price: 1500,
    stock: 6,
    category: "History",
    image: "/uploads/history3.png",
  },
];


const seedDB = async () => {
  try {
    await connectDB();
    await Product.deleteMany({});
    await Product.insertMany(seedBooks);
    console.log('Database seeded with books including correct image filenames');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDB();
