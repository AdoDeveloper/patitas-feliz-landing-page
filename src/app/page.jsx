'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Search } from 'lucide-react';
import { Button } from './components/ui/button';
import { useState } from 'react';
import { FaAndroid, FaUsers, FaClinicMedical, FaShieldAlt } from 'react-icons/fa';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="w-full pt-20 pb-12 md:py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl tracking-tighter sm:text-5xl text-[#305441] font-extrabold">
                La mejor manera de cuidar a tus mascotas
              </h1>
              <p className="max-w-md text-gray-600 md:text-xl">
                Con Patitas Feliz, encuentra veterinarios, organiza citas y mantén un registro médico de tus mascotas.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                className="bg-[#305441] text-white hover:bg-[#2A4A3A]"
                onClick={() => document.getElementById('descargar').scrollIntoView({ behavior: 'smooth' })}
              >
                Descargar Ahora
              </Button>

              <Button
                variant="outline"
                className="border-[#305441] text-[#305441] hover:bg-[#305441]/10"
                onClick={() => document.getElementById('nosotros').scrollIntoView({ behavior: 'smooth' })}
              >
                Conoce Más
              </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/hero-image.jpg"
                alt="App Preview"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section id="características" className="w-full py-12 bg-white md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-[#305441] mb-12">Características Principales</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="max-w-xs p-6 mx-auto text-center bg-white rounded-lg shadow-lg">
              <Calendar className="h-12 w-12 text-[#6BD8C2]" />
              <h3 className="text-xl font-bold text-[#305441]">Agenda Citas</h3>
              <p className="text-gray-600">Programa y gestiona citas con veterinarios de forma fácil.</p>
            </div>
            {/* Card 2 */}
            <div className="max-w-xs p-6 mx-auto text-center bg-white rounded-lg shadow-lg">
              <MapPin className="h-12 w-12 text-[#6BD8C2]" />
              <h3 className="text-xl font-bold text-[#305441]">Encuentra Clínicas</h3>
              <p className="text-gray-600">Ubica clínicas cercanas con solo un clic.</p>
            </div>
            {/* Card 3 */}
            <div className="max-w-xs p-6 mx-auto text-center bg-white rounded-lg shadow-lg">
              <Search className="h-12 w-12 text-[#6BD8C2]" />
              <h3 className="text-xl font-bold text-[#305441]">Historial Médico</h3>
              <p className="text-gray-600">Registra y consulta el historial médico de tus mascotas.</p>
            </div>
            {/* Card 4 */}
            <div className="max-w-xs p-6 mx-auto text-center bg-white rounded-lg shadow-lg">
              <FaUsers className="h-12 w-12 text-[#6BD8C2]" />
              <h3 className="text-xl font-bold text-[#305441]">Conexión</h3>
              <p className="text-gray-600">Conecta con otros dueños y profesionales.</p>
            </div>
            {/* Card 5 */}
            <div className="max-w-xs p-6 mx-auto text-center bg-white rounded-lg shadow-lg">
              <FaClinicMedical className="h-12 w-12 text-[#6BD8C2]" />
              <h3 className="text-xl font-bold text-[#305441]">Servicios Premium</h3>
              <p className="text-gray-600">Acceso a servicios adicionales como grooming y vacunación.</p>
            </div>
            {/* Card 6 */}
            <div className="max-w-xs p-6 mx-auto text-center bg-white rounded-lg shadow-lg">
              <FaShieldAlt className="h-12 w-12 text-[#6BD8C2]" />
              <h3 className="text-xl font-bold text-[#305441]">Seguridad</h3>
              <p className="text-gray-600">Toda tu información protegida con tecnología avanzada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="nosotros" className="w-full py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-[#305441] mb-12">Preguntas Frecuentes</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* FAQ Card 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="font-bold text-lg text-[#305441]">¿Es gratuita la aplicación?</h3>
              <p>Sí, Patitas Feliz es completamente gratuita para los usuarios.</p>
            </div>
            {/* FAQ Card 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="font-bold text-lg text-[#305441]">¿Cómo encuentro clínicas?</h3>
              <p>Usa nuestra herramienta de búsqueda para localizar clínicas cercanas a tu ubicación.</p>
            </div>
            {/* FAQ Card 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="font-bold text-lg text-[#305441]">¿La información es segura?</h3>
              <p>¡Absolutamente! Tu información está protegida con encriptación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Extra */}
      <section id="extra-benefits" className="w-full py-16 md:py-24 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-[#305441] mb-12">
            ¿Por qué elegir Patitas Feliz?
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Extra Benefit Card 1 */}
            <div className="flex flex-col items-center p-6 space-y-4 bg-white rounded-lg shadow-lg">
              <FaUsers className="h-12 w-12 text-[#6BD8C2]" />
              <h3 className="text-xl font-bold text-[#305441]">Comunidad Activa</h3>
              <p className="text-center text-gray-600">Únete a muchos usuarios que ya cuidan de sus mascotas con nuestra app.</p>
            </div>
            {/* Extra Benefit Card 2 */}
            <div className="flex flex-col items-center p-6 space-y-4 bg-white rounded-lg shadow-lg">
              <FaClinicMedical className="h-12 w-12 text-[#6BD8C2]" />
              <h3 className="text-xl font-bold text-[#305441]">Soporte Veterinario</h3>
              <p className="text-center text-gray-600">Accede a servicios profesionales y confiables en todo momento.</p>
            </div>
            {/* Extra Benefit Card 3 */}
            <div className="flex flex-col items-center p-6 space-y-4 bg-white rounded-lg shadow-lg">
              <FaShieldAlt className="h-12 w-12 text-[#6BD8C2]" />
              <h3 className="text-xl font-bold text-[#305441]">Privacidad Garantizada</h3>
              <p className="text-center text-gray-600">Tu información está protegida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Descarga */}
      <section id="descargar" className="w-full py-16 md:py-24 bg-[#305441] text-white">
        <div className="container px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-5xl">Descarga la App Ahora</h2>
          <p className="mb-8 text-lg">¡Empieza hoy mismo y mejora la calidad de vida de tus mascotas!</p>
          <div className="flex justify-center">
            {/* Enlace para descargar el APK */}
            <a
              href="/apk/PatitasFelizApp.apk"  // Ruta del archivo APK en la carpeta "public/apk"
              className="flex items-center justify-center bg-[#6BD8C2] text-white text-xl px-8 py-4 rounded-lg shadow-lg hover:bg-[#5aaa9a] transition-all duration-300"
              download  // Atributo para forzar la descarga
            >
              <FaAndroid className="mr-3 text-2xl" />
              Descargar para Android
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
