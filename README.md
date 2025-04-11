MockerPrep
MockerPrep is an AI-powered interview preparation web application designed to simulate real interview experiences. Built using Next.js, React, and Tailwind CSS, it integrates voice assistant capabilities and advanced AI to help users practice, improve, and succeed in interviews.

🚀 Features
🎤 Voice-Enabled Interviewer: Uses Vapi for a seamless voice assistant experience.

🧠 AI-Powered Feedback: Utilizes Google Gemini API to generate detailed performance feedback.

🔐 User Authentication: Secure login and signup powered by Firebase Authentication.

📦 Realtime Database: Firebase Firestore to manage user data and interview history.

🎯 Targeted Interview Simulation: Choose your domain (e.g., Web Dev, Data Science, HR, etc.) and start a tailored interview session.

📊 Performance Report: Post-interview analysis covering communication skills, answer accuracy, tone, and confidence.

🛠️ Tech Stack
Technology	Description
Next.js	React framework for server-side rendering & routing
React.js	UI library for building components
Tailwind CSS	Utility-first CSS framework for fast styling
Vapi	Voice assistant API for real-time interviews
Google Gemini	AI for analyzing user responses and feedback
Firebase	Handles authentication and real-time database
🔧 Installation
bash
Copy
Edit
git clone https://github.com/DhashubhanKumar/mockerprep
cd MockerPrep
npm install
⚠️ Make sure to configure your .env.local with the necessary API keys for Firebase, Vapi, and Gemini.

📁 Project Structure
bash
Copy
Edit
/MockerPrep
├── /app
│   ├── /auth         # Login & Signup pages
│   ├── /dashboard    # Main user interface after login
│   ├── /interview    # Interview simulation flow
│   ├── /feedback     # Feedback display and analytics
│   └── layout.tsx    # Main layout wrapper
├── /components       # Reusable React components
├── /lib              # Firebase and Vapi config
├── /styles           # Tailwind base styles
└── .env.local        # API keys and environment variables
🔐 Environment Variables
Create a .env.local file in the root and add the following:

env
Copy
Edit
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_key
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
📦 Usage
Signup/Login – Users can register or log in via Firebase Auth.

Interview Type Selection – Choose the domain or job role you're preparing for.

Mock Interview Begins – A voice-driven AI starts asking interview questions.

Response Recording – Your responses are recorded (via voice/text).

Feedback Generation – Google Gemini API analyzes and returns a detailed breakdown.

Track Progress – Users can view past interviews and feedback history on their dashboard.

🧪 Future Features
📁 Resume Analyzer Integration

🧠 Personalized Learning Path Recommendations

📊 Admin Dashboard for analytics and user tracking

🌐 Multi-language support

🤝 Contributing
Contributions are welcome! Feel free to fork this repo and create a PR.

bash
Copy
Edit
git checkout -b feature/your-feature
git commit -m "Add: Your feature"
git push origin feature/your-feature
📄 License
MIT

🙌 Acknowledgements
Vapi

Firebase

Google Gemini API

Tailwind CSS

Next.js
