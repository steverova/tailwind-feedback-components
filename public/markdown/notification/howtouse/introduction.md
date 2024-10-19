## Folder Structure

The folder structure for implementing the notification 
system is as follows:

- **`/src`**
  - **`/components`**
    - **`/Notification`**
      - `NotificationStack.jsx`
      - `Notification.jsx`
      - `NotificationProvider.jsx`
      - `Types.jsx`

## Instructions

1. **Wrap your application with the `NotificationProvider`**:

   To start using notifications, you need to wrap your application with the 
   `NotificationProvider` component. Here's an example of how to do it:

   ```jsx
   import { NotificationProvider } from './Notification/NotificationProvider';

   function App() {
     return (
       <NotificationProvider setup={{
         maxNotifications: 10,
         position: 'bottom-right',
         animation: 'fadeScale'
       }}>
         <YourAppComponents />
       </NotificationProvider>
     );
   }

   ```

### Use the notificationHandler function:

You can use the notificationHandler function to 
display notifications. Here's an example of how to do it:


```jsx
import { useNotification } from './Notification/NotificationProvider';

function YourAppComponents() {
  const { notificationHandler } = useNotification();

  const onSubmit = async () => {
    // submit action and wait for response
    // if success
    await notificationHandler('Success!!', {
      type: 'success',
      behavior: 'autoHide',
      timeOut: 3000
    });
  };
}

```

You can use the closeNotification function to close a 
persistent notification. Here's an example of how to do it:


```jsx
import { useNotification } from './Notification/NotificationProvider';

function YourAppComponents() {
  const { notificationHandler, closeNotification } = useNotification();

  const onSubmit = async () => {
    // submit action and loading
    const id = await notificationHandler('Loading!!', {
      type: 'success',
      behavior: 'persistent',
    });

    // wait for response
    // if success
    closeNotification(id);
  };
}

```

