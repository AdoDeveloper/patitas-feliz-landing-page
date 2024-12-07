// components/Footer.jsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 md:px-6 border-t border-[#305441]/20">
      <div className="container flex flex-col items-center gap-2 sm:flex-row">
        <p className="text-xs text-[#305441]">© 2024 Patitas Feliz. Todos los derechos reservados.</p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-[#305441]" href="./terminos-y-condiciones">Términos de Servicio</Link>
          <Link className="text-xs hover:underline underline-offset-4 text-[#305441]" href="./terminos-y-condiciones">Privacidad</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
