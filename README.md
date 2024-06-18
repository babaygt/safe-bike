# Safe Bike

Safe Bike is a Next.js project aimed at improving cycling safety in Prenzlauer Berg, Berlin. The website features an interactive map where users can create cycling routes, view route instructions, and locate bicycle stores, crash sites, and construction zones. Additionally, the website includes a "Wall of Thoughts" page for user feedback, an "About" page detailing the project, and a "Contact" page for reaching out to the team.

## Project Motivation

The motivation for this project stems from the urgent need to enhance the safety of cyclists in Germany, where the number of cycling-related accidents and fatalities has been increasing. We are focusing on Prenzlauer Berg, a district in Berlin known for its heavy bicycle traffic and active cycling community, to address these safety concerns. Our goal is to reduce these risks by providing tools and information that promote safer travel routes and create a more aware cycling community. By leveraging cutting-edge technology and fostering a strong community spirit, we aim to revolutionize cycling safety and promote a culture of conscious and informed cyclists.

## Features

- **Interactive Map**: Users can create personalized cycling routes, view route instructions, and find the location of bicycle stores, crash sites, and construction zones.
- **Wall of Thoughts**: A platform for users to share their thoughts and suggestions with the Safe Bike community.
- **About Page**: Information about the project, its mission, and the team behind it.
- **Contact Page**: A form for users to get in touch with the team.

## Primary Research

We conducted surveys and interviews with cyclists in Prenzlauer Berg to understand the challenges they face and the tools they use to navigate the city.

## Secondary Research

Our secondary research involved analyzing data from government reports, academic studies, and cycling organizations. Notable insights include increasing cyclist fatalities, a willingness among cyclists to adopt new technologies, and a critical need for improved cycling infrastructure.

## How to Start the Project

To get started with the project, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/babaygt/safe-bike.git
   cd safe-bike
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=XXXX
   NEXT_PUBLIC_MAPS_ID=XXXX
   NEXT_PUBLIC_FIREBASE_API_KEY=XXXX
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=XXXX
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=XXXX
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=XXXX
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=XXXX
   NEXT_PUBLIC_FIREBASE_APP_ID=1:XXXX
   NEXT_PUBLIC_NODEMAILER_EMAIL=XXXX
   NEXT_PUBLIC_NODEMAILER_PW=XXXX
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The project is deployed on Vercel and can be accessed at [https://safe-bike.vercel.app/](https://safe-bike.vercel.app/).

## Technologies Used

- Next.js
- React
- Google Maps API
- Firebase
- Nodemailer
- Tailwind CSS
- shadcn/ui

## Contact

For any questions or feedback, please use the contact form on our website or email us at:

- yigit.baba@code.berlin
- tugce.tamer@code.berlin
- shawn.gotoh@code.berlin
- maurice.hedfeld@code.berlin
- diego.pooth@code.berlin

## Contributing

We welcome contributions to the project. Please open an issue or submit a pull request on GitHub.
