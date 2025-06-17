# 🧳 BaggageBugs API

Welcome to **BaggageBugs**, a RESTful backend service for managing luggage storage facilities, user authentication, booking management, and reviews. This API powers the backend of a luggage storage web application, enabling travelers to conveniently locate, book, and review storage facilities.

---

## 📦 Project Structure

This API includes the following main modules:

- **Health Check** – Basic endpoint to verify server status.
- **User Authentication** – Registration, login, logout, password change, etc.
- **Facility Management** – Add, edit, and view storage facilities.
- **Booking Management** – Make and manage bookings for facilities.
- **Maps Integration** – Coordinate-based facility search and time/distance estimation.
- **Reviews** – Post and retrieve reviews for facilities.

---

## 🔗 Live Postman Collection

📬 [Click to view the collection on Postman](https://thegradients.postman.co/workspace/BaggageBugs~376a3700-51d4-482e-9695-388df6a94eaf/collection/30950924-4530404c-7556-4dd3-b3a9-6c19b9b74ab6?action=share&source=collection_link&creator=32315199)

---

## 📑 API Endpoints

### 🧪 Healthcheck

- **GET** `/api/v1/health-check`  
  ✅ Verifies that the server is running.

---

### 👤 User Endpoints

| Method | Endpoint                          | Description                  |
|--------|-----------------------------------|------------------------------|
| POST   | `/api/v1/user/register`           | Register a new user         |
| POST   | `/api/v1/user/login`              | User login                   |
| POST   | `/api/v1/user/logout`             | Logout user                  |
| POST   | `/api/v1/user/addDetails`         | Add/update user profile info |
| POST   | `/user/changePassword`            | Change user password *(beta)*|
| GET    | `/user/getUser`                   | Fetch logged-in user details |
| POST   | `/user/toggleEmail`               | Enable/disable email updates |

---

### 🏢 Facility Endpoints

| Method | Endpoint                              | Description                         |
|--------|---------------------------------------|-------------------------------------|
| POST   | `/api/v1/facility/register`           | Register a new facility             |
| GET    | `/api/v1/facility/`                   | Retrieve all facilities             |
| GET    | `/api/v1/facility/get?id=<facilityId>`| Get a facility by its ID            |
| PUT    | `/api/v1/facility/edit?id=<facilityId>`| Edit an existing facility           |

---

### 📅 Booking Endpoints

| Method | Endpoint                                                 | Description                        |
|--------|----------------------------------------------------------|------------------------------------|
| POST   | `/api/v1/booking/`                                       | Create a new booking               |
| PUT    | `/api/v1/booking/payment`                                | Toggle payment status              |
| GET    | `/api/v1/booking/reservations?facilityId=<facilityId>`   | View all reservations for a facility |
| GET    | `/api/v1/booking/userReserv?bookingId=<bookingId>`       | Get details of a specific booking  |

---

### 🗺️ Map-Based Search

| Method | Endpoint                                      | Description                                  |
|--------|-----------------------------------------------|----------------------------------------------|
| POST   | `/api/v1/map/facilitiesBySearch`              | Find facilities near given coordinates       |
| POST   | `/api/v1/map/facilitiesDistanceTime`          | Get distance and time to reach a facility    |

---

### 🌟 Review Endpoints

| Method | Endpoint                                                   | Description                       |
|--------|------------------------------------------------------------|-----------------------------------|
| POST   | `/api/v1/review/create?facilityId=<facilityId>`           | Add a review for a facility       |
| GET    | `/api/v1/review/?facilityId=<facilityId>`                 | Retrieve reviews for a facility   |

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Postman** (for API testing)

---
