'use client';

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaPaw ,FaTimes, FaCogs, FaComments, FaInfoCircle, FaDownload } from "react-icons/fa"; // Importa los iconos

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Características",
      icon: <FaPaw  className="text-xl" />, // Icono para "Características"
      sectionId: "características", // ID de la sección correspondiente
    },
    {
      id: 2,
      link: "Nosotros",
      icon: <FaInfoCircle className="text-xl" />, // Icono para "Nosotros"
      sectionId: "nosotros", // ID de la sección correspondiente
    },
    {
      id: 3,
      link: "Descargar",
      icon: <FaDownload className="text-xl" />, // Icono para "Descargar"
      sectionId: "descargar", // ID de la sección correspondiente
    },
  ];

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-[#305441]/20 bg-[#f3f4f6] fixed top-0 left-0 right-0 z-50">
      <Link className="flex items-center justify-center" href="/">
        <Image
          src="/logo-rounded.png"
          alt="Patitas Feliz Logo"
          width={48}
          height={48}
          className="w-12 h-12"
        />
        <span className="ml-2 text-2xl font-bold text-[#305441]">Patitas Feliz</span>
      </Link>

      {/* Navbar para pantallas grandes */}
      <nav className="hidden gap-6 ml-auto md:flex">
        {links.map(({ id, link, icon, sectionId }) => (
          <Link
            key={id}
            className={`flex items-center text-sm font-medium hover:underline underline-offset-4 text-[#305441] ${
              link === "Descargar" ? "bg-[#305441] text-white px-6 py-2 rounded-full hover:bg-[#1d3c2a]" : ""
            }`}
            href={`/#${sectionId}`} // Asegurarse de que siempre vaya a la ruta principal
          >
            <span className="mr-2">{icon}</span>
            {link}
          </Link>
        ))}
      </nav>

      {/* Botón de menú para pantallas pequeñas (alineado a la derecha) */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-[#305441] md:hidden ml-auto"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Menú desplegable (solo visible en pantallas pequeñas) */}
      {nav && (
        <ul className="flex flex-col justify-center items-start absolute top-16 left-0 w-full bg-[#305441] text-white p-4 rounded-b-lg shadow-lg">
          {links.map(({ id, link, icon, sectionId }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-4 text-xl flex items-center w-full ${
                link === "Descargar" ? "bg-[#1d3c2a] w-full text-center rounded-md" : ""
              }`}
            >
              <span className="mr-2">{icon}</span>
              <Link onClick={() => setNav(!nav)} href={`/#${sectionId}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
