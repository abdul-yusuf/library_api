const express = require('express');
const { addBook, borrowBook, returnBook, getAvailableBooks, getAllBooks } = require('../controllers/bookController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated ID of the book
 *         title:
 *           type: string
 *           description: The title of the book
 *         author:
 *           type: string
 *           description: The author of the book
 *         isBorrowed:
 *           type: boolean
 *           description: Status if the book is borrowed
 *       example:
 *         _id: "63c9f9f90a2c4b37b4eaa728"
 *         title: "The Great Gatsby"
 *         author: "F. Scott Fitzgerald"
 *         isBorrowed: false
 */

// Add a Book
/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Add a new book to the library
 *     operationId: addBook
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Book added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Server error
 */
router.post('/', addBook);

// Borrow a Book
/**
 * @swagger
 * /api/books/{id}/borrow:
 *   patch:
 *     summary: Borrow a book by ID
 *     operationId: borrowBook
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book ID
 *     responses:
 *       200:
 *         description: Book borrowed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *       400:
 *         description: Book is already borrowed
 *       500:
 *         description: Server error
 */
router.patch('/:id/borrow', borrowBook);

// Return a Book
/**
 * @swagger
 * /api/books/{id}/return:
 *   patch:
 *     summary: Return a borrowed book by ID
 *     operationId: returnBook
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book ID
 *     responses:
 *       200:
 *         description: Book returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *       400:
 *         description: Book is not borrowed
 *       500:
 *         description: Server error
 */
router.patch('/:id/return', returnBook);

// View All Available Books
/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all available books
 *     operationId: getAvailableBooks
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: List of all available books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       500:
 *         description: Server error
 */
router.get('/', getAvailableBooks);

module.exports = router;
// View All Books
/**
 * @swagger
 * /api/books/all/:
 *   get:
 *     summary: Get all books
 *     operationId: getAvailableBooks
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: List of all books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       500:
 *         description: Server error
 */
router.get('/all/', getAllBooks);

module.exports = router;
