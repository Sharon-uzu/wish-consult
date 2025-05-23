"use client"; 
import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../Assets/m1.jpg"
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
  return (
    <div className="register-container">
      <div className="register-image">
        <Image
            aria-hidden
            src={image}
            alt="Globe icon"
        />
      </div>
      <div className="register-form">
        <h4><Link href="/"><FaArrowLeft className="b-i"/></Link></h4>
        <h2>Welcome Back</h2>
        <form>
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>Don&apos;t have an account? <a href="/register">Sign Up</a></p> {/* Escape single quote here */}
      </div>
    </div>
  );
};

export default Login;
