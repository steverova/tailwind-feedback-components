# Notification & NotificationStack

Este conjunto de componentes permite manejar y mostrar un stack de notificaciones animadas en una aplicación React. Se incluye un proveedor de contexto (`NotificationProvider`) que facilita la gestión de notificaciones desde cualquier parte de la aplicación.

## Librerías de terceros utilizadas

| Librería            | Propósito                                                         |
| ------------------- | ----------------------------------------------------------------- |
| `nanoid`            | Generación de IDs únicos para cada notificación                   |
| `@react-spring/web` | Manejo de animaciones para las notificaciones y el stack          |
| `lucide-react`      | Conjunto de íconos SVG utilizados en el diseño de la notificación |

## Props que puedes editar

### Componente `Notification`

| Prop      | Tipo      | Descripción                                                                          | Default |
| --------- | --------- | ------------------------------------------------------------------------------------ | ------- |
| `options` | `object`  | Opciones personalizables para la notificación. Ver detalles en la siguiente sección. | `{}`    |
| `isOpen`  | `boolean` | Determina si la notificación está visible.                                           | `false` |

#### Opciones de configuración (`options`)

| Prop         | Tipo      | Descripción                                                                                                    | Default     |
| ------------ | --------- | -------------------------------------------------------------------------------------------------------------- | ----------- |
| `title`      | `string`  | Título de la notificación.                                                                                     | `''`        |
| `message`    | `string`  | Mensaje de la notificación.                                                                                    | `''`        |
| `type`       | `string`  | Tipo de notificación (`success`, `info`, `warning`, `error`). Esto ajusta el color e ícono de la notificación. | `'info'`    |
| `variant`    | `string`  | Estilo de la notificación (`filled`, `outlined`, `regular`).                                                   | `'regular'` |
| `timer`      | `number`  | Duración de la notificación (en segundos) si no es persistente.                                                | `3`         |
| `persistent` | `boolean` | Si es `true`, la notificación debe cerrarse manualmente, si es `false` se cierra automáticamente.              | `false`     |

### Componente `NotificationStack`

| Prop            | Tipo     | Descripción                                                                                    | Default          |
| --------------- | -------- | ---------------------------------------------------------------------------------------------- | ---------------- |
| `notifications` | `array`  | Lista de notificaciones que se mostrarán en el stack.                                          | `[]`             |
| `position`      | `string` | Posición del stack en la pantalla (`top-left`, `top-right`, `bottom-left`, `bottom-right`).    | `'bottom-right'` |
| `animation`     | `string` | Animación que se aplica a las notificaciones (`fadeScale`, `slideHorizontal`, `bounce`, etc.). | `'fadeScale'`    |

### Proveedor `NotificationProvider`

| Prop    | Tipo     | Descripción                                            | Default |
| ------- | -------- | ------------------------------------------------------ | ------- |
| `setup` | `object` | Configuración inicial para el stack de notificaciones. | `{}`    |

#### Opciones de configuración (`setup`)

| Prop               | Tipo     | Descripción                                                                                 | Default          |
| ------------------ | -------- | ------------------------------------------------------------------------------------------- | ---------------- |
| `maxNotifications` | `number` | Número máximo de notificaciones visibles en pantalla a la vez.                              | `3`              |
| `position`         | `string` | Posición del stack en la pantalla (`top-left`, `top-right`, `bottom-left`, `bottom-right`). | `'bottom-right'` |
| `animation`        | `string` | Tipo de animación para las notificaciones (`fadeScale`, `slide`, `fade`, etc.).             | `'fadeScale'`    |

## Animaciones disponibles

| Nombre            | Descripción                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| `fadeScale`       | La notificación se escala desde un tamaño menor hasta su tamaño normal con una transición de opacidad. |
| `slideHorizontal` | La notificación entra desde la izquierda y sale hacia la derecha con transición de opacidad.           |
| `bounce`          | La notificación entra con un rebote vertical hacia abajo.                                              |
| `colorFade`       | Transición de opacidad junto con un cambio de color de fondo.                                          |
| `slideUp`         | La notificación entra desde abajo y se mueve hacia arriba con transición de opacidad.                  |
| `rotateFade`      | La notificación rota mientras aparece y desaparece con una transición de opacidad.                     |

## Uso

1. Envuelve tu aplicación con el `NotificationProvider`:

```jsx
import { NotificationProvider } from './NotificationProvider'

function App() {
  return (
    <NotificationProvider setup={{
				maxNotifications: 10,
				position: 'bottom-right',
				animation: 'fadeScale'
			}}>>
      <YourAppComponents />
    </NotificationProvider>
  )
}

export default App

```

2. Usa el hook useNotification para disparar notificaciones desde cualquier lugar en tu aplicación:

```jsx

import { useNotification } from './NotificationProvider'

function MyComponent() {
  const { notificationHandler } = useNotification()

  const triggerNotification = () => {
    notificationHandler({
      title: 'Nueva notificación',
      message: 'Este es el mensaje de la notificación',
      type: 'success',
      variant: 'filled',
      persistent: false,
      autoHide: 5000
    })
  }

  return (
    <button onClick={triggerNotification}>
      Mostrar Notificación
    </button>
  )
}

```

