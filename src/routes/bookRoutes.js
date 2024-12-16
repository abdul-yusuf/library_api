const express = require('express');
const { addBook, borrowBook, returnBook, getAvailableBooks } = require('../controllers/bookController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API for managing books
 */

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
 */
router.post('/', addBook);

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all available books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of available books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/', getAvailableBooks);

module.exports = router;
