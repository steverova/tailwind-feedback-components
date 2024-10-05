# Notification & NotificationStack

Este conjunto de componentes permite manejar y mostrar un stack de notificaciones animadas en una aplicación React. Incluye un proveedor de contexto (`NotificationProvider`) para gestionar y manejar las notificaciones en diferentes lugares de la aplicación.

## Librerías de terceros utilizadas

| Librería            | Propósito                                                                 |
|---------------------|---------------------------------------------------------------------------|
| `nanoid`            | Generación de IDs únicos para cada notificación                           |
| `@react-spring/web` | Manejo de animaciones para las notificaciones y el stack                  |
| `lucide-react`      | Conjunto de íconos SVG utilizados en el diseño de la notificación         |

## Tabla de Props

### Componente `Notification`

| Prop              | Tipo             | Descripción                                                                                             | Default            |
|-------------------|------------------|---------------------------------------------------------------------------------------------------------|--------------------|
| `closeNotification`| `function`       | Función que se llama cuando se cierra una notificación.                                                  | `()` => {}         |
| `options`         | `object`         | Objeto con las opciones para la notificación. Ver más detalles en la sección `options`.                   | `{}`               |
| `isOpen`          | `boolean`        | Determina si la notificación está abierta.                                                               | `false`            |

#### Detalles de `options`

| Prop              | Tipo             | Descripción                                                                                             | Default            |
|-------------------|------------------|---------------------------------------------------------------------------------------------------------|--------------------|
| `title`           | `string`         | Título de la notificación.                                                                               | `''`               |
| `message`         | `string`         | Mensaje de la notificación.                                                                              | `''`               |
| `type`            | `string`         | Tipo de notificación (`success`, `info`, `warning`, `error`). Cambia el color y el ícono de la notificación. | `'info'`           |
| `variant`         | `string`         | Estilo de la notificación (`filled`, `outlined`, `regular`).                                             | `'regular'`        |
| `timer`           | `number`         | Tiempo de vida de la notificación en segundos (si no es persistente).                                     | `3`                |
| `persistent`      | `boolean`        | Si es `true`, la notificación debe ser cerrada manualmente, si es `false` se cierra automáticamente.      | `false`            |
| `id`              | `string`         | ID único de la notificación, generado automáticamente.                                                   | `nanoid()`         |

### Componente `NotificationStack`

| Prop              | Tipo             | Descripción                                                                                             | Default            |
|-------------------|------------------|---------------------------------------------------------------------------------------------------------|--------------------|
| `closeNotification`| `function`       | Función para cerrar una notificación específica en el stack.                                             | `()` => {}         |
| `notifications`   | `array`          | Lista de notificaciones que se mostrarán en el stack.                                                    | `[]`               |
| `position`        | `string`         | Posición del stack en la pantalla (`top-left`, `top-right`, `bottom-left`, `bottom-right`).               | `'bottom-right'`   |
| `animation`       | `string`         | Animación que se aplica a las notificaciones (`fade`, `slide`, `scale`, etc.).                            | `'fadeScale'`      |

### Proveedor `NotificationProvider`

| Prop              | Tipo             | Descripción                                                                                             | Default            |
|-------------------|------------------|---------------------------------------------------------------------------------------------------------|--------------------|
| `children`        | `ReactNode`      | Componentes hijos que tendrán acceso al contexto de notificaciones.                                       | `null`             |
| `setup`           | `object`         | Configuración inicial para el stack de notificaciones.                                                   | `{}`               |

#### Detalles de `setup`

| Prop              | Tipo             | Descripción                                                                                             | Default            |
|-------------------|------------------|---------------------------------------------------------------------------------------------------------|--------------------|
| `maxNotifications`| `number`         | Número máximo de notificaciones visibles en pantalla a la vez.                                            | `3`                |
| `position`        | `string`         | Posición del stack en la pantalla (`top-left`, `top-right`, `bottom-left`, `bottom-right`).               | `'bottom-right'`   |
| `animation`       | `string`         | Tipo de animación para las notificaciones (`fadeScale`, `slide`, `fade`, etc.).                           | `'fadeScale'`      |

## Animaciones disponibles

El sistema de notificaciones incluye varias animaciones para mostrar y ocultar las notificaciones:

| Nombre             | Descripción                                                                                                  |
|--------------------|-------------------------------------------------------------------------------------------------------------|
| `fadeScale`        | La notificación se escala desde un tamaño menor hasta su tamaño normal con una transición de opacidad.        |
| `slideHorizontal`  | La notificación entra desde la izquierda y sale hacia la derecha con transición de opacidad.                  |
| `bounce`           | La notificación entra con un rebote vertical hacia abajo.                                                     |
| `colorFade`        | Transición de opacidad junto con un cambio de color de fondo.                                                 |
| `slideUp`          | La notificación entra desde abajo y se mueve hacia arriba con transición de opacidad.                         |
| `rotateFade`       | La notificación rota mientras aparece y desaparece con una transición de opacidad.                            |

## Funcionalidad básica

### Componente `Notification`

El componente `Notification` renderiza una única notificación con soporte para variantes visuales y diferentes tipos de notificación (éxito, error, advertencia, etc.). Las notificaciones pueden ser automáticas (cerrarse después de un tiempo) o persistentes (requieren ser cerradas manualmente).

### Componente `NotificationStack`

Este componente es el contenedor de las notificaciones. Muestra una lista de notificaciones animadas y organizadas en la pantalla, manejadas a través del contexto de notificaciones.

### Proveedor `NotificationProvider`

El `NotificationProvider` es el contexto que maneja el estado global de las notificaciones. Provee una función `notificationHandler` para agregar nuevas notificaciones y gestiona el cierre de las mismas. El proveedor controla las posiciones, límites y animaciones de las notificaciones.

## Uso

1. Envuelve tu aplicación con el `NotificationProvider`:

```jsx
import { NotificationProvider } from './NotificationProvider'

function App() {
  return (
    <NotificationProvider>
      <YourAppComponents />
    </NotificationProvider>
  )
}

export default App
