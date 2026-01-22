import supportService from "../services/supportService.js";

class SupportController {
  async createOrder(req, res) {
    try {
      const { amount, name, message, isPrivate } = req.body;

      if (!amount || amount < 1) {
        return res.status(400).json({ error: "Invalid amount" });
      }

      const order = await supportService.createOrder(
        amount,
        name || "Anonymous",
        message || "",
        isPrivate,
      );

      res.json({
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId: process.env.RAZORPAY_KEY_ID,
      });
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Failed to create order" });
    }
  }

  async verifyPayment(req, res) {
    try {
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        name,
        message,
        isPrivate,
        amount,
      } = req.body;

      // Verify signature
      const isValid = supportService.verifySignature(
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      );

      if (!isValid) {
        return res.status(400).json({ error: "Invalid payment signature" });
      }

      // Save supporter
      const supporter = await supportService.saveSupport({
        name: name || "Anonymous",
        message: message || "",
        amount,
        isPrivate: isPrivate || false,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      });

      res.json({ success: true, supporter });
    } catch (error) {
      console.error("Error verifying payment:", error);
      res.status(500).json({ error: "Payment verification failed" });
    }
  }

  async getSupporters(req, res) {
    try {
      const limit = parseInt(req.query.limit) || 20;
      const supporters = await supportService.getPublicSupports(limit);
      res.json(supporters);
    } catch (error) {
      console.error("Error fetching supporters:", error);
      res.status(500).json({ error: "Failed to fetch supporters" });
    }
  }

  healthCheck(req, res) {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  }
}

export default new SupportController();
