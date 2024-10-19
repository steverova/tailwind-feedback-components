import { useState } from 'react'
import MarkdownRenderer from '../../components/MarkdownRenderer.jsx'
import { NavList, Navigation } from '../../components/Navigation/Navigation.jsx'
import PopoverButton from '../../components/PopverButton.jsx'

import { WrapperContext } from '../../components/WrapperContext/WrapperContext.jsx'

import Demo from './Demo.jsx'

const Tabs = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<div className='w-full'>
			<div className='flex border-b border-gray-200'>
				{tabs.map((tab, index) => (
					<button
						type='button'
						key={index}
						className={`hover:bg-emerald-100 hover:text-emerald-600 hover:border-white-500  px-4 py-2 text-sm font-medium focus:outline-none ${
							activeTab === index
								? 'border-b-2 border-emerald-500 text-emerald-500'
								: 'text-gray-600'
						}`}
						onClick={() => setActiveTab(index)}>
						{tab.title}
					</button>
				))}
			</div>
			<div className='p-4'>
				<div>{tabs[activeTab].content}</div>
			</div>
		</div>
	)
}

const NotificationPage = () => {
	const [methods, setMethods] = useState('')

	const sectionIds = ['demo', 'usage', 'documentation']

	const navigationMethods = {
		setMethods,
		methods
	}

	return (
		<WrapperContext methods={navigationMethods}>
			<div className='flex min-h-screen bg-emerald-50 mb-24 '>
				<Navigation sectionIds={sectionIds} />

				<div className='static flex-1 ml-0 lg:ml-32 overflow-y-auto'>
					<div className='sm:block md:hidden absolute top-15 left-0 right-0 bg-emerald-100 text-end z-50 me-12'>
						<div className='flex flex-row justify-end items-end content-end me-10 mt-1'>
							<PopoverButton title='Navigation'>
								<NavList sectionIds={sectionIds} />
							</PopoverButton>
						</div>
					</div>

					<div className=' text-center items-center container mx-auto'>
						<section
							id='demo'
							className='py-12'>
							<Demo />
						</section>

						<div >
							<Tabs
								tabs={[
									{
										id: 'tab-0',
										title: 'How to use',
										content: (
											<MarkdownRenderer path='/markdown/notification/howtouse/introduction.md' />
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
										content: (
											<MarkdownRenderer path='/markdown/notification/Types.md' />
										)
									}
								]}
							/>
						</div>

						<MarkdownRenderer path='/markdown/notification.md' />

						{/* <section
							id='usage'
							className=' bg-emerald-100 rounded-lg mx-2 lg:mx-12  py-6 mb-12 shadow-lg'>
							<div className='min-h-screen '>
								<h2 className='text-3xl font-bold'>Notification Usage</h2>

								<Tabs
									tabs={[
										{
											id: 'tab-0',
											title: 'How to use',
											content: (
												< >
													<MarkdownRenderer path='/markdown/notification.md' />
													<MarkdownRenderer path='/markdown/notification/howtouse/code01.md' />
													<MarkdownRenderer path='/markdown/notification/howtouse/introduction02.md' />
													<MarkdownRenderer path='/markdown/notification/howtouse/code02.md' />

													<MarkdownRenderer path='/markdown/notification/howtouse/introduction03.md' />

													<MarkdownRenderer path='/markdown/notification/howtouse/code03.md' />
												</>
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
											content: (
												<MarkdownRenderer path='/markdown/notification/Types.md' />
											)
										}
									]}
								/>
							</div>
						</section>

						<section
							id='documentation'
							className='bg-emerald-100 rounded-lg mx-2 lg:mx-12  py-6 mb-12 shadow-lg'>
							<div className='min-h-screen '>
								<h2 className='text-3xl font-bold mb-6'>Documentation</h2>
								<MarkdownRenderer path='/markdown/notification/readme.md' />
							</div>
						</section> */}

						<hr />
					</div>
				</div>
			</div>
		</WrapperContext>
	)
}

export default NotificationPage
