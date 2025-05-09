"use client";

import useStore from "@/store";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { motion } from "motion/react";
import { Check, Home, ShoppingBag } from "lucide-react";
import Link from "next/link";

const SuccessPageContent = () => {
  const { resetCart } = useStore();
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");

  useEffect(() => {
    if (orderNumber) {
      resetCart();
    }
  }, [orderNumber, resetCart]);
  return (
    <div className="py-5 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mx-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl flex flex-col gap-8 shadow-2xl p-6 max-w-xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="size-20 bg-shop_light_green rounded-full flex items-center justify-center mx-auto shadow-lg"
        >
          <Check className="text-white size-10" />
        </motion.div>

        <h1 className="text-3xl font-bold text-shop_light_green mb-4">
          Order Confirmed!
        </h1>
        <div className="space-y-4 mb-4 text-left">
          <p className="text-gray-700">
            Thank you for your purchase. We&apos;re processing your order and
            will ship it soon. A confirmation email with your order details will
            be sent to your inbox shortly.
          </p>
          <p className="text-gray-700">
            Order Number:{" "}
            <span className="text-black font-semibold">{orderNumber}</span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 flex-col md:flex-row">
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-3 font-semibold bg-shop_light_green text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md md:w-fit w-full"
          >
            <Home className="size-5 mr-2" />
            Home
          </Link>
          <Link
            href="/shop"
            className="flex items-center justify-center px-4 py-3 font-semibold bg-lightGreen text-black border border-lightGreen rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md md:w-fit w-full"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Shop
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

const SuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  );
};

export default SuccessPage;
