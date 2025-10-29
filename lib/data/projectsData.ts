export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico con Next.js y Stripe",
    image: "/placeholder-project.jpg"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con React y TypeScript",
    image: "/placeholder-project.jpg"
  },
  {
    id: 3,
    title: "Portfolio Generator",
    description: "Generador de portfolios con plantillas personalizables",
    image: "/placeholder-project.jpg"
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Dashboard de análisis con visualización de datos en tiempo real",
    image: "/placeholder-project.jpg"
  }
];
