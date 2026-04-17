# My Personal API

A simple REST API built with Node.js and Express.

## How to Run Locally

1. Clone the repo:
   git clone https://github.com/Frank363-hash/my-api.git
   cd my-api

2. Install dependencies:
   npm install

3. Start the server:
   node index.js

4. API runs on http://localhost:3000

## Endpoints

| Method | Endpoint | Response |
|--------|----------|----------|
| GET | / | `{"message": "API is running"}` |
| GET | /health | `{"message": "healthy"}` |
| GET | /me | `{"name": "...", "email": "...", "github": "..."}` |

## Live URL

http://98.80.6.122/m