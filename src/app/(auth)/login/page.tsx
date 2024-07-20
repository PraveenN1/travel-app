'use client'
import { getProviders, signIn } from "next-auth/react";
import React from "react";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100">
      <div className="w-full max-w-sm p-10 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Welcome to TravelApp</h2>
        <p className="mt-2 text-center text-gray-600">
          Please sign in to continue
        </p>
        <div className="mt-6">
          <button
            className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
            onClick={() => signIn("")}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
