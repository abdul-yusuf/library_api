const Book = require('../models/Book');

// Add a Book
exports.addBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = new Book({ title, author });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Error adding book' });
  }
};

// Borrow a Book
exports.borrowBook = async (req, res) => {
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
};

// Return a Book
exports.returnBook = async (req, res) => {
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
};

// Get Available Books
exports.getAvailableBooks = async (req, res) => {
  try {
    const availableBooks = await Book.find({ isBorrowed: false });
    res.status(200).json(availableBooks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching books' });
  }
};
