'use client'

const Title = ({ text, position, size, color = 'text-white', colorText }) => {
	return (
		<div
			className={
				position === 'center'
					? 'text-center'
					: position === 'left'
					? 'text-left'
					: 'text-left lg:text-right'
			}
		>
			<h2 className={`${size} my-6 ${color} `}>
				{text}{' '}
				{colorText ? <span className='text-accent'>{colorText}</span> : ''}{' '}
			</h2>
		</div>
	)
}

export default Title
