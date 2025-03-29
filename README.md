# 🛠️ User Management API

## 📖 Project Overview
The **User Management API** is a RESTful API designed to manage users with full CRUD (Create, Read, Update, Delete) functionality. It allows clients to perform operations such as creating new users, retrieving user details, updating user information, and deleting users.

---

## ⚙️ Setup Instructions

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/user-management-api.git
   cd user-management-api
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure the Database**:
   Update `ormconfig.json` with your MySQL credentials.

## 📚 API Documentation

List all endpoints with examples (e.g., POST /users, GET /users/:id).
<ul>
    <li>GET /api/users => Get all users</li>
    <li>POST /api/users => Create user</li>
    <li>GET /api/users/:id => Find one user</li>
    <li>PUT /api/users/:id => Update one user</li>
    <li>DELETE /api/users/:id => Delete one user</li>
</ul>

## 🧪 Testing

Instructions to run tests (if applicable).

## 📋 Example User Data

```json
GET /api/users
Retrieve all users.
Example Response:
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
]
POST /api/users
Create a new user.
Example Request Body:
  {
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
  },
GET /api/users/:id
Retrieve a single user by ID.
GET http://localhost:YOUR_PORT_IN_ENV/api/users/:id

PUT /api/users/:id
Update a user's information.
Example Request Body:
  {
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  }
DELETE /api/users/:id
Delete a user by ID.
DELETE http://localhost:YOUR_PORT_IN_ENV/api/users/:id
```
