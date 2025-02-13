const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
const cors = require('cors');
app.use(cors({ origin: 'https://nextscape-frontend.onrender.com' }));

mongoose.connect("mongodb+srv://navinv:9788665770@cluster0.27dbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

// Ensure upload directory exists
const uploadDir = path.resolve(__dirname, "upload/images");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log("Created upload directory:", uploadDir);
}

// Multer storage for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `image_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|webp/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extname && mimeType) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: fileFilter,
});

// Serve images correctly
app.use("/images", express.static(uploadDir));

// Image upload route
app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        console.log("File uploaded:", req.file.filename);
        const image_url = `https://nextscape-backend.onrender.com/images/${req.file.filename}`;
        return res.json({ success: true, image_url });
    } else {
        console.log("Image upload failed");
        return res.status(400).json({ success: false, message: "Image upload failed" });
    }
});

// Email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'navinv.22cse@kongu.edu',
        pass: '9788665770',
    }
});

// Send email route
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;
    console.log('Received email data:', { to, subject });

    const mailOptionsUser = {
        from: 'navinv.22cse@kongu.edu',
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptionsUser, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, message: 'Error sending email', error });
        }
        console.log('Email sent successfully:', info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    });
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
    DealerName: String,
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
        id,
        image: req.body.image,
        DealerName: req.body.DealerName,
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
    res.json({ success: true, name: req.body.DealerName });
});

app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Product removed:", req.body.id);
    res.json({ success: true, id: req.body.id });
});

// Get All Products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("Fetched all products");
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
