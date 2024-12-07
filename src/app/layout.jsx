'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-[#EBE6DA]">
        {/* Navbar se renderiza siempre */}
        <Navbar />
        <main className="flex-1">
          {/* Contenido principal */}
          {children}
        </main>
        {/* Footer se renderiza siempre */}
        <Footer />
      </body>
    </html>
  );
}
