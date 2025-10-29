# 🔧 Configuración y Solución de Problemas de Testing

## ⚠️ Errores Conocidos y Soluciones

### 1. Errores de TypeScript en Tests

Los errores de TypeScript que ves en el IDE son **normales durante el desarrollo** y se resolverán cuando instales las dependencias.

**Errores comunes:**
- `Cannot find name 'jest'`
- `Cannot find name 'describe'`
- `Cannot find name 'it'`
- `Cannot find name 'expect'`

**Solución:** Estos errores desaparecerán después de ejecutar `npm install`.

### 2. Error de ESLint en jest.config.js

**Error:** `A 'require()' style import is forbidden`

**Explicación:** Este es un warning esperado. Jest usa CommonJS (`require`) por convención, no ES modules. **No afecta la funcionalidad de los tests.**

**Solución:** Puedes ignorar este warning o agregar una excepción en ESLint para archivos de configuración.

## 📦 Instalación

### Paso 1: Instalar Dependencias

```bash
npm install
```

Esto instalará:
- `jest` - Framework de testing
- `@testing-library/react` - Testing de componentes React
- `@testing-library/jest-dom` - Matchers adicionales
- `@testing-library/user-event` - Simulación de eventos
- `@types/jest` - Tipos de TypeScript para Jest
- `jest-environment-jsdom` - Entorno DOM para tests

### Paso 2: Verificar Instalación

```bash
npm test -- --version
```

Debería mostrar la versión de Jest instalada.

## 🚀 Ejecutar Tests

### Ejecutar todos los tests
```bash
npm test
```

### Ejecutar tests en modo watch (recomendado para desarrollo)
```bash
npm run test:watch
```

### Generar reporte de cobertura
```bash
npm run test:coverage
```

### Ejecutar un archivo específico
```bash
npm test Header.test.tsx
```

### Ejecutar tests con patrón
```bash
npm test -- --testNamePattern="BlogCard"
```

## 🐛 Solución de Problemas Comunes

### Problema: Tests fallan con "Cannot find module"

**Solución:**
```bash
# Limpiar caché de Jest
npm test -- --clearCache

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Problema: "ReferenceError: document is not defined"

**Causa:** El entorno de testing no está configurado correctamente.

**Solución:** Verifica que `jest.config.js` tenga:
```javascript
testEnvironment: 'jest-environment-jsdom'
```

### Problema: Mocks no funcionan

**Solución:**
```bash
# Asegúrate de que los mocks estén antes de los imports
jest.mock('@/lib/blogData', () => ({
  mockBlogPosts: [...]
}));

import Component from '@/component';
```

### Problema: Tests async fallan

**Solución:** Asegúrate de usar `async/await` correctamente:
```javascript
it('test async', async () => {
  const result = await asyncFunction();
  expect(result).toBe(expected);
});
```

## 📊 Estructura de Tests Actual

```
__tests__/
├── components/
│   ├── layout/
│   │   ├── Header.test.tsx ✅
│   │   └── Footer.test.tsx ✅
│   └── cards/
│       ├── BlogCard.test.tsx ✅
│       ├── ProjectCard.test.tsx ✅
│       └── TalkCard.test.tsx ✅
├── pages/
│   ├── HomePage.test.tsx ✅
│   ├── BlogPage.test.tsx ✅
│   ├── AboutPage.test.tsx ✅
│   └── BlogPostPage.test.tsx ✅
└── utils/
    ├── test-utils.tsx ✅
    └── mocks.ts ✅
```

## ✅ Checklist de Verificación

Antes de ejecutar los tests, verifica:

- [ ] `npm install` ejecutado correctamente
- [ ] Archivo `jest.config.js` existe
- [ ] Archivo `jest.setup.js` existe
- [ ] `package.json` tiene los scripts de test
- [ ] `tsconfig.json` incluye tipos de Jest
- [ ] Todos los archivos de test tienen extensión `.test.tsx`

## 🎯 Objetivos de Cobertura

Los tests están configurados con los siguientes umbrales mínimos:

- **Branches:** 70%
- **Functions:** 70%
- **Lines:** 80%
- **Statements:** 80%

Si la cobertura cae por debajo de estos valores, los tests fallarán.

## 📝 Notas Importantes

1. **Los errores de TypeScript en el IDE son temporales** - Se resolverán después de `npm install`

2. **El warning de ESLint en jest.config.js es normal** - Jest usa CommonJS por diseño

3. **Los tests usan mocks** - Los datos reales no se usan en tests para mantener consistencia

4. **Next.js 15+ requiere async components** - Los tests manejan esto correctamente con `await`

## 🆘 Ayuda Adicional

Si los tests siguen fallando después de seguir estos pasos:

1. Verifica que Node.js sea versión 18+
2. Limpia caché: `npm test -- --clearCache`
3. Revisa los logs de error completos
4. Verifica que no haya conflictos de versiones en `package.json`

## 📚 Recursos

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Next.js](https://nextjs.org/docs/testing)
