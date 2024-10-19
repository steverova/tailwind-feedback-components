import { useState } from 'react'
import MarkdownRenderer from '../../components/MarkdownRenderer.jsx'
import { NavList, Navigation } from '../../components/Navigation/Navigation.jsx'
import PopoverButton from '../../components/PopverButton.jsx'

import { WrapperContext } from '../../components/WrapperContext/WrapperContext.jsx'

import Demo from './Demo.jsx'

const Tabs = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<div className='w-full overflow-x-hidden'>
			<div className='flex border-b border-gray-200 overflow-x-auto'>
				{tabs.map((tab, index) => (
					<button
						type='button'
						key={tab.id}
						className={`hover:bg-teal-100 hover:text-teal-600 hover:border-white-500  px-4 py-2 text-sm font-medium focus:outline-none rounded-t-lg ${
							activeTab === index
								? 'border-b-2 border-teal-500 text-teal-500'
								: 'text-gray-600'
						}`}
						onClick={() => setActiveTab(index)}>
						{tab.title}
					</button>
				))}
			</div>
			<div className='px-1 sm:px-1 lg:px-4'>
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
			<div
				style={{
					backgroundImage:
						'linear-gradient(to right bottom, #ffffff, #dfe7f7, #aed4ed, #72c4d7, #2fb2b1, #2fb2b1, #2fb2b1, #2fb2b1, #72c4d7, #aed4ed, #dfe7f7, #ffffff)'
				}}
				className='flex min-h-screen pb-12 '>
				<Navigation sectionIds={sectionIds} />

				<div className='static flex-1 ml-0 lg:ml-32 overflow-y-auto'>

					
					<div className='sm:block md:hidden fixed top-15 left-0 w-full  py-2 backdrop-blur-lg text-end z-50'>
						<div className='flex flex-row justify-start items-end  ms-5 mt-1'>
							<PopoverButton title='Navigation'>
								<NavList sectionIds={sectionIds} />
							</PopoverButton>
						</div>
					</div>

					<div className=' text-center items-center container mx-auto px-1'>
						<section
							id='demo'
							className='py-12'>
							<Demo />
						</section>

						<section
							id='usage'
							className='bg-white bg-opacity-50 rounded-[24px] p-0 py-6'>
							<Tabs
								tabs={[
									{
										id: 'tab-0',
										title: 'Usage',
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
										content: (
											<MarkdownRenderer path='/markdown/notification/Types.md' />
										)
									}
								]}
							/>
						</section>

						<section
							id='documentation'
							className='bg-white bg-opacity-50 rounded-[24px] p-0 py-6 mt-12 px-4'>
							<MarkdownRenderer path='/markdown/notification/documentation.md' />
						</section>

						<hr />
					</div>
				</div>
			</div>
		</WrapperContext>
	)
}

export default NotificationPage
