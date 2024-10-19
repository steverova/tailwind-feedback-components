import { useState } from 'react'

/**
 * Tabs component that renders a set of tabs and their respective content.
 *
 * @example
 * const tabItems = [
 *   { id: 'tab1', title: 'Tab 1', content: <div>Content 1</div> },
 *   { id: 'tab2', title: 'Tab 2', content: <div>Content 2</div> },
 *   { id: 'tab3', title: 'Tab 3', content: <div>Content 3</div> }
 * ];
 *
 * <Tabs tabs={tabItems} />
 *
 * @param {[{}]} tabs - Array of tab objects.
 * @param {string} tabs[].id - Unique identifier for each tab.
 * @param {string} tabs[].title - The title displayed on the tab.
 * @param {React.ReactNode} tabs[].content - The content to display when the tab is active.
 */

function Tabs({ tabs = [] }) {
	const [currentTab, setCurrentTab] = useState(0)

	return (
		<div className='sm:p-0  mt-4 flex flex-col justify-center items-center px-6 md:px-0'>
			<div className='flex'>
				<div className='flex bg-emerald-200 rounded-lg transition p-1 '>
					<nav
						className='flex flex-row flex-wrap gap-x-1 '
						aria-label='Tabs'
						role='tablist'
						aria-orientation='horizontal'>
						{tabs.map((tab, index) => (
							<button
								key={tab.id}
								onClick={() => setCurrentTab(index)}
								type='button'
								className={`py-3 px-4 flex flex-row justify-between gap-x-2  text-sm font-medium rounded-lg transition ${
									currentTab === index
										? 'bg-emerald-700 shadow-lg text-white' // Active tab background
										: 'text-gray-500 hover:text-emerald-600'
								}`}
								id={`segment-item-${index}`}
								aria-selected={currentTab === index}
								aria-controls={`segment-${index}`}
								role='tab'>
								{tab.title}
							</button>
						))}
					</nav>
				</div>
			</div>

			<div className=''>
				{tabs.map((tab, index) => (
					<div key={tab.id}>
						{currentTab === index && (
							<div
								
								id={`segment-${index}`}
								role='tabpanel'
								aria-labelledby={`segment-item-${index}`}>
								{tab.content}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Tabs
