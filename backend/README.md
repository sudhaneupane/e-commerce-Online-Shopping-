
# Backend API Documentation

## Base URL
```
http://localhost:4000/api
```

## Authentication
All routes under `/api` require authentication using a JWT token unless specified otherwise.

## User Routes

### Register User
```
POST /user/register
```
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "success": true,
  "token": "jwt_token"
}
```

### Login User
```
POST /user/login
```
**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "success": true,
  "token": "jwt_token"
}
```

### Admin Login
```
POST /user/admin
```
**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "adminpassword"
}
```
**Response:**
```json
{
  "success": true,
  "token": "jwt_token"
}
```

## Product Routes

### Add Product (Admin Only)
```
POST /products/add
```
**Request Headers:**
```
Authorization: Bearer jwt_token
```
**Request Body:**
```form-data
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "category": "Men",
  "subCategory": "Topwear",
  "bestSeller": true,
  "sizes": ["S", "M", "L"],
  "image1": file,
  "image2": file,
  "image3": file,
  "image4": file
}
```
**Response:**
```json
{
  "success": true,
  "message": "Product added"
}
```

### List Products
```
GET /products/list
```
**Response:**
```json
{
  "success": true,
  "products": [...]
}
```

### Remove Product (Admin Only)
```
DELETE /products/remove/:id
```
**Request Headers:**
```
Authorization: Bearer jwt_token
```
**Response:**
```json
{
  "success": true,
  "message": "Product removed"
}
```

### Get Single Product
```
GET /products/single/:id
```
**Response:**
```json
{
  "success": true,
  "product": {...}
}
```

## Cart Routes

### Add to Cart
```
POST /cart/add
```
**Request Headers:**
```
Authorization: Bearer jwt_token
```
**Request Body:**
```json
{
  "itemId": "product_id",
  "size": "M"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Added to cart"
}
```

### Get User Cart
```
GET /cart/get
```
**Request Headers:**
```
Authorization: Bearer jwt_token
```
**Response:**
```json
{
  "success": true,
  "cartData": {...}
}
```

### Update Cart
```
PATCH /cart/update
```
**Request Headers:**
```
Authorization: Bearer jwt_token
```
**Request Body:**
```json
{
  "itemId": "product_id",
  "size": "M",
  "quantity": 2
}
```
**Response:**
```json
{
  "success": true,
  "message": "Cart updated"
}
```

## Order Routes

### Place Order
```
POST /order/place
```
**Request Headers:**
```
Authorization: Bearer jwt_token
```
**Request Body:**
```json
{
  "address": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "street": "123 Main St",
    "city": "City",
    "provience": "State",
    "zipcode": "12345",
    "country": "Country",
    "phone": "1234567890"
  },
  "items": [...],
  "amount": 200
}
```
**Response:**
```json
{
  "success": true,
  "message": "Order Placed"
}
```

### Get User Orders
```
GET /order/userorders
```
**Request Headers:**
```
Authorization: Bearer jwt_token
```
**Response:**
```json
{
  "success": true,
  "orders": [...]
}
```

### Get All Orders (Admin Only)
```
GET /order/list
```
**Request Headers:**
```
Authorization: Bearer jwt_token
```
**Response:**
```json
{
  "success": true,
  "orders": [...]
}
```

### Update Order Status (Admin Only)
```
POST /order/status
```
**Request Headers:**
```
Authorization: Bearer jwt_token
```
**Request Body:**
```json
{
  "orderId": "order_id",
  "status": "Shipped"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Status Updated"
}
```
```
