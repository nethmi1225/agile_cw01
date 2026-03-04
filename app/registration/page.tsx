"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AuthWrapper } from '../src/components/AuthWrapper';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <AuthWrapper title="Create Your Account" subtitle="Join the EVPoint community today.">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" placeholder="Enter your Full Name" className="w-full p-3 text-black border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <div className="flex border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <span className="bg-gray-50 px-3 py-3 border-r text-sm text-gray-600 flex items-center">🇱🇰 +94</span>
            <input type="tel" placeholder="Enter your Mobile No." className="flex-1 p-3 text-black outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" placeholder="Enter your Email Address" className="w-full p-3 text-black border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" placeholder="Enter your Password" className="w-full p-3 text-black border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button className="w-full bg-blue-700 text-white p-3.5 rounded-xl font-semibold mt-4 hover:bg-blue-800 transition">
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account? <Link href="/login" className="text-blue-600 font-bold ml-1">Sign In</Link>
        </p>
      </form>
    </AuthWrapper>
  );
}