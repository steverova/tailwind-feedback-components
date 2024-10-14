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