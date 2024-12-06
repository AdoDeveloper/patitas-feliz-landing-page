
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: 'Patitas Feliz',
  description: 'Conecta con veterinarios y cuida la salud de tus mascotas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
