# Node.js Authentication and File Upload API

A secure RESTful API built with Node.js and Express, featuring user authentication, role-based authorization, and file upload functionality. This project demonstrates core backend development practices, including JWT-based authentication, secure password management, and integration with Cloudinary for file storage.

## Features
- User registration and login with hashed passwords (bcrypt).
- Token-based authentication using JSON Web Tokens (JWT).
- Role-based access control (e.g., admin/user permissions).
- File upload functionality with Cloudinary integration.
- Middleware for authentication, authorization, and file validation.

## Technologies
- **Backend**: Node.js, Express.js
- **Authentication**: JWT, bcrypt
- **File Uploads**: Multer, Cloudinary
- **Database**: MongoDB (via Mongoose)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/NODEJS-AUTH.git
   cd NODEJS-AUTH
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file and add the following variables:
   ```properties
   PORT=3000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET_KEY=<your-jwt-secret>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_CLOUD_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_CLOUD_API_SECRET=<your-cloudinary-api-secret>
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Access the API at `http://localhost:3000`.

## Endpoints
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login and receive a JWT.
- `POST /api/auth/change-password` - Change user password (requires authentication).
- `POST /api/images/upload` - Upload an image (admin only).
- `GET /api/images/get` - Fetch all uploaded images.

---
