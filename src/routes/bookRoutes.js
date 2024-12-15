const express = require('express');
const { addBook, borrowBook, returnBook, getAvailableBooks } = require('../controllers/bookController');
const router = express.Router();

// Routes
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
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of the book
 *         author:
 *           type: string
 *           description: The author of the book
 *         isBorrowed:
 *           type: boolean
 *           description: Status if the book is borrowed
 */

// Add a Book
/**
 * @swagger
 * /books:
 *   post:
 *     summary: Add a new book to the library
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
 */
router.post('/', addBook);                // Add a book
// Borrow a Book
/**
 * @swagger
 * /books/{id}/borrow:
 *   patch:
 *     summary: Borrow a book by ID
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
 */
router.patch('/:id/borrow', borrowBook);  // Borrow a book
// Return a Book
/**
 * @swagger
 * /books/{id}/return:
 *   patch:
 *     summary: Return a borrowed book by ID
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
 */
router.patch('/:id/return', returnBook);  // Return a book
// View All Available Books
/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all available books
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
 */
router.get('/', getAvailableBooks);       // View available books

module.exports = router;
