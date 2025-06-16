# Zara Challenge

Este proyecto es una aplicación web desarrollada con Next.js, React y TypeScript, estructurada siguiendo los principios de **Domain-Driven Design (DDD)**. Incluye tests automáticos con Jest y Testing Library.

---

## 🚀 ¿Cómo empezar?

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/kreudev/zara-challenge.git
   ```

2. **Crea tu archivo `.env`**
   - Copia el archivo `.env.example` o crea uno nuevo llamado `.env` en la raíz del proyecto.
   - Añade las variables necesarias para la API u otros servicios.

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Inicia la app en modo desarrollo:**
   ```bash
   npm run dev
   ```
   La app estará disponible en [http://localhost:3000](http://localhost:3000)

5. **Corre los tests:**
   ```bash
   npm run test
   ```
   Esto ejecutará todos los tests automáticos con Jest.

---

## 🗂️ Estructura del proyecto

El proyecto está organizado siguiendo los principios de **Domain-Driven Design** para separar claramente las responsabilidades y facilitar la escalabilidad y el mantenimiento.

```
├── app/                  # Páginas y rutas de Next.js (App Router)
├── services/             # Casos de uso (lógica de negocio)
│   └── use-cases/        # Ej: getProducts, getProductById
├── components/           # Componentes comunes y reutilizables (SearchBar, LoadingBar, etc)
├── context/             # Contextos de React para el estado global (ej: CartContext)
├── domain/              # Capa de dominio
│   ├── entities/         # Entidades principales del dominio
│   ├── value-objects/    # Objetos de valor (Price, Color, Storage, etc)
│   └── interfaces.ts     # Interfaces de dominio (Product, ApiProduct, etc)
├── hooks/               # Custom hooks de React (useFetch, useDebounce, etc)
├── icons/               # Iconos SVG y componentes de iconos
├── infrastructure/      # Adaptadores y persistencia
│   ├── api/             # Llamadas a APIs externas
│   └── persistence/     # Persistencia local (localStorage)
├── screens/             # Componentes principales de cada página
│   ├── cart/            # Componentes de la página del carrito
│   ├── product_list/    # Componentes de la página de listado
│   ├── product_detail/  # Componentes de la página de detalle
│   └── ...
├── test/               # Mocks y utilidades para testing
├── utils/              # Utilidades y helpers generales
├── public/             # Archivos estáticos
├── styles/             # Estilos globales
├── jest.config.js/ts   # Configuración de Jest para tests
├── tsconfig.json       # Configuración de TypeScript
└── package.json        # Scripts y dependencias
```

### 📁 Estructura de Screens y Server/Client Components

La carpeta `screens/` contiene los componentes principales de cada página, separando la lógica de la ruta (`app/`) de la implementación. Esta separación permite:

1. **Mejor organización**: Cada screen puede tener su propia estructura de carpetas con componentes, hooks, y estilos.
2. **Separación de responsabilidades**: 
   - Las páginas en `app/` se enfocan en la obtención de datos y el routing
   - Los componentes en `screens/` manejan la UI y la lógica de cliente

#### 🔄 Server y Client Components

En Next.js 13+, todos los componentes son Server Components por defecto. La directiva `'use client'` se usa cuando un componente necesita:

1. **Hooks de React**: 
   - `useState`, `useEffect`, `useContext`, etc.
   - Custom hooks que usen hooks de React
   - Ejemplo: `useCart` para el contexto del carrito

2. **Interactividad del cliente**:
   - Event listeners (`onClick`, `onChange`, etc.)
   - Manipulación del DOM
   - APIs del navegador

3. **Optimización de rendimiento**:
   - Usamos `dynamic imports` para componentes cliente pesados
   - Esto permite que el servidor renderice la estructura básica mientras el cliente carga los componentes interactivos

---

## 🧪 Testing

- Todos los tests están escritos con **Jest** y **@testing-library/react**.
- Para correr los tests:
  ```bash
  npm run test
  ```

---

## 📝 Notas adicionales

- El proyecto está preparado para escalar y seguir creciendo, gracias a la separación de capas y el uso de DDD.
- Si agregas nuevas entidades, casos de uso o adaptadores, sigue la estructura y filosofía del proyecto.

