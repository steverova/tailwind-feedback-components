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