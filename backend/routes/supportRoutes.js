import { Router } from "express";
import supportController from "../controllers/supportController.js";

const router = Router();

// Create Razorpay order
router.post("/create-order", (req, res) =>
  supportController.createOrder(req, res),
);

// Verify payment and store supporter
router.post("/verify-payment", (req, res) =>
  supportController.verifyPayment(req, res),
);

// Get recent public supporters
router.get("/supporters", (req, res) =>
  supportController.getSupporters(req, res),
);

// Health check
router.get("/health", (req, res) => supportController.healthCheck(req, res));

export default router;
