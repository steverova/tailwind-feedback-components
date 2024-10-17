import { useState } from 'react'
import MarkdownRenderer from '../../components/MarkdownRenderer.jsx'
import { NavList, Navigation } from '../../components/Navigation/Navigation.jsx'
import PopoverButton from '../../components/PopverButton.jsx'
import Tabs from '../../components/Tabs.jsx'
import { WrapperContext } from '../../components/WrapperContext/WrapperContext.jsx'

import Demo from './Demo.jsx'

const NotificationPage = () => {
	const [methods, setMethods] = useState('')

	const sectionIds = ['demo', 'usage', 'documentation']

	const navigationMethods = {
		setMethods,
		methods
	}

	return (
		<WrapperContext methods={navigationMethods}>
			<div className='flex min-h-screen bg-emerald-50'>
				<div className='static flex-1  overflow-y-auto'>
					<div className=' text-center items-center'>
						<section
							id='demo'
							className='py-12'>
							<Demo />
						</section>

						<section
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
												<div className='flex flex-col'>
													<MarkdownRenderer path='/markdown/notification/howtouse/introduction.md' />
													<MarkdownRenderer path='/markdown/notification/howtouse/code01.md' />
													<MarkdownRenderer path='/markdown/notification/howtouse/introduction02.md' />
													<MarkdownRenderer path='/markdown/notification/howtouse/code02.md' />

													<MarkdownRenderer path='/markdown/notification/howtouse/introduction03.md' />

													<MarkdownRenderer path='/markdown/notification/howtouse/code03.md' />
												</div>
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
						</section>

						<hr />
					</div>
				</div>
			</div>
		</WrapperContext>
	)
}

export default NotificationPage
