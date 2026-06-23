# Digital Growth Platform for Function Hall Business

## Overview

The Digital Growth Platform for Function Hall Business is a full-stack MERN application designed to help function hall owners manage bookings, customers, halls, payments, and business growth through a centralized digital platform.

The platform allows customers to browse available halls, check details, book venues online, make payments, and receive booking confirmations. Administrators can manage halls, bookings, users, reviews, and analytics through a secure dashboard.

---

## Features

### Customer Features

* User Registration and Login
* Browse Function Halls
* View Hall Details
* Online Hall Booking
* Payment Gateway Integration
* Booking Confirmation Emails
* Download Booking Invoice PDF
* Responsive User Interface

### Admin Features

* Secure Admin Dashboard
* Hall Management
* Booking Management
* User Management
* Analytics Dashboard
* Customer Review Monitoring
* Image Upload Management

---

## Technology Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Recharts
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* JWT Authentication

### Third-Party Services

* Razorpay
* Cloudinary
* Nodemailer

---

## Project Structure

```text
Function-Hall-Growth-Platform/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd Function-Hall-Growth-Platform
```

### Backend Setup

```bash
cd server

npm install

npm start
```

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

EMAIL_USER=your_email

EMAIL_PASS=your_email_app_password

RAZORPAY_KEY_ID=your_razorpay_key

RAZORPAY_SECRET=your_razorpay_secret

CLOUD_NAME=your_cloudinary_name

CLOUD_API_KEY=your_cloudinary_api_key

CLOUD_SECRET=your_cloudinary_secret
```

---

## API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login

### Halls

* GET /api/halls
* POST /api/halls

### Bookings

* GET /api/bookings
* POST /api/bookings

### Payments

* POST /api/payment/create-order

### Uploads

* POST /api/upload

---

## Future Enhancements

* Real-Time Booking Status
* WhatsApp Notifications
* AI-Based Customer Recommendations
* Multi-Hall Management
* Event Scheduling Calendar
* Advanced Revenue Analytics

---

## Author

Sneha Hari

BCA Student | MERN Stack Developer

---

## License

This project is developed for educational and portfolio purposes.
