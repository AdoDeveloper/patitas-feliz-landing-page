'use client'
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaCogs, FaComments, FaInfoCircle, FaDownload } from "react-icons/fa"; // Importa los iconos

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Características",
      icon: <FaCogs className="text-xl" />, // Icono para "Características"
    },
    {
      id: 2,
      link: "Testimonios",
      icon: <FaComments className="text-xl" />, // Icono para "Testimonios"
    },
    {
      id: 3,
      link: "Nosotros",
      icon: <FaInfoCircle className="text-xl" />, // Icono para "Nosotros"
    },
    {
      id: 4,
      link: "Descargar",
      icon: <FaDownload className="text-xl" />, // Icono para "Descargar"
    },
  ];

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-[#305441]/20 bg-[#f3f4f6]">
      <Link className="flex items-center justify-center" href="#">
        <Image
          src="/logo-rounded.png"
          alt="Patitas Feliz Logo"
          width={48}
          height={48}
          className="h-12 w-12"
        />
        <span className="ml-2 text-2xl font-bold text-[#305441]">Patitas Feliz</span>
      </Link>

      {/* Navbar para pantallas grandes */}
      <nav className="ml-auto hidden md:flex gap-6">
        {links.map(({ id, link, icon }) => (
          <Link
            key={id}
            className={`flex items-center text-sm font-medium hover:underline underline-offset-4 text-[#305441] ${
              link === "Descargar" ? "bg-[#305441] text-white px-6 py-2 rounded-full hover:bg-[#1d3c2a]" : ""
            }`}
            href={`#${link.toLowerCase()}`}
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
          {links.map(({ id, link, icon }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-4 text-2xl flex items-center w-full ${
                link === "Descargar" ? "bg-[#1d3c2a] w-full text-center rounded-md" : ""
              }`}
            >
              <span className="mr-2">{icon}</span>
              <Link onClick={() => setNav(!nav)} href={`#${link.toLowerCase()}`}>
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
