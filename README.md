# ChatView - A Mobile Chat Application

ChatView is a mobile application developed using React Native. It offers users an intuitive chat interface along with features to share images and locations seamlessly.

<img width="311" alt="Screenshot 2023-10-15 at 16 13 46" src="https://github.com/alisa-p-dev/chat-view/assets/122109020/4b1c0dd8-127c-41d7-9625-7a9ecb52b8c9">

## Technology Stack

The application is built using the following technologies:

- React Native
- Expo (for cross-platform development)
- React Native Gifted Chat library
- Google Firestore Database
- Google Firebase Authentication
- AsyncStorage (for offline data caching)
- Firebase Cloud Storage (for media files)
- Expo ImagePicker & MediaLibrary (for communication features)

## Key Features

ChatView boasts several key features to enhance the user experience:

- **User Setup Page**: Allows users to enter their name and choose a background color for the chat screen before entering the chat.
- **Chat Interface**: Displays the conversation history, featuring an input field and a submission button.
- **Enhanced Communication**: Enables users to send images and location data as part of their chat messages.
- **Data Persistence**: Ensures that data is stored securely both online and offline for a seamless user experience.

## Getting Started

To run ChatView on your local machine, follow these steps:

1. Clone the repository: `git clone <https://github.com/alisa-p-dev/chat-view>`
2. Navigate to the project directory: `cd ChatView`
3. Install dependencies: `npm install`
4. Install Expo CLI globally: `npm install -g expo-cli`
5. Install the required dependency to fix image sending issues: `npm i whatwg-fetch@3.6.2`
6. Start the development server: `npm start`

## Database Configuration

If you want to use your own database:

1. Create a new database on [Firebase](https://firebase.google.com/) (sign up required).
2. Install Firebase: `npm i firebase`

1. In the Firebase Console:

- Add a new project.
- Navigate to "Build" > "Firestore Database" and create a new database in production mode.
- Go to "Project Settings" > "General" > "Your apps" > web app (</>) and follow the prompts to create a Firebase web app.
- Copy the configuration code (starting with const firebaseConfig =) from the setup and replace it in App.js.

## Set up Android Studio

If you wish to use all features of the app, install the necessary libraries:

```
expo install expo-image-picker
expo install react-native-maps
expo install expo-location
expo install expo-media-library
```

