import nodemailer from 'nodemailer'
import { generateEmailTemplate } from '@/utils/emailTemplate'

export async function POST(req) {
	try {
		const { name, email, subject, message } = await req.json()

		let transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
				pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
			},
			tls: {
				rejectUnauthorized: false,
			},
		})

		await transporter.sendMail({
			from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
			to: 'yigit.baba@code.berlin, tugce.tamer@code.berlin, shawn.gotoh@code.berlin, maurice.hedfeld@code.berlin, diego.pooth@code.berlin',
			subject: `Contact Form: ${subject}`,
			html: generateEmailTemplate({ name, email, subject, message }),
		})

		return new Response(JSON.stringify({ succeeded: true }), { status: 200 })
	} catch (error) {
		console.error('Error sending email:', error) // Add logging here
		return new Response(
			JSON.stringify({ succeeded: false, error: error.message }),
			{ status: 500 }
		)
	}
}
