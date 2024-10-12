import { createBrowserRouter } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'
import AlertDialogPage from '../pages/AlertDialogPage'
import NotificationPage from '../pages/NotificationPage'
import ModalPage from '../pages/ModalPage'
import WrapperContextPage from '../pages/WrapperContextPage'
import MainLayout from '../Layouts/MainLayout/MainLayout'
import Home from '../pages/Home'


const routes = [
	{
		path: '/',
		element: <Home/> 

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
