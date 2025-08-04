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
  origin: 'http://localhost:5173',
  credentials: true,
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
