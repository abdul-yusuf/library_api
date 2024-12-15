# Library Management System API

A RESTful API for managing a library system, built using Node.js, Express.js, and MongoDB.

---

## Features
- **Add a Book:** Add new books to the library.
- **Borrow a Book:** Mark a book as borrowed.
- **Return a Book:** Mark a borrowed book as returned.
- **View Available Books:** Retrieve all books that are not currently borrowed.

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (v7 or later)
- **MongoDB** (local instance or MongoDB Atlas)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd library-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/library
     ```

4. Start the MongoDB server (if running locally):
   ```bash
   mongod
   ```

---

## Running the Application

### Development Mode
Use **nodemon** for auto-restart during development:
```bash
nodemon server.js
```

### Production Mode
Run the server with:
```bash
npm start
```

---

## Endpoints

### Base URL
- **Local Development:** `http://localhost:3000`

### API Documentation
Swagger UI is available at `/api-docs`.

#### Example Endpoints:

1. **Add a Book**
   - **POST** `/books`
   - Request Body:
     ```json
     {
       "title": "Book Title",
       "author": "Author Name"
     }
     ```

2. **Borrow a Book**
   - **PATCH** `/books/:id/borrow`

3. **Return a Book**
   - **PATCH** `/books/:id/return`

4. **View All Available Books**
   - **GET** `/books`

---

## Deployment

The API is deployed using **Vercel**.

### Steps to Deploy on Vercel:
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Log in to Vercel:
   ```bash
   vercel login
   ```
3. Deploy the app:
   ```bash
   vercel
   ```
4. Follow the CLI prompts and use the production build for deployment.

---

## Testing the API

### Using Postman
1. Import the Swagger JSON file or manually create requests.
2. Test each endpoint by sending appropriate requests.

### Using Python Requests
You can also test the API using Python. Example:

```python
import requests

# Add a Book
response = requests.post("http://localhost:3000/books", json={
    "title": "1984",
    "author": "George Orwell"
})
print(response.json())
```

---

## Technologies Used
- **Node.js** for the server runtime.
- **Express.js** for creating the RESTful API.
- **MongoDB** for the database.
- **Swagger** for API documentation.
- **Helmet** for security.
- **Cors** for cross-origin resource sharing.

---

## Folder Structure
```plaintext
library-api/
├── src/
|   ├── models/
|   │   └── book.js          # Mongoose schema for Book
|   ├── routes/
|   │   └── bookRoutes.js    # All book-related endpoints
|   ├── utils/
|   │   └── swagger.js       # Swagger documentation setup
|   ├── app.js               # Main application file
├── package.json         # Project metadata and dependencies
├── .env                 # Environment variables
└── README.md            # Documentation
```

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---
