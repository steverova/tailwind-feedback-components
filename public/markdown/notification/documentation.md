This set of components allows you to manage and display a stack of animated notifications in a React application. It includes a context provider (`NotificationProvider`) that facilitates notification management from anywhere in the application.

## Third-Party Libraries Used

```bash
pnpm add nanoid @react-spring/web lucide-react tailwindcss
```

## Notification & NotificationStack

| Library            | Purpose                                                            |
| ------------------- | ------------------------------------------------------------------ |
| `nanoid`            | Generates unique IDs for each notification                          |
| `@react-spring/web` | Handles animations for notifications and the stack                  |
| `lucide-react`      | A set of SVG icons used in the notification design                 |
| `tailwind`          | Style provider                                                     |

## Editable Props

### Configuration Options (within `notificationHandler`)

| Prop         | Type      | Description                                                                                                     | Default     |
| ------------ | --------- | --------------------------------------------------------------------------------------------------------------- | ----------- |
| `type`       | `string`  | Type of notification (`success`, `info`, `warning`, `danger`, `ok`). This adjusts the color and icon of the notification. | `'info'`    |
| `variant`    | `string`  | Style of the notification (`filled`, `outlined`, `regular`).                                                  | `'regular'` |
| `behavior`   | `string`  | Behavior of the notification (`autoHide`, `persistent`).                                                       | `'autoHide'` |
| `timeOut`    | `number`  | Duration of the notification (in milliseconds) if not persistent.                                             | `3000`      |

### `NotificationProvider` Component

| Prop    | Type     | Description                                               | Default |
| ------- | -------- | --------------------------------------------------------- | ------- |
| `setup` | `object` | Initial configuration for the notification stack.        | `{}`    |

#### Configuration Options (`setup`)

| Prop               | Type     | Description                                                                                  | Default          |
| ------------------ | -------- | -------------------------------------------------------------------------------------------- | ---------------- |
| `maxNotifications` | `number` | Maximum number of notifications visible on the screen at once.                             | `3`              |
| `position`         | `string` | Position of the stack on the screen (`top-left`, `top-right`, `bottom-left`, `bottom-right`). | `'bottom-right'` |
| `animation`        | `string` | Type of animation for notifications (`fadeScale`, `slideHorizontal`, `bounce`, `colorFade`, `slideUp`, `rotateFade`). | `'fadeScale'`    |

## Available Animations

| Name               | Description                                                                                     |
| -----------------  | ------------------------------------------------------------------------------------------------|
| `fadeScale`        | The notification scales from a smaller size to its normal size with a fade transition.       |
| `slideHorizontal`  | The notification slides in from the left and exits to the right with a fade transition.      |
| `bounce`           | The notification enters with a vertical bounce effect.                                        |
| `colorFade`        | A fade transition combined with a background color change.                                     |
| `slideUp`          | The notification slides in from the bottom and moves upward with a fade transition.           |
| `rotateFade`       | The notification rotates while appearing and disappearing with a fade transition.             |



