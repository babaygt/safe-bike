'use client'
import { useState } from 'react'
import { CardHeader, } from '@/components/ui/card'
import { useUserNotes } from '@/hooks/useUserNotes'
import * as Styles from '../../styles/wallofthoughts.styles'

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
			<Styles.PrimaryHeader>
				Your thoughts are very important to us. Please share them with us
			</Styles.PrimaryHeader>
			<Styles.NotesContainer>
				<Styles.NotesChild>
					<Styles.Card color={selectedColor}>
						<CardHeader>
							<Styles.CardTitle>
									Share your own thought with us
							</Styles.CardTitle>
						</CardHeader>
						<Styles.CardForm>
							<Styles.InputTitle
								placeholder='Title'
								value={form.title || ''}
								onChange={(e) => setChanged('title', e)}
							></Styles.InputTitle>
							<Styles.InputOpinion
								placeholder='Your opinion'
								value={form.detail || ''}
								onChange={(e) => setChanged('detail', e)}
							></Styles.InputOpinion>
							<Styles.ColorPicker>
								{colors.map((color, idx) => (
									<Styles.Color
										key={idx}
										color={color}
										onClick={() => setSelectedColor(color)}
									/>
								))}
							</Styles.ColorPicker>
							<Styles.Submit
								type='submit'
								onClick={submit}
							>
								Submit
							</Styles.Submit>
						</Styles.CardForm>
					</Styles.Card>
				</Styles.NotesChild>
				{userNotes?.map((note, index) => (
					<Styles.NotesChild key={note.id}>
						<Styles.Card
						  color={note.color}
							style={{ rotate: rotate[index % rotate.length] }}
						>
							<CardHeader>
								<Styles.CardTitle>
									{note.title}
								</Styles.CardTitle>
							</CardHeader>
							<Styles.CardContent>
								<p>{note.detail}</p>
							</Styles.CardContent>
						</Styles.Card>
					</Styles.NotesChild>
				))}
			</Styles.NotesContainer>
		</div>
	)
}
export default WallOfThoughts
