const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/db");
const multer = require('multer');
const app = express();
connectDB();

dotenv.config();

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Allow requests from the React frontend
  credentials: true,
  optionsSuccessStatus: 200
};

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

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

