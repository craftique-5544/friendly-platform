import React from 'react';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="max-w-2xl p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-4">
          Welcome to Friendly Platform
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          Your clean, error-free fresh project is officially live and ready for production features.
        </p>
        <div className="flex gap-4 justify-center">
          <span className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm">
            Getting Started
          </span>
        </div>
      </div>
    </main>
  );
}
