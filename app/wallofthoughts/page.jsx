'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useUserNotes } from '@/hooks/useUserNotes'

import { Reenie_Beanie, Patrick_Hand } from 'next/font/google'

const reninie = Reenie_Beanie({
	weight: ['400'],
	subsets: ['latin'],
})

const patrick = Patrick_Hand({ weight: ['400'], subsets: ['latin'] })

// Define an array of Tailwind CSS background color classes
const colors = [
	'bg-yellow-200',
	'bg-red-200',
	'bg-green-200',
	'bg-blue-200',
	'bg-purple-200',
	'bg-pink-200',
]

// Define an array of Tailwind CSS rotate classes
const rotate = ['-2deg', '2deg', '-4deg', '4deg', '-6deg', '6deg']

const WallOfThoughts = () => {
	const [userNotes, addNote] = useUserNotes()
	const [form, setForm] = useState({})
	const [selectedColor, setSelectedColor] = useState(colors[0])

	const submit = async () => {
		addNote({ ...form, color: selectedColor })
		setForm({}) // Clear form after submission
	}

	const setChanged = (type, e) => {
		const f = {
			...form,
			[type]: e.target.value,
		}
		setForm(f)
	}

	return (
		<div className='p-8'>
			<h1
				className={`text-4xl text-center mb-8 tracking-wider ${patrick.className}`}
			>
				Your thoughts are very important to us. Please share them with us.
			</h1>
			<ul className='flex flex-wrap justify-center'>
				<li className='m-4'>
					<Card
						className={`w-64 h-[23rem] transform rotate-2 shadow-lg hover:scale-105 transition-transform duration-200 ${selectedColor}`}
					>
						<CardHeader>
							<CardTitle
								className={`text-base tracking-wider ${patrick.className}`}
							>
								Share your own thought with us
							</CardTitle>
						</CardHeader>
						<CardContent className='flex flex-col items-center text-white'>
							<Input
								placeholder='Title'
								value={form.title || ''}
								onChange={(e) => setChanged('title', e)}
								className={`mb-4 tracking-wider ${patrick.className}`}
							></Input>
							<Input
								placeholder='Your opinion'
								value={form.detail || ''}
								onChange={(e) => setChanged('detail', e)}
								className={`h-14 mb-4 text-2xl ${reninie.className}`}
							></Input>
							<div className='flex space-x-2 mb-4 bg-black p-3 rounded-md'>
								{colors.map((color, idx) => (
									<div
										key={idx}
										className={`w-6 h-6 rounded-full cursor-pointer ${color}`}
										onClick={() => setSelectedColor(color)}
									/>
								))}
							</div>
							<Button
								type='submit'
								onClick={submit}
								className='bg-green-500 text-white mt-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'
							>
								Submit
							</Button>
						</CardContent>
					</Card>
				</li>
				{userNotes?.map((note, index) => (
					<li key={note.id} className='m-4'>
						<Card
							className={`w-64 h-[23rem] transform shadow-lg hover:scale-105 transition-transform duration-200 ${
								note.color || 'bg-yellow-200'
							}`}
							style={{ rotate: rotate[index % rotate.length] }}
						>
							<CardHeader>
								<CardTitle className={`tracking-wider ${patrick.className}`}>
									{note.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className={`text-2xl ${reninie.className}`}>{note.detail}</p>
							</CardContent>
						</Card>
					</li>
				))}
			</ul>
		</div>
	)
}
export default WallOfThoughts
