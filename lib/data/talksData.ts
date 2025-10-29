export interface Talk {
  id: number;
  title: string;
  summary: string;
  thumbnail: string;
  link: string;
}

export const mockTalks: Talk[] = [
  {
    id: 1,
    title: "El futuro del desarrollo web con React Server Components",
    summary: "Exploramos las nuevas capacidades de React Server Components y cómo están transformando la arquitectura de aplicaciones web modernas.",
    thumbnail: "/placeholder-talk.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "TypeScript avanzado: Patrones y mejores prácticas",
    summary: "Descubre patrones avanzados de TypeScript que mejorarán la calidad y mantenibilidad de tu código en proyectos empresariales.",
    thumbnail: "/placeholder-talk.jpg",
    link: "#"
  }
];
