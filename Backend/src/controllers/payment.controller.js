import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import axios from "axios";
import { Cashfree } from "cashfree-pg";

const cashfree = new Cashfree(
  Cashfree.SANDBOX,
  process.env.CASHFREE_APP_ID,
  process.env.CASHFREE_SECRET_KEY
);

const createPayment = asyncHandler( async (req, res) => {
  const { orderId, orderAmount, customerEmail, customerPhone, customerName } = req.body;

  try {
    const response = await axios.post(
      "https://sandbox.cashfree.com/pg/orders",
      {
        order_id: orderId,
        order_amount: orderAmount,
        order_currency: "INR",
        customer_details: {
          customer_id: customerEmail.split("@")[0].replace(/[^a-zA-Z0-9_-]/g, "") || "guest_user",
          customer_email: customerEmail,
          customer_phone: customerPhone,
          customer_name: customerName,
        },
        order_meta: {
          return_url: "https://baggagebugs-f.vercel.app/reservation",
        },
      },
      {
        headers: {
          accept: "application/json",
          "x-api-version": "2022-09-01",
          "x-client-id": process.env.CASHFREE_APP_ID,
          "x-client-secret": process.env.CASHFREE_SECRET_KEY,
          "content-type": "application/json",
        },
      }
    );

    // Success
    return res
      .status(200)
      .json(new ApiResponse(200, response.data, "Payment order created successfully"));
  } catch (error) {
    // Safe error access
    const errMsg =
      error?.response?.data?.message || error.message || "Unknown error from Cashfree";

    console.error("Cashfree Error:", errMsg);

    return res
      .status(500)
      .json(new ApiResponse(500, null, `Payment creation failed: ${errMsg}`));
  }
});

const verifyPayment =  asyncHandler(async (req, res) => {
  const { orderId } = req.query;

  console.log("Verifying order ID:", orderId);
  if (!orderId) {
    throw new ApiError(400, "Order ID is required for verification");
  }

  try {
    const response = await axios.get(
      `https://sandbox.cashfree.com/pg/orders/${orderId}`,
      {
        headers: {
          accept: "application/json",
          "x-api-version": "2022-09-01",
          "x-client-id": process.env.CASHFREE_APP_ID,
          "x-client-secret": process.env.CASHFREE_SECRET_KEY,
        },
      }
    );

    const orderStatus = response.data.order_status;

    return res
      .status(200)
      .json(
        new ApiResponse(200, response.data, `Order status is: ${orderStatus}`)
      );
  } catch (error) {
    const errMsg =
      error?.response?.data?.message || error.message || "Verification failed";

    console.error("Cashfree Verification Error:", errMsg);

    return res
      .status(500)
      .json(new ApiResponse(500, null, `Verification failed: ${errMsg}`));
  }
});


export { createPayment, verifyPayment };
