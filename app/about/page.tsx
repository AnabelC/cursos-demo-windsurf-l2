import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/cards/ProjectCard";
import TalkCard from "@/components/cards/TalkCard";
import { mockProjects } from "@/lib/data/projectsData";
import { mockTalks } from "@/lib/data/talksData";
import { buttonStyles, spacing, textStyles } from "@/lib/styles";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* About Me Section */}
        <section className={spacing.container + " " + spacing.section}>
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Imagen de perfil */}
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                  <span className="text-gray-500 dark:text-gray-400">Foto de perfil</span>
                </div>
              </div>
              
              {/* Contenido */}
              <div>
                <h1 className={`${textStyles.heading2} mb-6`}>About me</h1>
                <p className={`mb-4 ${textStyles.body}`}>
                  Soy un desarrollador web apasionado por crear experiencias digitales 
                  excepcionales. Me especializo en tecnologías modernas como React, 
                  Next.js y TypeScript, con un enfoque en la calidad del código y la 
                  experiencia del usuario.
                </p>
                <p className={`mb-4 ${textStyles.body}`}>
                  Con varios años de experiencia en el desarrollo frontend y backend, 
                  disfruto construyendo aplicaciones escalables y mantenibles que 
                  resuelven problemas reales. Mi objetivo es siempre entregar soluciones 
                  que no solo funcionen bien, sino que también sean elegantes y eficientes.
                </p>
                <p className={`mb-6 ${textStyles.body}`}>
                  Cuando no estoy programando, me gusta compartir conocimientos a través 
                  de charlas técnicas, contribuir a proyectos open source y mantenerme 
                  actualizado con las últimas tendencias en desarrollo web. Creo firmemente 
                  en el aprendizaje continuo y en la colaboración dentro de la comunidad.
                </p>
                <Link href="#contact" className={buttonStyles.primary}>
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={`bg-gray-50 dark:bg-gray-900 ${spacing.section}`}>
          <div className={spacing.container}>
            <h2 className={`${textStyles.heading2} mb-8`}>Projects</h2>
            <div className={`grid grid-cols-2 md:grid-cols-4 ${spacing.gap.medium}`}>
              {mockProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Talks Section */}
        <section className={spacing.container + " " + spacing.section}>
          <h2 className={`${textStyles.heading2} mb-8`}>Talks</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 ${spacing.gap.medium}`}>
            {mockTalks.map((talk) => (
              <TalkCard key={talk.id} talk={talk} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
