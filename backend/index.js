const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/db");
const multer = require('multer');

dotenv.config();   // Load environment variables first!

const app = express();

connectDB();       // Connect to MongoDB

// CORS config with auth-token allowed
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://yourdomain.com',
        'https://www.yourdomain.com',
        'https://sprightly-hamster-8a2709.netlify.app',
        'https://astounding-pithivier-1fa540.netlify.app',
         'https://minionlinebookstore.netlify.app',
      ]
    : [
        'http://localhost:5173',
        'http://localhost:3000',
        'http://127.0.0.1:5173'
      ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'auth-token'], // Added 'auth-token'
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.get('/contact', (req, res) => {
  res.send('This is contact page');
});

// Import your routes
app.use("/api/auth", require("./routes/Auth"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/products", require("./routes/product"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
