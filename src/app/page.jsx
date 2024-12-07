'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Search } from 'lucide-react';
import { Button } from './components/ui/button';
import { useState } from 'react';
import { FaAndroid, FaUsers,FaSpinner, FaClinicMedical, FaShieldAlt } from 'react-icons/fa';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);  // Activa el estado de carga

    // Simula el proceso de descarga (esto puede ser reemplazado por un proceso real)
    setTimeout(() => {
      setIsLoading(false);  // Después de 2 segundos, se finaliza la "descarga"
    }, 3000);
  };
  
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
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div>
              <h3 className="text-xl font-bold text-[#305441]">¿Qué es Patitas Feliz?</h3>
              <p className="text-gray-600">
                Patitas Feliz es una aplicación móvil que permite a los dueños de mascotas encontrar clínicas veterinarias cercanas y gestionar citas para sus mascotas.
              </p>
            </div>
            {/* FAQ Item 2 */}
            <div>
              <h3 className="text-xl font-bold text-[#305441]">¿Cómo puedo crear una cuenta?</h3>
              <p className="text-gray-600">
                Puedes crear una cuenta como dueño de mascota o dueño de clínica veterinaria mediante un proceso de registro fácil en la app. Solo ingresa tu correo electrónico, crea una contraseña y completa tu perfil.
              </p>
            </div>
            {/* FAQ Item 3 */}
            <div>
              <h3 className="text-xl font-bold text-[#305441]">¿Cómo agendar una cita en una clínica?</h3>
              <p className="text-gray-600">
                Para agendar una cita, solo selecciona una clínica disponible desde la lista de opciones, elige la mascota, la fecha y hora que más te convenga, y confirma la cita.
              </p>
            </div>
            {/* FAQ Item 4 */}
            <div>
              <h3 className="text-xl font-bold text-[#305441]">¿Puedo cancelar o reprogramar una cita?</h3>
              <p className="text-gray-600">
                Sí, puedes cancelar o reprogramar tus citas directamente desde la app, siempre y cuando la clínica lo permita.
              </p>
            </div>
            {/* FAQ Item 5 */}
            <div>
              <h3 className="text-xl font-bold text-[#305441]">¿Patitas Feliz tiene algún costo?</h3>
              <p className="text-gray-600">
                La descarga y el uso básico de la app es gratuita. Sin embargo, algunas clínicas pueden cobrar por consultas y otros servicios, que deben ser consultados directamente con ellas.
              </p>
            </div>
            {/* FAQ Item 6 */}
            <div>
              <h3 className="text-xl font-bold text-[#305441]">¿Puedo confiar en las clínicas que están en la aplicación?</h3>
              <p className="text-gray-600">
                Las clínicas están verificadas y han sido registradas a través de nuestro proceso de validación. Sin embargo, siempre te recomendamos leer y verificar la información de las veterinarias antes de agendar una cita.
              </p>
            </div>
            {/* FAQ Item 7 */}
            <div>
              <h3 className="text-xl font-bold text-[#305441]">¿Puedo contactar con las clínicas directamente?</h3>
              <p className="text-gray-600">
                Sí, a través de la app puedes obtener los datos de contacto de la clínica veterinaria para que puedas comunicarte directamente si es necesario.
              </p>
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
          <a
            href="/apk/PatitasFelizApp.apk"  // Asegúrate de tener el archivo APK en la ruta correcta
            className="flex items-center justify-center bg-[#51a393] text-white text-xl px-8 py-4 rounded-lg shadow-lg hover:bg-[#58c3ad] transition-all duration-300 transform hover:scale-105 active:scale-95"
            download
            onClick={handleDownload}  // Inicia el proceso de descarga al hacer clic
          >
            {/* Si está cargando, mostrar el spinner, de lo contrario, mostrar el icono de Android */}
            {isLoading ? (
              <FaSpinner className="mr-3 text-2xl animate-spin" /> // Spinner de carga
            ) : (
              <FaAndroid className="mr-3 text-2xl" /> // Icono de Android normal
            )}
            {isLoading ? 'Procesando...' : 'Descargar para Android'}
          </a>
        </div>
      </div>
    </section>
    </div>
  );
}
