import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'  
import './mark.css'
const MarkdownViewer = ({ path = '' }) => {
	const [content, setContent] = useState('')

	const fetchMarkdown = async () => {
		try {
			const response = await fetch(path)
			if (!response.ok) {
				throw new Error('Error fetching markdown file')
			}
			const data = await response.text()
			setContent(data)
		} catch (error) {
			console.error('Error fetching markdown:', error)
		}
	}

	useEffect(() => {
		if (path) {
			fetchMarkdown()
		}
	}, [path]) // Dependencia a 'path'

	return (
		<div className="markdown mx-12 px-6 border py-12  rounded-lg">
			<ReactMarkdown 
				children={content}
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeHighlight]}
			/>
		</div>
	)
}

export default MarkdownViewer
