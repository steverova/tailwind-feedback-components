import { RouterProvider } from 'react-router-dom'
import Examples from './Examples'
import MainLayout from './Layouts/MainLayout/MainLayout'
import router from './routes/routes'

const App = () => {
	return <RouterProvider router={router} />
}
export default App
