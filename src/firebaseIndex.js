//firebase init 후 functions의 index에서 코딩
const functions = require("firebase-functions");
const express = require('express');
const cors =  require('cors');
const stripe = require('stripe')('시크릿 키');

// API

// App config
const app = express();


// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async(request, response) => {
    const total = request.query.total;
    
    console.log('payment request recieved boom!!! for this amount >>>', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunit pf ther currency
        currency: "usd",
    })
    response.status(201).status.send({
       clientSecret: paymentIntent.client_secret,
    });
});


// Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/change-4b2b2/us-centrall/api
