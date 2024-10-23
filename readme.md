# User Management API

A RESTful API built with Node.js, Express, and MongoDB for managing user data. The API provides CRUD operations for user management with proper validation and error handling.

## Features

- MongoDB integration using Mongoose
- Complete CRUD operations for user management
- Input validation and error handling
- Proper middleware implementation
- MongoDB ObjectId validation
- Automatic timestamp management

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- pnpm package manager (`npm install -g pnpm`)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Lunar-spec/levelup_api.git
cd levelup_api
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file in the root directory and add your configuration:

```env
PORT=3000
MONGODB_URI="your MongoDB URI"
```

4. Start the server:

```bash
pnpm run dev
```

## Database Schema

The user schema includes the following fields:

- `firstName` (String, required, 2-50 characters)
- `lastName` (String, required, 2-50 characters)
- `hobby` (String, required, 2-100 characters)
- `createdAt` (Date, auto-generated)
- `updatedAt` (Date, auto-generated)

## API Endpoints

| Method | Endpoint      | Description           | Request Body                                    |
|--------|--------------|----------------------|------------------------------------------------|
| GET    | /users       | Get all users        | -                                              |
| GET    | /users/:id   | Get user by ID       | -                                              |
| POST   | /user        | Create new user      | `{ "firstName": "", "lastName": "", "hobby": "" }` |
| PUT    | /user/:id    | Update user          | `{ "firstName": "", "lastName": "", "hobby": "" }` |
| DELETE | /user/:id    | Delete user          | -                                              |
