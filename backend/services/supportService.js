import crypto from "crypto";
import razorpay from "../config/razorpay.js";
import supabase from "../config/supabase.js";

class SupportService {
  async createOrder(amount, name, message, isPrivate) {
    const options = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        name,
        message,
        isPrivate: isPrivate ? "true" : "false",
      },
    };

    const order = await razorpay.orders.create(options);
    return order;
  }

  verifySignature(orderId, paymentId, signature) {
    const sign = orderId + "|" + paymentId;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    return signature === expectedSign;
  }

  async saveSupport(supportData) {
    const { data, error } = await supabase
      .from("supports")
      .insert([
        {
          name: supportData.name,
          amount: supportData.amount,
          message: supportData.message,
          is_private: supportData.isPrivate,
          payment_id: supportData.paymentId,
          order_id: supportData.orderId,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      throw new Error("Failed to save support: " + error.message);
    }

    return data[0];
  }

  async getPublicSupports(limit = 20) {
    const { data, error } = await supabase
      .from("supports")
      .select("name, amount, message, created_at")
      .eq("is_private", false)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      throw new Error("Failed to fetch supports: " + error.message);
    }

    return data;
  }
}

export default new SupportService();
