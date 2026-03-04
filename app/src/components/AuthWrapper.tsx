// components/AuthWrapper.tsx
import React from 'react';

interface AuthWrapperProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthWrapper = ({ children, title, subtitle }: AuthWrapperProps) => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Branding Section */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] bg-blue-600 p-16 text-white">
        <div>
          <h1 className="text-5xl font-bold tracking-tight mb-2">EVPoint</h1>
          <p className="text-xl opacity-90 font-light">Find a Station Near You.</p>
        </div>

        <div className="flex justify-center">
          {/* Main Illustration Placeholder */}
          <div className="relative w-full max-w-md aspect-video bg-blue-500/30 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl">
            <span className="text-white/50 text-sm">[EV Illustration Here]</span>
          </div>
        </div>

        <div className="max-w-md">
          <h2 className="text-4xl font-semibold leading-tight mb-4">
            Locate, charge, and pay with ease.
          </h2>
          <p className="text-lg opacity-80 leading-relaxed">
            Access a global network of charging points. Real-time availability
            and smart scheduling at your service.
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-24">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-500 text-sm mt-2">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};