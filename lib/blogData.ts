export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  slug: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      title: string;
      paragraphs: string[];
    }[];
  };
}

// Mock data completo de blog posts
export const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Introducción a Next.js 15",
    summary: "Descubre las nuevas características y mejoras de Next.js 15 para desarrollo web moderno.",
    slug: "introduccion-nextjs-15",
    author: "Juan Pérez",
    date: "25 de octubre, 2025",
    readTime: "5 min de lectura",
    featured: true,
    content: {
      intro: "Next.js 15 trae consigo una serie de mejoras significativas que transforman la manera en que desarrollamos aplicaciones web modernas. En este artículo, exploraremos las características más destacadas de esta nueva versión.",
      sections: [
        {
          title: "Mejoras en el Rendimiento",
          paragraphs: [
            "Una de las principales mejoras de Next.js 15 es el incremento en el rendimiento general de las aplicaciones. El nuevo compilador optimizado reduce significativamente los tiempos de construcción y mejora la experiencia de desarrollo.",
            "Además, se han implementado técnicas avanzadas de caché que permiten cargas más rápidas y una mejor experiencia para el usuario final."
          ]
        },
        {
          title: "Server Components Mejorados",
          paragraphs: [
            "Los React Server Components han recibido mejoras sustanciales, permitiendo una integración más fluida entre componentes del servidor y del cliente. Esto resulta en aplicaciones más eficientes y fáciles de mantener."
          ]
        },
        {
          title: "Nueva API de Routing",
          paragraphs: [
            "El sistema de routing ha sido refinado para ofrecer mayor flexibilidad y control. Las nuevas características incluyen mejores capacidades de middleware y un manejo más intuitivo de rutas dinámicas."
          ]
        },
        {
          title: "Conclusión",
          paragraphs: [
            "Next.js 15 representa un paso importante en la evolución del framework. Con estas mejoras, los desarrolladores pueden crear aplicaciones más rápidas, eficientes y escalables que nunca."
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: "TypeScript para principiantes",
    summary: "Aprende los fundamentos de TypeScript y cómo mejora tu código JavaScript.",
    slug: "typescript-principiantes",
    author: "María García",
    date: "20 de octubre, 2025",
    readTime: "7 min de lectura",
    featured: false,
    content: {
      intro: "TypeScript se ha convertido en una herramienta esencial para el desarrollo web moderno. En esta guía, aprenderás los conceptos básicos que necesitas para empezar a usar TypeScript en tus proyectos.",
      sections: [
        {
          title: "¿Qué es TypeScript?",
          paragraphs: [
            "TypeScript es un superset de JavaScript que añade tipado estático opcional al lenguaje. Esto significa que puedes definir tipos para tus variables, funciones y objetos, lo que ayuda a prevenir errores en tiempo de desarrollo.",
            "Desarrollado por Microsoft, TypeScript se compila a JavaScript puro, por lo que es compatible con cualquier navegador o entorno que ejecute JavaScript."
          ]
        },
        {
          title: "Ventajas del Tipado Estático",
          paragraphs: [
            "El tipado estático te permite detectar errores antes de ejecutar el código. Tu editor puede advertirte sobre posibles problemas mientras escribes, mejorando significativamente la productividad.",
            "Además, el autocompletado y la documentación inline se vuelven mucho más precisos, facilitando el trabajo en proyectos grandes."
          ]
        },
        {
          title: "Primeros Pasos",
          paragraphs: [
            "Comenzar con TypeScript es sencillo. Solo necesitas instalar el compilador y crear tu primer archivo .ts. La curva de aprendizaje es suave si ya conoces JavaScript."
          ]
        },
        {
          title: "Conclusión",
          paragraphs: [
            "TypeScript mejora la calidad del código y la experiencia de desarrollo. Es una inversión que vale la pena para cualquier proyecto JavaScript moderno."
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "Tailwind CSS en proyectos reales",
    summary: "Guía práctica para implementar Tailwind CSS en tus aplicaciones.",
    slug: "tailwind-css-proyectos",
    author: "Carlos Rodríguez",
    date: "18 de octubre, 2025",
    readTime: "6 min de lectura",
    featured: false,
    content: {
      intro: "Tailwind CSS ha revolucionado la forma en que escribimos estilos en nuestras aplicaciones web. En este artículo, exploraremos cómo implementarlo efectivamente en proyectos reales.",
      sections: [
        {
          title: "Filosofía Utility-First",
          paragraphs: [
            "Tailwind adopta un enfoque utility-first, donde compones diseños usando clases de utilidad predefinidas. Esto puede parecer extraño al principio, pero resulta en un desarrollo más rápido y consistente.",
            "A diferencia de frameworks como Bootstrap, Tailwind no impone un diseño específico, dándote total libertad creativa."
          ]
        },
        {
          title: "Configuración y Personalización",
          paragraphs: [
            "Tailwind es altamente personalizable. Puedes extender el tema predeterminado, agregar tus propias utilidades y configurar todo según las necesidades de tu proyecto.",
            "El archivo de configuración te permite definir colores, espaciados, breakpoints y mucho más."
          ]
        },
        {
          title: "Optimización para Producción",
          paragraphs: [
            "Tailwind incluye PurgeCSS integrado que elimina todas las clases no utilizadas en producción, resultando en archivos CSS extremadamente pequeños."
          ]
        },
        {
          title: "Conclusión",
          paragraphs: [
            "Tailwind CSS es una herramienta poderosa que, una vez dominada, puede acelerar significativamente tu flujo de trabajo de desarrollo frontend."
          ]
        }
      ]
    }
  },
  {
    id: 4,
    title: "React Server Components",
    summary: "Entiende cómo funcionan los Server Components en React y Next.js.",
    slug: "react-server-components",
    author: "Ana Martínez",
    date: "15 de octubre, 2025",
    readTime: "8 min de lectura",
    featured: false,
    content: {
      intro: "Los React Server Components representan un cambio fundamental en cómo construimos aplicaciones React. Permiten renderizar componentes en el servidor sin enviar JavaScript al cliente.",
      sections: [
        {
          title: "¿Qué son los Server Components?",
          paragraphs: [
            "Los Server Components son componentes React que se ejecutan exclusivamente en el servidor. No se envía JavaScript al cliente para estos componentes, lo que reduce el tamaño del bundle significativamente.",
            "Pueden acceder directamente a bases de datos, sistemas de archivos y otros recursos del servidor sin necesidad de APIs intermedias."
          ]
        },
        {
          title: "Beneficios Principales",
          paragraphs: [
            "Reducción dramática del tamaño del bundle JavaScript enviado al cliente. Mejor rendimiento inicial de carga. Acceso directo a recursos del servidor sin necesidad de crear endpoints API.",
            "Los datos se obtienen más cerca de su fuente, reduciendo la latencia y mejorando el rendimiento general."
          ]
        },
        {
          title: "Cuándo Usarlos",
          paragraphs: [
            "Usa Server Components para contenido estático, layouts, y cualquier componente que no requiera interactividad del cliente. Para componentes interactivos, sigue usando Client Components."
          ]
        },
        {
          title: "Conclusión",
          paragraphs: [
            "Los Server Components son el futuro de React. Ofrecen mejoras significativas en rendimiento y experiencia de desarrollo."
          ]
        }
      ]
    }
  },
  {
    id: 5,
    title: "Optimización de rendimiento en React",
    summary: "Técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React.",
    slug: "optimizacion-rendimiento-react",
    author: "Luis Fernández",
    date: "12 de octubre, 2025",
    readTime: "9 min de lectura",
    featured: false,
    content: {
      intro: "El rendimiento es crucial para la experiencia del usuario. En este artículo, exploraremos técnicas avanzadas para optimizar tus aplicaciones React y mantenerlas rápidas y responsivas.",
      sections: [
        {
          title: "Memoización con useMemo y useCallback",
          paragraphs: [
            "React re-renderiza componentes cuando su estado o props cambian. useMemo y useCallback te permiten memorizar valores y funciones para evitar cálculos innecesarios.",
            "Usa useMemo para valores computados costosos y useCallback para funciones que pasas como props a componentes hijos."
          ]
        },
        {
          title: "Code Splitting y Lazy Loading",
          paragraphs: [
            "Divide tu aplicación en chunks más pequeños que se cargan bajo demanda. React.lazy y Suspense hacen esto simple y efectivo.",
            "Esto reduce el tamaño inicial del bundle y mejora el tiempo de carga inicial de tu aplicación."
          ]
        },
        {
          title: "Virtualización de Listas",
          paragraphs: [
            "Para listas largas, renderiza solo los elementos visibles en pantalla. Librerías como react-window hacen esto fácil y eficiente."
          ]
        },
        {
          title: "Conclusión",
          paragraphs: [
            "La optimización es un proceso continuo. Mide, identifica cuellos de botella y aplica las técnicas apropiadas para cada caso."
          ]
        }
      ]
    }
  },
  {
    id: 6,
    title: "Testing con Jest y React Testing Library",
    summary: "Aprende a escribir tests efectivos para tus componentes React.",
    slug: "testing-jest-react",
    author: "Sofia López",
    date: "10 de octubre, 2025",
    readTime: "10 min de lectura",
    featured: false,
    content: {
      intro: "Los tests son esenciales para mantener la calidad del código. Jest y React Testing Library proporcionan las herramientas necesarias para escribir tests efectivos y mantenibles.",
      sections: [
        {
          title: "Filosofía de Testing Library",
          paragraphs: [
            "React Testing Library promueve tests que se parecen a cómo los usuarios interactúan con tu aplicación. En lugar de probar detalles de implementación, pruebas el comportamiento.",
            "Esto resulta en tests más robustos que no se rompen con refactorizaciones internas."
          ]
        },
        {
          title: "Escribiendo tu Primer Test",
          paragraphs: [
            "Comienza con tests simples que verifican que los componentes se renderizan correctamente. Luego, añade tests para interacciones del usuario como clicks y entrada de texto.",
            "Usa queries como getByRole y getByText que reflejan cómo los usuarios encuentran elementos."
          ]
        },
        {
          title: "Mocking y Async Testing",
          paragraphs: [
            "Jest facilita el mocking de módulos y funciones. Para operaciones asíncronas, usa waitFor y findBy queries para esperar cambios en el DOM."
          ]
        },
        {
          title: "Conclusión",
          paragraphs: [
            "Los tests bien escritos te dan confianza para refactorizar y agregar nuevas características sin miedo a romper funcionalidad existente."
          ]
        }
      ]
    }
  }
];
