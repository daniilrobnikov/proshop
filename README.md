
# ProShop
> eCommerce platform built with the MERN Stack

![App Screenshot](https://res.cloudinary.com/daniilrobnikov/image/upload/v1657446521/proshop/ProShop_Home_Page_lnmho3.png)
## Front-End
 - Deployment: [Heroku](https://www.heroku.com/platform)
 - Styling: [Bootstrap](https://getbootstrap.com/)
 
 #### Libraries

 - [React.js](https://reactjs.org/)
 - [Redux.js](https://redux.js.org/)

 ## Back-End

 - Framework: [Express.js](https://expressjs.com/)
 - Database: [MongoDB](https://www.mongodb.com/)
 - Authentication: [JSON Web Tokens](https://jwt.io/)
 - Test API Platform: [Postman](https://www.postman.com/)
 - Image Upload: [Multer](https://www.npmjs.com/package/multer)

## Features

- Full-featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as a delivered option
- Checkout process (shipping, payment method, etc.)
- PayPal / credit card integration with [react-paypal-js](https://www.npmjs.com/package/@paypal/react-paypal-js)
- Database seeder (products & users)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`
`PORT`

`MONGO_URI`

`JWT_SECRET`

`PAYPAL_CLIENT_ID`
## API Reference

Basic CRUD functionality for products

#### Get all products

```
  GET /api/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get product

```
  GET /api/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |

## Usage

### Run Locally
```bash
# Run backend only
npm run server
```
```bash
# Run frontend only
npm run client
```
```bash
# Run frontend (:3000) & backend (:5000)
npm run dev
```
### Build & Deploy
```bash
# Create production build
npm run heroku-postbuild
```
### Database Seeder
```bash
# Import sample data
npm run data:import
```
```bash
# Delete sample data
npm run data:destroy
```


## Disclaimer

This project is a part of a [MERN Stack](https://www.udemy.com/course/mern-ecommerce/) course and is not intended for selling real-life products or making transit payments
