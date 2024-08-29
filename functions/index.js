const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY); // Correct initialization of Stripe

// Load environment variables from .env file
dotenv.config();
// const stripe = Stripe(process.env.STRIPE_KEY);
if (!stripe) {
    console.error('Failed to initialize Stripe.');
}

const app = express();

// Enable CORS
app.use(cors({ origin: true }));

// Parse incoming JSON requests
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.status(200).json({ message: "success !", });
});

// Payment creation route
app.post("/payment/create", async (req, res) => {

const total = req.query.total; // Use body for POST requests
if (total > 0) { 
    console.log("payment recived", total),
    res.send(total)
}
})

//             const paymentIntent = await stripe.paymentIntents.create({
//                 amount: total,
//                 currency: "usd",
//             });
//             console.log(paymentIntent);
//             res.status(201).json({ clientSecret: paymentIntent.client_secret });
//         } else {
//             res.status(400).json({ message: "Total must be greater than 0" });
//         }
//     } catch (error) {
//         console.error("Error creating payment intent:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

exports.api = onRequest(app);
