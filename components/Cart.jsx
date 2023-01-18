import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineUser,
} from "react-icons/ai";
import { RiLoginCircleLine } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

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
    console.log(cartItems);
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();
    console.log(data);
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
              <img src={userState?.photoURL} alt="Avatar" />
              <h1>{userState?.displayName}</h1>
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
