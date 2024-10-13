# Notification & NotificationStack

Este conjunto de componentes permite manejar y mostrar un stack de notificaciones animadas en una aplicación React. Se incluye un proveedor de contexto (`NotificationProvider`) que facilita la gestión de notificaciones desde cualquier parte de la aplicación.

## Librerías de terceros utilizadas

| Librería            | Propósito                                                         |
| ------------------- | ----------------------------------------------------------------- |
| `nanoid`            | Generación de IDs únicos para cada notificación                   |
| `@react-spring/web` | Manejo de animaciones para las notificaciones y el stack          |
| `lucide-react`      | Conjunto de íconos SVG utilizados en el diseño de la notificación |
| `tailwind`          | Proveddor de estilos 

## Props que puedes editar

#### Opciones de configuración (dentro de `notificationHandler`)

| Prop         | Tipo      | Descripción                                                                                                    | Default     |
| ------------ | --------- | -------------------------------------------------------------------------------------------------------------- | ----------- |
| `type`       | `string`  | Tipo de notificación (`success`, `info`, `warning`, `danger`, `ok`). Esto ajusta el color e ícono de la notificación. | `'info'`    |
| `variant`    | `string`  | Estilo de la notificación (`filled`, `outlined`, `regular`).                                                   | `'regular'` |
| `behavior`   | `string`  | Comportamiento de la notificación (`autoHide`, `persistent`).                                                | `'autoHide'` |
| `timeOut`    | `number`  | Duración de la notificación (en milisegundos) si no es persistente.                                          | `3000`      |



### Proveedor `NotificationProvider`

| Prop    | Tipo     | Descripción                                            | Default |
| ------- | -------- | ------------------------------------------------------ | ------- |
| `setup` | `object` | Configuración inicial para el stack de notificaciones. | `{}`    |

#### Opciones de configuración (`setup`)

| Prop               | Tipo     | Descripción                                                                                 | Default          |
| ------------------ | -------- | ------------------------------------------------------------------------------------------- | ---------------- |
| `maxNotifications` | `number` | Número máximo de notificaciones visibles en pantalla a la vez.                              | `3`              |
| `position`         | `string` | Posición del stack en la pantalla (`top-left`, `top-right`, `bottom-left`, `bottom-right`). | `'bottom-right'` |
| `animation`        | `string` | Tipo de animación para las notificaciones (`fadeScale`, `slideHorizontal`, `bounce`,`colorFade`,`slideUp`,`rotateFade`).             | `'fadeScale'`    |

## Animaciones disponibles

| Nombre            | Descripción                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| `fadeScale`       | La notificación se escala desde un tamaño menor hasta su tamaño normal con una transición de opacidad. |
| `slideHorizontal` | La notificación entra desde la izquierda y sale hacia la derecha con transición de opacidad.           |
| `bounce`          | La notificación entra con un rebote vertical hacia abajo.                                              |
| `colorFade`       | Transición de opacidad junto con un cambio de color de fondo.                                          |
| `slideUp`         | La notificación entra desde abajo y se mueve hacia arriba con transición de opacidad.                  |
| `rotateFade`      | La notificación rota mientras aparece y desaparece con una transición de opacidad.                     |


