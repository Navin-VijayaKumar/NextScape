const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://navinv:9788665770@cluster0.27dbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});


// Multer storage for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload/images');  // Set the destination folder for image uploads
    },
    filename: (req, file, cb) => {
        // Use a unique filename format
        cb(null, `image_${Date.now()}${path.extname(file.originalname)}`);
    }
});

// File filter to only allow specific image formats (e.g., .png, .jpg, .jpeg)
const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extname && mimeType) {
        cb(null, true);  // Accept file
    } else {
        cb(new Error('Only image files are allowed!'), false);  // Reject file
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 },  // 2 MB file size limit
    fileFilter: fileFilter,
});

app.use("/images", express.static('upload/images'));

app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        const image_url = `http://localhost:4000/images/${req.file.filename}`;
        return res.json({ success: true, image_url });
    } else {
        return res.status(400).json({ success: false, message: "Image upload failed" });
    }
});

// Root route
app.get("/", (req, res) => {
    res.send("Express app is running");
    console.log("Express app is running");
});


// Product Schema
const productSchema = new mongoose.Schema({
    id: Number,
    image: String,
    category: String,
    litter: String,
    PhoneNumber: String,
    Email: String,
    address: String,
    state: String,
    District: String,
    Dimensions: String,
    decorationLevel: String,
    filterationType: String,
    price: String
});

const Product = mongoose.model("Product", productSchema);

// Add Product
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
        
            id: req.body.id,
            image: req.body.image,
            category: req.body.category,
            litter: req.body.litter,
            PhoneNumber: req.body.PhoneNumber,
            Email: req.body.Email,
            address: req.body.address,
            state: req.body.state,
            District: req.body.District,
            Dimensions: req.body.Dimensions,
            decorationLevel: req.body.decorationLevel,
            filterationType: req.body.filterationType,
            price: req.body.price
         
          
    });

    await product.save();
    console.log("Product saved:", product);
    res.json({ success: true, name: req.body.name });
});

// Remove Product
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Product removed:", req.body.id);
    res.json({ success: true, id: req.body.id });
});

// Get All Products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("All products are displayed from database");
    res.send(products);
});

// Start the server
app.listen(port, (e) => {
    if (!e) {
        console.log("Server is running on port:", port);
    } else {
        console.error("Error starting server:", e);
    }
});