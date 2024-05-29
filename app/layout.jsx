import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { Toaster } from '@/components/ui/toaster'

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	variable: '--font-jetbrainsMono',
})

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<title>Safe Bike </title>
			</head>
			<body className={jetbrainsMono.variable}>
				<Header />
				{children}
				<Toaster />
			</body>
		</html>
	)
}
