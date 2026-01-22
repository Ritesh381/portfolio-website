import { useState, useEffect } from "react";
import { Heart, HelpCircle, Loader2, CheckCircle, Coffee } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface Supporter {
  id: number;
  name: string;
  message: string;
  amount: number;
  created_at: string;
}

const API_URL = import.meta.env.VITE_API_URL || "https://portfolio-website-backend-git-main-ritesh381s-projects.vercel.app";

function Support() {
  const [amount, setAmount] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [supporters, setSupporters] = useState<Supporter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingSupporters, setLoadingSupporters] = useState<boolean>(true);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);

  // Fetch recent supporters
  useEffect(() => {
    fetchSupporters();
  }, []);

  const fetchSupporters = async () => {
    try {
      const res = await fetch(`${API_URL}/api/supporters`);
      if (res.ok) {
        const data = await res.json();
        setSupporters(data);
      }
    } catch (error) {
      console.error("Failed to fetch supporters:", error);
    } finally {
      setLoadingSupporters(false);
    }
  };

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleQuickAmount = (value: number) => {
    setAmount(String(value));
  };

  const handleSupport = async () => {
    const amountNum = parseInt(amount);
    if (!amountNum || amountNum < 1) {
      alert("Please enter a valid amount");
      return;
    }

    setLoading(true);

    try {
      // Create order
      const orderRes = await fetch(`${API_URL}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountNum,
          name: name || "Anonymous",
          message,
          isPrivate,
        }),
      });

      if (!orderRes.ok) {
        throw new Error("Failed to create order");
      }

      const orderData = await orderRes.json();

      // Open Razorpay checkout
      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Support Ritesh Prajapati",
        description: "Thank you for your support!",
        order_id: orderData.orderId,
        handler: async (response: any) => {
          // Verify payment
          const verifyRes = await fetch(`${API_URL}/api/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              name: name || "Anonymous",
              message,
              isPrivate,
              amount: amountNum,
            }),
          });

          if (verifyRes.ok) {
            setPaymentSuccess(true);
            setAmount("");
            setName("");
            setMessage("");
            setIsPrivate(false);
            fetchSupporters();
            setTimeout(() => setPaymentSuccess(false), 5000);
          } else {
            alert("Payment verification failed");
          }
        },
        prefill: {
          name: name || "",
        },
        theme: {
          color: "#6366f1",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-24 px-4 md:px-8">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Coffee className="text-amber-400" size={48} />
          Support My Work
        </h1>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto">
          If you like my work and want to support me, you can buy me a coffee!
          Your support helps me keep creating awesome projects.
        </p>
      </div>

      {/* Success Message */}
      {paymentSuccess && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-6 py-3 bg-green-500/20 backdrop-blur-lg border border-green-500/30 rounded-xl text-green-400 shadow-lg animate-pulse">
          <CheckCircle size={24} />
          <span className="font-medium">Thank you for your support! 🎉</span>
        </div>
      )}

      {/* Main Content */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Supporters Card */}
        <div
          className="
            relative
            p-6
            border border-neutral-700/50
            rounded-2xl
            shadow-2xl
            bg-white/5
            backdrop-blur-xl
            overflow-hidden
          "
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          }}
        >
          {/* Glass shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
            <Heart className="text-pink-500" size={24} />
            Recent Supporters
          </h2>

          <div className="relative z-10 min-h-[280px]">
            {loadingSupporters ? (
              <div className="flex flex-col items-center justify-center h-64 text-neutral-400">
                <Loader2 className="animate-spin mb-3" size={32} />
                <span>Loading supporters...</span>
              </div>
            ) : supporters.length === 0 ? (
              <div
                className="
                  flex flex-col items-center justify-center
                  h-64
                  border border-neutral-700/30
                  rounded-xl
                  bg-white/5
                  backdrop-blur-sm
                "
              >
                <Heart className="text-indigo-400 mb-3 animate-pulse" size={40} />
                <p className="text-neutral-400 text-center px-4">
                  Be the first one to support Ritesh Prajapati.
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                {supporters.map((supporter) => (
                  <div
                    key={supporter.id}
                    className="
                      p-4
                      rounded-xl
                      border border-neutral-700/30
                      bg-white/5
                      backdrop-blur-sm
                      hover:border-indigo-500/40
                      hover:bg-white/10
                      transition-all duration-300
                    "
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-white">
                            {supporter.name}
                          </span>
                          <span className="text-xs text-neutral-500">
                            {formatDate(supporter.created_at)}
                          </span>
                        </div>
                        {supporter.message && (
                          <p className="text-neutral-400 text-sm line-clamp-2">
                            "{supporter.message}"
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-green-400 font-bold text-sm bg-green-500/10 px-2 py-1 rounded-lg">
                        ₹{supporter.amount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Support Form Card */}
        <div
          className="
            relative
            p-6
            border border-neutral-700/50
            rounded-2xl
            shadow-2xl
            bg-white/5
            backdrop-blur-xl
            overflow-hidden
          "
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          }}
        >
          {/* Glass shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

          <h2 className="text-2xl font-bold text-white mb-6 relative z-10">
            Support Ritesh Prajapati
          </h2>

          <div className="space-y-5 relative z-10">
            {/* Amount Input */}
            <div>
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 font-bold text-lg">
                    ₹
                  </span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="
                      w-full
                      pl-9 pr-4 py-3
                      bg-white/5
                      border border-neutral-700/50
                      rounded-xl
                      text-white
                      placeholder-neutral-500
                      focus:outline-none
                      focus:border-indigo-500/50
                      focus:ring-2
                      focus:ring-indigo-500/20
                      transition-all duration-300
                      backdrop-blur-sm
                    "
                  />
                </div>
                <div className="flex gap-2">
                  {[10, 25, 50].map((val) => (
                    <button
                      key={val}
                      onClick={() => handleQuickAmount(val)}
                      className={`
                        px-4 py-3
                        rounded-xl
                        border
                        font-medium
                        transition-all duration-300
                        ${
                          amount === String(val)
                            ? "bg-indigo-500/20 border-indigo-500/50 text-indigo-400"
                            : "bg-white/5 border-neutral-700/50 text-neutral-300 hover:border-neutral-600 hover:bg-white/10"
                        }
                      `}
                    >
                      +{val}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Name or @yoursocial"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                  w-full
                  px-4 py-3
                  bg-white/5
                  border border-neutral-700/50
                  rounded-xl
                  text-white
                  placeholder-neutral-500
                  focus:outline-none
                  focus:border-indigo-500/50
                  focus:ring-2
                  focus:ring-indigo-500/20
                  transition-all duration-300
                  backdrop-blur-sm
                "
              />
            </div>

            {/* Message Input */}
            <div>
              <textarea
                placeholder="Say something nice..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="
                  w-full
                  px-4 py-3
                  bg-white/5
                  border border-neutral-700/50
                  rounded-xl
                  text-white
                  placeholder-neutral-500
                  focus:outline-none
                  focus:border-indigo-500/50
                  focus:ring-2
                  focus:ring-indigo-500/20
                  transition-all duration-300
                  backdrop-blur-sm
                  resize-none
                "
              />
            </div>

            {/* Private Checkbox */}
            <div className="flex items-center gap-3">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isPrivate}
                  onChange={(e) => setIsPrivate(e.target.checked)}
                  className="sr-only peer"
                />
                <div
                  className="
                    w-5 h-5
                    border-2 border-neutral-600
                    rounded
                    bg-white/5
                    peer-checked:bg-indigo-500
                    peer-checked:border-indigo-500
                    transition-all duration-200
                    flex items-center justify-center
                  "
                >
                  {isPrivate && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </label>
              <span className="text-neutral-300 text-sm">Make this private</span>
              <div className="relative group">
                <HelpCircle size={16} className="text-neutral-500 cursor-help" />
                <div
                  className="
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                    px-3 py-2
                    bg-neutral-800/90
                    backdrop-blur-lg
                    border border-neutral-700
                    rounded-lg
                    text-xs text-neutral-300
                    whitespace-nowrap
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                    pointer-events-none
                    z-20
                  "
                >
                  Your name won't appear in the supporters list
                </div>
              </div>
            </div>

            {/* Support Button */}
            <button
              onClick={handleSupport}
              disabled={loading}
              className="
                w-full
                py-4
                bg-gradient-to-r from-indigo-600 to-purple-600
                hover:from-indigo-500 hover:to-purple-500
                disabled:from-neutral-600 disabled:to-neutral-600
                disabled:cursor-not-allowed
                text-white
                font-bold
                text-lg
                rounded-xl
                transition-all duration-300
                shadow-lg
                shadow-indigo-500/25
                hover:shadow-indigo-500/40
                hover:scale-[1.02]
                active:scale-[0.98]
                flex items-center justify-center gap-2
              "
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  Processing...
                </>
              ) : (
                <>
                  <Heart size={24} />
                  Support
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}

export default Support;
