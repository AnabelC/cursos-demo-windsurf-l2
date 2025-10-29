# Testing Documentation

## 🧪 Test Suite Overview

Este proyecto utiliza **Jest** y **React Testing Library** para garantizar la calidad del código.

## 📦 Instalación de Dependencias

Antes de ejecutar los tests, instala las dependencias:

```bash
npm install
```

## 🚀 Comandos de Testing

### Ejecutar todos los tests
```bash
npm test
```

### Ejecutar tests en modo watch (desarrollo)
```bash
npm run test:watch
```

### Generar reporte de cobertura
```bash
npm run test:coverage
```

## 📊 Estructura de Tests

```
__tests__/
├── components/
│   ├── layout/
│   │   ├── Header.test.tsx       # Tests del Header
│   │   └── Footer.test.tsx       # Tests del Footer
│   └── cards/
│       ├── BlogCard.test.tsx     # Tests de BlogCard (3 variantes)
│       ├── ProjectCard.test.tsx  # Tests de ProjectCard
│       └── TalkCard.test.tsx     # Tests de TalkCard
├── pages/
│   ├── HomePage.test.tsx         # Tests de integración HomePage
│   ├── BlogPage.test.tsx         # Tests de integración BlogPage
│   ├── AboutPage.test.tsx        # Tests de integración AboutPage
│   └── BlogPostPage.test.tsx     # Tests con casos edge
└── utils/
    ├── test-utils.tsx            # Utilidades de testing
    └── mocks.ts                  # Datos mock para tests
```

## 🎯 Cobertura de Tests

### Componentes Testeados

**Layout Components:**
- ✅ Header: Navegación, links, logo
- ✅ Footer: Copyright, links sociales, seguridad

**Card Components:**
- ✅ BlogCard: 3 variantes (featured, grid, compact)
- ✅ ProjectCard: Renderizado de proyectos
- ✅ TalkCard: Renderizado de charlas

**Pages (Integration):**
- ✅ HomePage: Header, Footer, About Me, Blog posts
- ✅ BlogPage: Hero, grid de posts
- ✅ AboutPage: Projects, Talks
- ✅ BlogPostPage: Contenido, posts relacionados, error 404

### Objetivos de Cobertura

- **Componentes reutilizables**: 90%+
- **Páginas**: 70%+
- **Overall**: 80%+

## 🔍 Casos de Prueba Importantes

### BlogCard Component
- Renderizado correcto de 3 variantes
- Links correctos a posts
- Estilos aplicados correctamente

### BlogPostPage
- **Edge Case**: Post no encontrado → mensaje de error
- Posts relacionados excluyen el post actual
- Renderizado de contenido y secciones

### Layout Components
- Links externos con `target="_blank"` y `rel="noopener noreferrer"`
- Navegación funcional
- Estructura semántica correcta

## 📝 Escribir Nuevos Tests

### Ejemplo de Test de Componente

```tsx
import { render, screen } from '@/__tests__/utils/test-utils';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Ejemplo de Test con Mock

```tsx
import { mockBlogPost } from '@/__tests__/utils/mocks';

it('renders blog post', () => {
  render(<BlogCard post={mockBlogPost} />);
  expect(screen.getByText(mockBlogPost.title)).toBeInTheDocument();
});
```

## 🐛 Debugging Tests

### Ver tests que fallan
```bash
npm test -- --verbose
```

### Ejecutar un archivo específico
```bash
npm test Header.test.tsx
```

### Ejecutar tests con patrón
```bash
npm test -- --testNamePattern="BlogCard"
```

## 📚 Recursos

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## ⚠️ Notas Importantes

1. **ESLint Warning en jest.config.js**: El warning sobre `require()` es esperado. Jest usa CommonJS por convención.

2. **Mocks**: Los datos mock están centralizados en `__tests__/utils/mocks.ts` para reutilización.

3. **Async Components**: Next.js 15+ requiere componentes async para params. Los tests manejan esto correctamente.

4. **Coverage Threshold**: Los tests fallarán si la cobertura cae por debajo de los umbrales definidos en `jest.config.js`.
