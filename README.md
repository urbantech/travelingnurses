```markdown
# Traveling Nurses API

Description:
The Traveling Nurses API provides endpoints for managing users, classes, registration, reviews, notifications, transactions, listings, chat, instructors, bookings, feedbacks, and events.

Setting up the API locally:

# Prerequisites:
- Node.js
- npm
- Firebase CLI

# Steps:
1. Clone the Repository:
   ```bash
   git clone https://github.com/urbantech/travelingnurses
   cd travelingnurses
   ```

2. # Install Dependencies:
   ```bash
   cd functions
   npm install
   ```

3. # Running the API locally:**
   Start the Firebase emulators for Cloud Functions and Firestore.
   ```bash
   firebase emulators:start --only functions,firestore
   ```

Deploying to Firebase:

1. Login to Firebase:
   ```bash
   firebase login
   ```

2. Deploy:
   ```bash
   firebase deploy --only functions
   ```

## API Endpoints:
- Users: `/users`
- Classes: `/classes`
- Registration: `/registration`
- Reviews: `/reviews`
- Notifications: `/notifications`
- Admin: `/admin`
- Transactions: `/transactions`
- Listings: `/listings`
- Chat: `/chat`
- Instructors: `/instructors`
- Bookings: `/bookings`
- Feedbacks: `/feedbacks`
- Events: `/events`

For detailed parameters and response formats, refer to the inline documentation in the codebase or API documentation provided below.
---

### Reviews

Add Review:  
Endpoint: 
- POST /reviews
Headers:  
- Content-Type: application/json
Body:  
```
{
  "userId": "user-id",
  "rating": 5,
  "comment": "Great class!"
}
```
Response:  
```
{
  "id": "review-id",
  ...
}
```

### Notifications

Fetch User Notifications:  
Endpoint: 
- GET /notifications/:userId
Response:  
```
[
  {
    "id": "notification-id",
    "message": "Class tomorrow at 10 AM",
    ...
  }
]
```

### Admin

Get Admin Dashboard:  
Endpoint: 
- GET /admin/dashboard
Response:  
```
{
  "totalUsers": 150,
  "totalClasses": 25,
  ...
}
```

### Transactions

Get User Transactions:  
Endpoint: 
- GET /transactions/:userId
Response:  
```
[
  {
    "id": "transaction-id",
    "amount": 100,
    ...
  }
]
```

### Listings

Get All Listings:  
Endpoint: 
- GET /listings
Query Parameters:  
- page: Page number for pagination.
- limit: Number of listings per page.
Response:  
```
[
  {
    "id": "listing-id",
    "title": "Room near hospital",
    ...
  }
]
```

### Chat

Start a Chat:  
Endpoint: 
- POST /chat
Headers:  
- Content-Type: application/json
Body:  
```
{
  "senderId": "user-id",
  "receiverId": "user-id2",
  "message": "Hello!"
}
```
Response:  
```
{
  "id": "chat-id",
  ...
}
```

### Instructors

Get Instructor Profile:  
Endpoint: 
- GET /instructors/:instructorId
Response:  
```
{
  "id": "instructor-id",
  "name": "John Doe",
  ...
}
```

### Bookings

Book a Class:  
Endpoint: 
- POST /bookings
Headers:  
- Content-Type: application/json
Body:  
```
{
  "userId": "user-id",
  "classId": "class-id"
}
```
Response:  
```
{
  "id": "booking-id",
  ...
}
```

### Feedbacks

Submit Feedback:  
Endpoint: 
- POST /feedbacks
Headers:  
- Content-Type: application/json
Body:  
```
{
  "userId": "user-id",
  "message": "Loved the platform!"
}
```
Response:  
```
{
  "id": "feedback-id",
  ...
}
```

### Events

Get All Events:  
Endpoint: 
- GET /events
Response:  
```
[
  {
    "id": "event-id",
    "title": "Yoga Workshop",
    ...
  }
]
```

Status Codes:

- 200 OK: Request was successful.
- 201 Created: Resource was successfully created.
- 400 Bad Request: There's an issue with the client's request.
- 401 Unauthorized: Client is not authenticated.
- 403 Forbidden: Client is not allowed to access the endpoint.
- 404 Not Found: Resource not found.
- 500 Internal Server Error: Something went wrong on the server's side.
