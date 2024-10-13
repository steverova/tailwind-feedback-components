import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout/MainLayout'
import AlertDialogPage from '../pages/AlertDialogPage'
import ButtonPage from '../pages/ButtonPage'
import DashboardPage from '../pages/DashboardPage'
import Home from '../pages/Home'
import ModalPage from '../pages/ModalPage'
import NotificationPage from '../pages/NotificationPage/NotificationPage'
import WrapperContextPage from '../pages/WrapperContextPage'

const routes = [
	{
		path: '/',
		element: <Home />
	},

	{
		path: 'pages',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <DashboardPage />
			},
			{
				path: 'button',
				element: <ButtonPage />
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
