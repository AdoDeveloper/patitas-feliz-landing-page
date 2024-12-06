'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from './components/ui/card'
import { Calendar, MapPin, Search, Menu } from 'lucide-react'
import { Button } from './components/ui/button'
import { useState } from 'react' // Importamos useState para manejar el estado del menú

export default function LandingPage() {
  // Estado para controlar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alternamos la visibilidad del menú
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#EBE6DA]">

      {/* Menú desplegable (solo visible en pantallas pequeñas) */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 bg-[#EBE6DA] py-4">
          <Link 
            className="text-sm font-medium hover:underline underline-offset-4 text-[#305441]"
            href="#features"
          >
            Características
          </Link>
          <Link 
            className="text-sm font-medium hover:underline underline-offset-4 text-[#305441]"
            href="#testimonials"
          >
            Testimonios
          </Link>
          <Link 
            className="text-sm font-medium hover:underline underline-offset-4 text-[#305441]"
            href="#download"
          >
            Descargar
          </Link>
        </nav>
      )}

      <main className="flex-1">
        {/* Aquí va el contenido principal de la página */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-[#305441]">
                    Cuida a tus mascotas con Patitas Feliz
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Conecta con veterinarios, agenda citas y cuida la salud de tus mascotas de manera fácil y rápida.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button className="bg-[#305441] text-white hover:bg-[#2A4A3A]">
                    Descargar Ahora
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-[#305441] text-[#305441] hover:bg-[#305441]/10"
                  >
                    Conoce Más
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt="Patitas Feliz App Preview"
                  width={600}
                  height={600}
                  className="mx-auto rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Resto del contenido de la página (Features, Testimonials, Download, etc.) */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#305441]">
              Características Principales
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-[#EBE6DA]">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Calendar className="h-12 w-12 text-[#6BD8C2]" />
                  <h3 className="text-2xl font-bold text-center text-[#305441]">
                    Agenda Citas
                  </h3>
                  <p className="text-gray-600 text-center">
                    Programa visitas al veterinario con facilidad y recibe recordatorios.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#EBE6DA]">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <MapPin className="h-12 w-12 text-[#6BD8C2]" />
                  <h3 className="text-2xl font-bold text-center text-[#305441]">
                    Encuentra Clínicas
                  </h3>
                  <p className="text-gray-600 text-center">
                    Localiza las mejores clínicas veterinarias cerca de ti.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#EBE6DA]">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Search className="h-12 w-12 text-[#6BD8C2]" />
                  <h3 className="text-2xl font-bold text-center text-[#305441]">
                    Historial Médico
                  </h3>
                  <p className="text-gray-600 text-center">
                    Accede al historial médico de tus mascotas en cualquier momento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-[#8FC3B6]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">
              Lo que dicen nuestros usuarios
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "Patitas Feliz ha hecho que cuidar de mi perro sea mucho más fácil. ¡Ahora puedo encontrar veterinarios y agendar citas en minutos!"
                  </p>
                  <p className="font-semibold text-[#305441]">María G.</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    "Como veterinario, esta app me ha ayudado a organizar mejor mi agenda y conectar con más clientes. ¡Es una herramienta indispensable!"
                  </p>
                  <p className="font-semibold text-[#305441]">Dr. Carlos R.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-[#305441]">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-6">
              Descarga la app ahora
            </h2>
            <Button className="bg-[#6BD8C2] text-white text-xl px-6 py-3">
              Descargar para iOS
            </Button>
            <Button className="bg-[#6BD8C2] text-white text-xl px-6 py-3 mt-4 sm:mt-0 sm:ml-4">
              Descargar para Android
            </Button>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 px-4 md:px-6 border-t border-[#305441]/20">
        <div className="container flex flex-col gap-2 sm:flex-row items-center">
          <p className="text-xs text-[#305441]">© 2024 Patitas Feliz. Todos los derechos reservados.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-[#305441]" href="#">Términos de Servicio</Link>
            <Link className="text-xs hover:underline underline-offset-4 text-[#305441]" href="#">Privacidad</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
