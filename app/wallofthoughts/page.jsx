'use client'
import { useState } from 'react'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useUserNotes } from '@/hooks/useUserNotes'

const WallOfThoughts = () => {
	const [userNotes, addNote] = useUserNotes()
	const [form, setForm] = useState({})
	const submit = async () => {
		addNote(form)
	}

	const setChanged = (type, e) => {
		const f = {
			...form,
			[type]: e.target.value,
		}
		setForm(f)
	}

	return (
		<div>
			<div>WallOfThoughts</div>
			<div>
				{userNotes?.map((note) => {
					return (
						<Card className='w-[350px]' key={note.id}>
							<CardHeader>
								<CardTitle>{note.title}</CardTitle>
							</CardHeader>
							<CardContent>{note.detail}</CardContent>
						</Card>
					)
				})}
			</div>
			<Card className='w-[5000px]'>
				<CardHeader>
					<CardTitle>add your own opinion</CardTitle>
				</CardHeader>
				<CardContent>
					<Input
						placeholder='title'
						onChange={(e) => setChanged('title', e)}
						className='text-white'
					></Input>
					<Input
						type='multiline'
						placeholder='your opinion'
						onChange={(e) => setChanged('detail', e)}
						className='text-white'
					></Input>
				</CardContent>
				<CardFooter>
					<Button type='submit' onClick={submit}>
						Submit
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
export default WallOfThoughts
