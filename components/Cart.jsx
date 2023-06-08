import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import Image from "next/image";
import { RiLoginCircleLine } from "react-icons/ri";

import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";

import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
    userState,
    signIn,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();
    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Back</span>
        </button>

        {userState == null ? (
          <div className=" bg-slate-500 flex-col content-center">
            <RiLoginCircleLine size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button type="button" onClick={signIn} className="btn">
                Log in with Google
              </button>
            </Link>
          </div>
        ) : (
          <div className="">
            {" "}
            <div className=" flex flex-col justify-center h-screen ">
              <Image src={userState?.photoURL} alt="Avatar" />
              <h1>{userState?.displayName}</h1>
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
