# Caterer Management API

A backend API built with Node.js, Express, and MongoDB for managing caterer information.

## 🚀 Deployed API URL

The [DEPLOYED_URL] is available upon request, DM me...

## 📋 Response Format

All API responses follow a consistent JSON structure:

```json
{
  "status": "Response Status",
  "message": "Message",
  "data": "{Response Object}"
}
```

## 🧪 API Endpoints & Testing (cURL)

### 1. Get All Caterers

Retrieves a list of all caterers.

```bash
curl -X GET [DEPLOYED_URL]/api/caterers
```

---

### 2. Create a Caterer

Adds a new caterer to the database.

```bash
curl -X POST [DEPLOYED_URL]/api/caterers \
-H "Content-Type: application/json" \
-d '{
  "name": "Gourmet Delights",
  "location": "Mumbai",
  "pricePerPlate": 500,
  "cuisines": ["North Indian", "Chinese"],
  "rating": 4.5
}'
```

---

### 3. Get Caterer by ID

Retrieves details of a specific caterer using their ID.

```bash
curl -X GET [DEPLOYED_URL]/api/caterers/[CATERER_ID]
```

## 📁 Project Structure

- `index.ts`: Entry point of the application and Express app configuration.
- `src/configs/db.ts`: MongoDB connection configuration using Mongoose.
- `src/controllers/`: Contains the logic for handling API requests (Caterers controller).
- `src/models/`: Defines Mongoose schemas and TypeScript interfaces for data models.
- `src/routes/`: API route definitions and mapping to controllers.
- `src/middlewear/`: Custom middleware for tasks like global error handling.
- `src/utilities.ts`: Common utility functions (e.g., standardized API response formatter).
- `vercel.json`: Deployment configuration for Vercel.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB (Mongoose)
- **Language:** TypeScript
- **Deployment:** Vercel
