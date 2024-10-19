const FlatRadioButton = ({
	id,
	name,
	value,
	label,
	checked,
	onChange,
	variant
}) => {
	const baseStyles =
		'flex items-center gap-1 px-4 py-2 rounded-full  transform transition hover:scale-105'

	const variantStyles = {
		filled: 'bg-emerald-600 text-white',
		outlined: 'border-2 border-emerald-600 text-emerald-600 bg-white',
		regular: 'bg-gray-100 text-gray-800'
	}

	return (
		<div
			className={`${baseStyles} ${variantStyles[variant] || variantStyles.regular}`}>
			<input
				type='radio'
				id={id}
				name={name}
				value={value}
				checked={checked}
				onChange={onChange}
				className='appearance-none w-4 h-4 border-2 border-gray-300 rounded-full checked:bg-slate-600 checked:border-transparent focus:outline-none transition-all duration-200'
			/>
			<label
				className='font-semibold'
				htmlFor={id}>
				{label}
			</label>
		</div>
	)
}

export default FlatRadioButton
