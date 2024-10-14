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