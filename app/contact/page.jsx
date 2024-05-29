'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import axios from 'axios'

const formSchema = z.object({
	name: z
		.string()
		.min(2, { message: 'Name must be at least 2 characters.' })
		.max(50, { message: 'Name must be at most 50 characters.' }),
	email: z.string().email({ message: 'Invalid email address.' }),
	subject: z
		.string()
		.min(2, { message: 'Subject must be at least 2 characters.' })
		.max(100, { message: 'Subject must be at most 100 characters.' }),
	message: z
		.string()
		.min(5, { message: 'Message must be at least 5 characters.' })
		.max(1000, { message: 'Message must be at most 1000 characters.' }),
})

const Contact = () => {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
	})

	async function onSubmit(values) {
		try {
			const response = await axios.post('/api/contact', values)
			if (response.data.succeeded) {
				console.log('Form submitted successfully')
				toast({
					title: 'Thank you for your message!',
				})
				form.reset()
			} else {
				console.error('Error submitting form:', response.data.error)
			}
		} catch (error) {
			console.error('Error submitting form:', error.message)
		}
	}

	return (
		<div className='container mx-auto max-h-screen xl:w-[50%]'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col  gap-6 p-10 bg-[#27272c] rounded-xl'
				>
					<div className='flex  flex-col items-center justify-center gap-6 '>
						<h3 className='text-2xl text-accent'>Contact With Us</h3>
						<p className='text-white/60'>
							Our team would be happy to hear your thoughts and answer your
							questions.
						</p>
					</div>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder='Your name' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input type='email' placeholder='Your email' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='subject'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Subject</FormLabel>
								<FormControl>
									<Input placeholder='Subject' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea placeholder='Your message' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</div>
	)
}

export default Contact
