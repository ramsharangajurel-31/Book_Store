const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/db");
const multer = require('multer');

dotenv.config();   // Load environment variables first!

const app = express();

connectDB();       // Then connect to MongoDB

// CORS config
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com', 'https://www.yourdomain.com', 'https://steady-torte-ea9b10.netlify.app', 'https://astounding-pithivier-1fa540.netlify.app'] 
    : ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200
};

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Make sure folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

app.use(cors(corsOptions));
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

app.use("/api/auth", require("./routes/Auth"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/products", require("./routes/product"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
