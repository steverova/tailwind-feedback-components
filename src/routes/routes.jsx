import { createBrowserRouter } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import AlertDialogPage from '../pages/AlertDialogPage'
import NotificationPage from '../pages/NotificationPage'
import ModalPage from '../pages/ModalPage'
import WrapperContextPage from '../pages/WrapperContextPage'
import MainLayout from '../Layouts/MainLayout/MainLayout'

const routes = [
	{
		path: '/', // Ruta raíz que aplica el layout
		element: <MainLayout />, // MainLayout se aplica a todas las rutas hijas
		children: [
			{
				index: true, // Ruta raíz ("/") servirá DashboardPage
				element: <DashboardPage />
			},
			{
				path: 'alert-dialog',
				element: <AlertDialogPage />
			},
			{
				path: 'notification',
				element: <NotificationPage />
			},
			{
				path: 'modal',
				element: <ModalPage />
			},
			{
				path: 'wrapper-context',
				element: <WrapperContextPage />
			}
		]
	}
]

const router = createBrowserRouter(routes)

export default router
