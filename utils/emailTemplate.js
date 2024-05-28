export function generateEmailTemplate({ name, email, subject, message }) {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<style>
					body {
						font-family: Arial, sans-serif;
						margin: 0;
						padding: 0;
						background-color: #1c1c22;
					}
					.container {
						width: 100%;
						max-width: 600px;
						margin: 0 auto;
						background-color: #27272c;
						padding: 20px;
						border-radius: 8px;
						box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
					}
					.header {
						background-color: #00ff99;
						color: #27272c;
						padding: 10px 0;
						text-align: center;
						border-radius: 8px 8px 0 0;
					}
					.content {
						padding: 20px;
						color: #00ff99
					}
					
					.text {
						color: #fdfdfd ;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<div class="header">
						<h1>${subject}</h1>
					</div>
					<div class="content">
						<p><strong>Name:</strong> <span class="text">${name}</span> </p>
						<p><strong>Email:</strong><span class="text"> ${email}</span></p>
						<p><strong>Message:</strong></p>
						<p><span class="text">${message} </span></p>
					</div>
				</div>
			</body>
		</html>
	`
}
