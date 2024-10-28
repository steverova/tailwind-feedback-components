import { Suspense } from 'react'
import { lazy } from 'react'
import { useNavigate } from 'react-router-dom'
import { componentsData } from './helper'
const CardComponent = lazy(() => import('./Card'))

const Home = () => {
	const navigate = useNavigate()

	return (
		<section className='bg-gradient-to-b from-white to-green-200 min-h-screen flex flex-col items-center justify-center px-6 py-12 lg:py-20'>
			<div className='max-w-7xl w-full text-center'>
				<h1 className='text-5xl font-extrabold text-gray-800 mb-6'>
					Tailwind UI Components
				</h1>
				<p className='text-lg text-gray-600 mb-10'>
					A reusable collection of Tailwind CSS components
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<Suspense fallback={<div>Loading...</div>}>
						{componentsData.map((component) => (
							<CardComponent
								key={component.route}
								title={component.title}
								description={component.description}
								onClick={() => navigate(component.route)}
								isEnabled={component.isEnabled}
								buttonColor={component.buttonColor}
							/>
						))}
					</Suspense>
				</div>
			</div>
		</section>
	)
}

export default Home
