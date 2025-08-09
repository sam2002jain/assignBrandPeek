
**BrandPeek**



A brand discovery application built with React Native and Expo.

✨ Project Overview
BrandPeek is a mini-application that showcases a list of popular brands with a clean and modern UI. Users can browse a list of brands on the home screen and tap on any brand to view its detailed information. The app is built to assess core React Native skills, including API integration, state management, and UI design.

This project was built as an assignment to demonstrate the following:

Modular folder structuring and code management.

Creative use of gradients with expo-linear-gradient.

Fetching data from a backend API.

Deployment readiness via ExpoGo or an APK.

🚀 Features
Home Screen: Displays a list of 10 brands with their names, logos, and a one-liner description. The background features a subtle gradient.

Brand Detail Screen: Shows the full details of a selected brand, including a "Follow" button (without a backend implementation). This screen also uses a different gradient background.

API Integration: All brand data is fetched from a remote API.

Navigation: Uses @react-navigation/native-stack for seamless screen transitions.

📁 Folder Structure


The project follows a clean, modular structure as requested in the assignment:

/BrandPeek
├── /assets                 # Static assets like images and fonts


├── /components             # Reusable UI components (e.g., BrandCard)


├── /constants              # App-wide constants (e.g., API URL, colors)


├── /navigation             # Navigation setup (AppNavigator)


├── /screens                # Main screen components (HomeScreen, BrandDetailScreen)


├── /services               # API call logic


└── App.js                  # Main entry point of the application



💻 Tech Stack


React Native

Expo

@react-navigation/native-stack for navigation.

expo-linear-gradient for gradient backgrounds.

🌐 API
Backend Used: MockAPI.io.

Also, manually added the images/logo of the brand.

API Structure: A single resource named Brands was created with fields for id, name, logo, description, and details.

The API endpoints are as follows:

GET /Brands: Fetches a list of all brands.

GET /Brands/:id: Fetches the details of a single brand.

📋 Getting Started
Prerequisites

Node.js (LTS version)

Expo CLI (npm install -g expo-cli)

Setup Instructions

Clone the repository:

**Bash**


git clone [Link](https://github.com/sam2002jain/assignBrandPeek.git)


git checkout sanyam

cd BrandPeek


**Install dependencies:**

**Bash**
npm install


**Run the app in development mode:**

**Bash**


npx expo start


This will open a QR code. Scan it with the Expo Go app on your phone to view the project live.

📱 Live Project


ExpoGo Link: https://expo.dev/accounts/sam2002tani/projects/BrandPeek/builds/bc0dc448-95a1-4c2a-89a5-eee9a4225058

Thank you for showing interest in my application and I love to do this task and looking forward to work with you on some really cool projects.
