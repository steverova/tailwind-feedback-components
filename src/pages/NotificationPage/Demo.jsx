import FlatRadioButton from '@/components/FlatRadioButton'
import { positionClasses } from '@/components/helper'
import { objectToArray } from '@/utils/utils'
import notifySvg from '@svg/notify.svg'
import { types } from '../Types'
import { useNotification } from '@/components/Notification/NotificationProvider'
import Button from '@/components/Button/Button'
import { useState } from 'react'

const Demo = () => {
	const [setup, setSetup] = useState({
		position: 'top-right',
		variant: 'filled',
		behavior: 'autoHide'
	})
	const { notificationHandler } = useNotification()

	const handleNotification = async (type) => {
		await notificationHandler(`${type} notification`, {
			type: type,
			variant: setup.variant,
			behavior: setup.behavior // Asegúrate de que esté usando el estado
		})
	}

	const array = objectToArray(types)

	const handleVariantChange = (event) => {
		const { name, value } = event.target

		// Actualiza la variante o el comportamiento según el nombre
		setSetup((prev) => ({ ...prev, [name]: value }))
	}

	return (
		<div>
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

			{/* Botones de posición */}
			<div className='flex flex-row flex-wrap gap-3 justify-center'>
				{Object.entries(positionClasses).map(([key, value]) => (
					<FlatRadioButton
						key={value}
						name='position' // Nombre común para los botones de posición
						label={key}
						checked={setup.position === value} // Verifica si es el valor seleccionado
						onChange={() => setSetup((prev) => ({ ...prev, position: value }))} // Actualiza la posición
						variant='regular'
					/>
				))}
			</div>

			<hr className='my-6' />

			{/* Botones de variante */}
			<div className='flex flex-row flex-wrap gap-3 justify-center my-6'>
				{['filled', 'outlined', 'regular'].map((variant) => (
					<FlatRadioButton
						key={variant}
						id={variant} // Asegúrate de que cada id sea único
						name='variant' // Nombre común para todos los botones de radio
						value={variant} // El valor que se está pasando
						label={variant}
						checked={setup.variant === variant} // Verifica si es el valor seleccionado
						onChange={handleVariantChange} // Manejador actualizado
						variant={variant}
					/>
				))}
			</div>

			<hr className='my-6' />

			{/* Botones de comportamiento */}
			<div className='flex flex-row flex-wrap gap-3 justify-center my-6'>
				{['autoHide', 'persistent'].map((behavior) => (
					<FlatRadioButton
						key={behavior}
						id={behavior}
						name='behavior' // Nombre común para todos los botones de comportamiento
						value={behavior}
						label={behavior}
						checked={setup.behavior === behavior} // Verifica si es el valor seleccionado
						onChange={handleVariantChange} // Manejador actualizado
						variant='regular'
					/>
				))}
			</div>

			<hr className='my-6' />

			{/* Botones para generar notificaciones */}
			<div className='flex flex-row flex-wrap gap-4 justify-center'>
				{array.map((type) => (
					<Button
						variant={setup.variant === 'regular' ? 'text' : setup.variant}
						key={type.label}
						color={type.label.toLowerCase()}
						onClick={() => handleNotification(type.label.toLowerCase())}>
						{type.label}{' '}
					</Button>
				))}
			</div>

			<hr className='my-6' />
		</div>
	)
}

export default Demo
