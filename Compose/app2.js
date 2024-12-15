// Required Dependencies
const express = require('express');
const mongoose = require('mongoose'); // Using MongoDB for database
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Mongoose Schema and Model
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isBorrowed: { type: Boolean, default: false },
});

const Book = mongoose.model('Book', bookSchema);

// API Endpoints

// Add a Book
app.post('/books', async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = new Book({ title, author });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Error adding book' });
  }
});

// Borrow a Book
app.patch('/books/:id/borrow', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });

    if (book.isBorrowed) {
      return res.status(400).json({ error: 'Book is already borrowed' });
    }

    book.isBorrowed = true;
    await book.save();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error borrowing book' });
  }
});

// Return a Book
app.patch('/books/:id/return', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });

    if (!book.isBorrowed) {
      return res.status(400).json({ error: 'Book is not borrowed' });
    }

    book.isBorrowed = false;
    await book.save();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error returning book' });
  }
});

// View All Available Books
app.get('/books', async (req, res) => {
  try {
    const availableBooks = await Book.find({ isBorrowed: false });
    res.status(200).json(availableBooks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching books' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
