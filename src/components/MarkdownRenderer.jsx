import rehypeHighlight from 'rehype-highlight'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'highlight.js/styles/panda-syntax-dark.css'
import './mark.css'
import { Copy } from 'lucide-react'
import { useNotification } from './Notification/NotificationProvider'

const CodeCopyBtn = ({ code }) => {
	const [copyOk, setCopyOk] = useState(false)
	const { notificationHandler, closeNotification } = useNotification()

	const handleClick = async () => {
		navigator.clipboard.writeText(code)
		setCopyOk(true)

		await notificationHandler('Copied!!', {
			type: 'success',
			behavior: 'autoHide',
			timeOut: 3000
		})

		setTimeout(() => setCopyOk(false), 500)
	}

	return (
		<button
			type='button'
			onClick={handleClick}
			className={`${copyOk ? 'text-emerald-400' : ''}`}>
			<Copy />
		</button>
	)
}

const extractText = (node) => {
	if (typeof node === 'string') {
		return node
	}

	if (Array.isArray(node)) {
		return node.map(extractText).join('')
	}

	if (node?.props?.children) {
		return extractText(node.props.children)
	}

	return ''
}

const MarkdownViewer = ({ path = '' }) => {
	const [content, setContent] = useState('')
	const route = new URL(path, import.meta.url).pathname

	const fetchMarkdown = async () => {
		try {
			const response = await fetch(route)
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
	}, [path])

	const Pre = ({ children }) => {
		const codeContent = extractText(children)

		return (
			<pre className='blog-pre'>
				<CodeCopyBtn code={codeContent} />
				{children}
			</pre>
		)
	}

	return (
		<div className='markdown mx-12 px-6 rounded-lg text-wrap'>
			<ReactMarkdown
				className='text-wrap'
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeHighlight]}
				components={{
					pre: Pre,
					code({ inline, className = 'blog-code', children, ...props }) {
						return (
							<code
								className={className}
								{...props}>
								{children}
							</code>
						)
					}
				}}>
				{content}
			</ReactMarkdown>
		</div>
	)
}

export default MarkdownViewer
