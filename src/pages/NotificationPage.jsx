import PopoverButton from '../components/PopverButton.jsx'
import { useState } from 'react'
import notifySvg from '../assets/svg/notify.svg'
import FlatRadioButton from '../components/FlatRadioButton.jsx'
import MarkdownRenderer from '../components/MarkdownRenderer.jsx'
import { NavList, Navigation } from '../components/Navigation/Navigation.jsx'
import { useNotification } from '../components/Notification/NotificationProvider.jsx'
import { WrapperContext } from '../components/WrapperContext/WrapperContext.jsx'
import { positionClasses } from '../components/helper'
import { types } from './Types.jsx'
import Tabs from '../components/Tabs.jsx'

const objectToArray = (values) => {
	return Object.entries(values).map(([key, value]) => {
		return {
			key,
			...value
		}
	})
}

const NotificationPage = () => {
	const [methods, setMethods] = useState('')
	const { notificationHandler, closeNotification } = useNotification()

	const sectionIds = ['demo', 'usage', 'documentation']

	const handleNotification = async (type) => {
		const notificationId = await notificationHandler(`${type} notification`, {
			type: type,
			variant: 'filled',
			behavior: 'autoHide'
		})

		setTimeout(() => {
			closeNotification(notificationId)
		}, 5000)
	}

	const array = objectToArray(types)

	return (
		<WrapperContext
			methods={{
				methods,
				setMethods
			}}>
			<div className='flex min-h-screen bg-emerald-50'>
				<Navigation sectionIds={sectionIds} />

				<div className='static flex-1 ml-0 lg:ml-32 overflow-y-auto'>
					<div className='sm:block md:hidden absolute top-15 left-0 right-0 bg-emerald-100 text-end z-50 me-12'>
						<div className='flex flex-row justify-end items-end content-end me-10 mt-1'>
							<PopoverButton title='Navigation'>
								<NavList sectionIds={sectionIds} />
							</PopoverButton>
						</div>
					</div>

					<div className=' text-center items-center'>
						<section
							id='demo'
							className='py-12'>
							<>
								<div className='flex justify-center items-baseline text-line'>
									<h1 className='text-5xl font-bold text-gray-800 mb-4'>
										Stay Notified{' '}
									</h1>
									<img
										className='h-16 md:hidden lg:block'
										src={notifySvg}
										alt='notify'
									/>
								</div>

								{/* Subtítulo */}
								<p className='text-xl text-gray-600 mb-8'>
									Click on any button to trigger different notifications.
								</p>

								<div className='flex flex-row flex-wrap gap-3 justify-center'>
									{Object.entries(positionClasses).map(([key, value]) => (
										<FlatRadioButton
											key={value}
											name={value}
											label={key}
											variant='regular'
										/>
									))}
								</div>

								<div className='flex flex-row flex-wrap gap-3 justify-center my-6'>
									{['filled', 'outlined', 'regular'].map((variant) => (
										<FlatRadioButton
											key={variant}
											name={variant}
											label={variant}
											variant={variant}
										/>
									))}
								</div>

								<div className='flex flex-row flex-wrap gap-4 justify-center'>
									{array.map((type) => (
										<button
											key={type.label}
											className={`px-6 py-3 rounded-lg ${type.color} ${type.hoverColor} font-semibold shadow-lg transform transition hover:scale-105`}
											type='button'
											onClick={() =>
												handleNotification(type.label.toLowerCase())
											}>
											{type.label}
										</button>
									))}
								</div>
							</>
						</section>

						<hr />

						<section
							id='usage'
							className='py-12'>
							<div className='min-h-screen '>
								<h2 className='text-3xl font-bold'>Notification Usage</h2>

								<Tabs
									tabs={[
										{
											id: 'tab-0',
											title: 'How to use',
											content: (
												<MarkdownRenderer path='/markdown/notification/HowToUse.md' />
											)
										},
										{
											id: 'tab-1',
											title: 'NotificationStack.jsx',
											content: (
												<MarkdownRenderer path='/markdown/notification/NotificationStack.md' />
											)
										},
										{
											id: 'tab-2',
											title: 'Notification.jsx',
											content: (
												<MarkdownRenderer path='/markdown/notification/Notification.md' />
											)
										},
										{
											id: 'tab-3',
											title: 'NotificationProvider.jsx',
											content: (
												<MarkdownRenderer path='/markdown/notification/NotificationProvider.md' />
											)
										},
										{
											id: 'tab-4',
											title: 'Types.jsx',
											content: <MarkdownRenderer path='/markdown/notification/Types.md' />
										}
									]}
								/>
							</div>
						</section>

						<hr />

						<section
							id='documentation'
							className='py-12'>
							<div className='min-h-screen '>
								<h2 className='text-3xl font-bold mb-6'>Documentation</h2>
								<MarkdownRenderer path='/markdown/notification/readme.md' />
							</div>
						</section>

						<hr />
					</div>
				</div>
			</div>
		</WrapperContext>
	)
}

export default NotificationPage
