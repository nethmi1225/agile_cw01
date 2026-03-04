"use client";

import { AuthWrapper } from '../src/components/AuthWrapper';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <AuthWrapper title="Hello Again" subtitle="Welcome back! Please enter your details.">
      <form className="space-y-5">
        <div>
          <label className="block text-sm  font-medium text-black mb-1">Email Address</label>
          <input type="email" placeholder="Enter your Email Address" className="w-full p-3 text-black border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-black mb-1">Password</label>
          <input type="password" placeholder="Enter your Password" className="w-full p-3 text-black border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-gray-500">
            <input type="checkbox" className="rounded border-gray-300 text-blue-600" /> Remember me
          </label>
          <Link href="#" className="text-blue-600 hover:underline">Forgot Password?</Link>
        </div>

        <button className="w-full bg-blue-700 text-white p-3.5 rounded-xl font-semibold hover:bg-blue-800 transition shadow-lg">
          Sign In
        </button>

        <div className="text-center text-sm text-gray-400 my-6 italic">— or —</div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <button className="p-2 border rounded-full hover:bg-gray-50">🌐</button>
          <button className="p-2 border rounded-full hover:bg-gray-50">👤</button>
          <button className="p-2 border rounded-full hover:bg-gray-50">🐦</button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Don&apos;t have an account? <Link href="/registration" className="text-blue-600 font-bold ml-1">Sign Up</Link>
        </p>
      </form>
    </AuthWrapper>
  );
}