import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Friendly Platform',
  description: 'A modern Next.js application built from scratch.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
