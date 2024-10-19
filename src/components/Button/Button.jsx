import { LoaderIcon } from 'lucide-react'

/**
 * Button component for rendering a customizable button with support for icons, loading states, and different styles.
 *
 * @param {Object} props - The properties passed to the Button component.
 * @param {JSX.Element} [props.startIcon=null] - Optional icon to render at the start of the button text.
 * @param {JSX.Element} [props.endIcon=null] - Optional icon to render at the end of the button text.
 * @param {'filled' | 'outlined' | 'text' | 'tonal'} [props.variant='filled'] - The variant of the button, defining its style.
 * @param {'info' | 'ok' | 'danger' | 'warning' | 'success'} [props.color='info'] - The color theme of the button.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - The size of the button, determining padding and font size.
 * @param {'sm' | 'md' | 'lg'} [props.elevation='none'] - The shadow depth of the button, affecting its visual elevation.
 * @param {string} [props.children='Button'] - The text content to display inside the button.
 * @param {'none' | 'md' | 'lg' | 'xl' | 'full'} [props.rounded='md'] - The border-radius of the button, determining how rounded the corners are.
 * @param {function} [props.onClick] - Function to call when the button is clicked.
 * @param {boolean} [props.disabled=false] - If true, the button is disabled and not interactive.
 * @param {boolean} [props.loading=false] - If true, the button shows a loading spinner and becomes disabled.
 * @param {string} [props.loadingText='Cargando...'] - Text to display when the button is in loading state.
 * @param {Object} [props.rest] - Any additional props are passed to the button element.
 * @returns {JSX.Element} - A styled button element.
 *
 * @example
 * <Button
 *   startIcon={<DownloadCloudIcon />}
 *   endIcon={<DownloadCloudIcon />}
 *   variant="filled"
 *   color="info"
 *   size="lg"
 *   rounded="full"
 *   loading={false}
 *   loadingText="Processing..."
 *   onClick={() => console.log('Button clicked')}
 * >
 *   Download
 * </Button>
 */
const Button = ({
	startIcon = null,
	endIcon = null,
	variant = 'filled',
	color = 'info',
	size = 'md',
	elevation = 'none',
	children = 'Button',
	rounded = 'md',
	onClick = () => {},
	disabled = false,
	loading = false,
	loadingText = 'Cargando...',
	...rest
}) => {
	const buttonStyles = {
		color: {
			info: ' hover:bg-blue-600',
			ok: ' hover:bg-gray-600',
			danger: ' hover:bg-red-700',
			warning: ' hover:bg-yellow-600',
			success: ' hover:bg-emerald-600'
		},
		rounded: {
			none: 'rounded-none',
			md: 'rounded-md',
			lg: 'rounded-lg',
			xl: 'rounded-xl',
			full: 'rounded-full'
		},
		size: {
			sm: 'py-1 px-2',
			md: 'py-2 px-4',
			lg: 'py-3 px-6'
		},
		elevation: {
			sm: 'shadow-sm',
			md: 'shadow-md',
			lg: 'shadow-lg'
		},
		variant: {
			filled: `text-white border-transparent 
        ${color === 'info' ? 'bg-blue-500 hover:bg-blue-600' : ''}
        ${color === 'ok' ? 'bg-gray-500 hover:bg-gray-600' : ''}
        ${color === 'danger' ? 'bg-red-500 hover:bg-red-700' : ''}
        ${color === 'warning' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
        ${color === 'success' ? 'bg-emerald-500 hover:bg-emerald-600' : ''}
        `,
			outlined: `
        bg-transparent border 
        ${color === 'info' ? 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white' : ''}
        ${color === 'ok' ? 'border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white' : ''}
        ${color === 'danger' ? 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white' : ''}
        ${color === 'warning' ? 'border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white' : ''}
        ${color === 'success' ? 'border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white' : ''}
      `,
			text: `
        bg-transparent text-${color}-500 hover:bg-transparent
        ${color === 'info' ? 'text-blue-500' : ''}
        ${color === 'ok' ? 'text-gray-500' : ''}
        ${color === 'danger' ? 'text-red-500' : ''}
        ${color === 'warning' ? 'text-yellow-500 ' : ''}
        ${color === 'success' ? 'text-emerald-500' : ''}
      `,
			tonal: `
       ${color === 'info' ? 'bg-blue-200 hover:bg-blue-300 text-blue-800' : ''}
        ${color === 'ok' ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : ''}
        ${color === 'danger' ? 'bg-red-200 hover:bg-red-300 text-red-800' : ''}
        ${color === 'warning' ? 'bg-yellow-200 hover:bg-yellow-300 text-yellow-800' : ''}
        ${color === 'success' ? 'bg-emerald-200 hover:bg-emerald-300 text-emerald-800' : ''}
      `
		}
	}

	const className = `min-w-[90px]
    ${variant === 'tonal' && buttonStyles.variant.tonal} 
    ${buttonStyles.size[size]} 
    ${buttonStyles.elevation[elevation]} 
    ${
			variant === 'filled'
				? buttonStyles.variant.filled
				: variant === 'outlined'
					? buttonStyles.variant.outlined
					: variant === 'text'
						? buttonStyles.variant.text
						: ''
		} 
    ${buttonStyles.rounded[rounded]} 
    font-semibold 
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}
  `

	return (
		<button
			{...rest}
			type='button'
			className={className}
			onClick={onClick}
			disabled={disabled || loading}>
			<span className='flex flex-row items-center text-center'>
				{loading ? (
					<>
						<LoaderIcon
							size={16}
							className='animate-spin mr-1'
						/>
						<span>{loadingText}</span>
					</>
				) : (
					<>
						{startIcon && <span className='mr-2'>{startIcon}</span>}
						{children}
						{endIcon && <span className='ml-2'>{endIcon}</span>}
					</>
				)}
			</span>
		</button>
	)
}

export default Button
