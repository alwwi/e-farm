const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
const filePath = path.join(__dirname, 'public', 'DB', 'DBsementara.json');

app.use(cors({
    origin: 'http://localhost:3000', // Sesuaikan dengan origin frontend Anda
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type',
}));

const PORT = process.env.PORT || 5000;

app.post('/api/addToWishlist', (req, res) => {
    const newItem = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error reading file' });
        }

        const db = JSON.parse(data);
        db.wishlist.push(newItem);

        fs.writeFile(filePath, JSON.stringify(db, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Error writing file' });
            }

            res.json({ success: true, message: 'Item added to wishlist' });
        });
    });
});

app.post('/api/addToCart', (req, res) => {
    const { id, quantity } = req.body;
    const filePath = path.join(__dirname, 'public', 'DB', 'DBsementara.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error reading file' });
        }

        const db = JSON.parse(data);
        const cartItem = db.cart.find(item => item.id === id);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            const product = db.product.find(item => item.id === id);
            if (product) {
                db.cart.push({ ...product, quantity });
            }
        }

        fs.writeFile(filePath, JSON.stringify(db, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Error writing file' });
            }

            res.json({ success: true, message: 'Item added to cart' });
        });
    });
});

app.post('/api/updateCart', (req, res) => {
    const { id, quantity } = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log("Error reading file", err);
            res.status(500).send('server error');
            return
        }
        const db = JSON.parse(data);
        const cartItem = db.cart.find(item => item.id === id);
        if (!cartItem) return res.status(404).send('Item not found in cart');

            
                cartItem.quantity = quantity;
            
        

        fs.writeFile(filePath, JSON.stringify(db, null, 2), "utf8", (err) => {
            if (err) {
                console.log("Error writing file", err);
                res.status(500).send('server error');
                return
            }

            res.status(200).send('Cart updated');
        });
    });
});

app.post('/api/removeFromCart', (req, res) => {
    const { id } = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log("Error reading file", err);
            res.status(500).send('server error');
            return
        }
        const db = JSON.parse(data);
        db.cart = db.cart.filter(item => item.id !== id);

        fs.writeFile(filePath, JSON.stringify(db, null, 2), "utf8", (err) => {
            if (err) {
                console.log("Error writing file", err);
                res.status(500).send('server error');
                return
            }

            res.status(200).send('Item removed from cart');
        });
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
