# Planetory Transportation Booking Application

Welcome to the Planetary Transportation Booking Application! This project consists of both the backend and frontend components that work together to create a comprehensive booking application tailored for planetary transportation. 

## Table of Contents

- [Frontend](#frontend)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Configuration](#configuration)
  - [Usage](#usage)
    - [Authentication](#authentication)
  - [Folder Structure](#folder-structure)
  - [Dependencies](#dependencies)
- [Backend](#backend)
  - [Getting Started](#getting-started)
      - [Prerequisites](#prerequisites)
      - [Installation](#installation)
      - [Configuration](#configuration)
    - [Usage](#usage)
      - [Authentication](#authentication)
    - [Folder Structure](#folder-structure)
    - [Dependencies](#dependencies)

## Frontend

### Getting Started

#### Prerequisites

Before running the application, ensure you have the following prerequisites:

- [Node.js](https://nodejs.org/) (version >= 14.0.0)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) (for development)

#### Installation

1. Clone this repository to your local machine:
```bash
git clone https://github.com/BKHChathuranga/PlanetHop.git
```
2. Navigate to the project directory:
```bash
cd PlanetHop/front-end
```
3. Install the required dependencies:
```bash
npm install
```
### Usage

To start the application in development mode, run:
```bash
expo start
```

This will launch the Expo Developer Tools in your web browser. You can then run the app on an iOS or Android simulator, or scan the QR code with the Expo Go app on your mobile device to see the app live.

### Folder Structure

### Dependencies

The Planetary Transportation Booking Application frontend (mobile app) relies on the following essential libraries and packages:

- **@expo-google-fonts/poppins**: A package that enables the use of the Poppins font from Google Fonts.
- **@expo/vector-icons**: A collection of customizable icons for your mobile app.
- **@react-native-async-storage/async-storage**: A package for asynchronous data storage on the device.
- **@react-navigation/bottom-tabs**: A package for creating bottom tab navigation.
- **@react-navigation/drawer**: A package for implementing a navigation drawer.
- **@react-navigation/native**: Core package for navigation in React Native apps.
- **axios**: A promise-based HTTP client for making API requests.
- **expo**: The Expo framework for building React Native apps.
- **expo-app-loading**: A package that simplifies handling loading screens in Expo apps.
- **expo-checkbox**: A component for checkboxes in Expo apps.
- **expo-font**: A package for loading fonts in Expo apps.
- **expo-image**: A package for working with images in Expo apps.
- **expo-splash-screen**: A package for managing splash screens in Expo apps.
- **expo-status-bar**: A component for managing the status bar in Expo apps.
- **jwt-decode**: A package for decoding JSON Web Tokens (JWT) in the client-side.
- **react**: The React library for building user interfaces.
- **react-native**: The core React Native library for building mobile apps.
- **react-native-gesture-handler**: A package for gesture handling in React Native apps.
- **react-native-paper**: A UI component library for React Native.
- **react-native-reanimated**: A library for animating React Native components.
- **react-native-vector-icons**: A package for using vector icons in React Native apps.
- **@react-native-picker/picker**: A package for creating a dropdown picker component.
- **react-native-safe-area-context**: A package for handling safe area insets in React Native apps.

Please note that the list above includes the core dependencies, and additional packages might be utilized based on your specific application requirements.

## Backend

### Getting Started

#### Prerequisites

Before running this application, ensure you have the following prerequisites:

- Node.js (version >= 14.0.0)
- npm (Node Package Manager)

#### Installation

1. Clone this repository to your local machine:
```bash
git clone https://github.com/BKHChathuranga/PlanetHop.git
```
2. Navigate to the project directory:
```bash
cd PlanetHop/back-end
```
3. Install the required dependencies:
```bash
npm install
```

#### Configuration

1. Create a .env file in the back-end directory based on the provided environment variables.

### Usage

#### Authentication

In this Planetary Transportation Booking Application Backend, we have implemented a secure authentication system using refresh token-based JWT (JSON Web Tokens) authentication for users. This approach enhances security and ensures that only authorized users can access the application's resources.

### Folder Structure
```
.
├── controllers
├── models
├── routes
├── middleware
├── config
├── utils
├── .env
├── .gitignore
├── server.js
└── package.json
```

- `controllers`: Contains the logic to handle different endpoints.
- `models`: Defines the data models and schema.
- `routes`: Defines the API routes and their corresponding controller methods.
- `middleware`: Houses middleware functions for tasks such as authentication, validation, etc.
- `config`: Contains configuration files (e.g., database connection).
- `utils`: Utility functions and helper modules.
- `server.js`: Entry point of the application.

### Dependencies

The backend application uses the following main dependencies:

- **Express**: A powerful web framework that facilitates the handling of API requests.
- **Mongoose**: A versatile Object Data Modeling (ODM) library designed specifically for MongoDB.
- **dotenv**: A utility that streamlines the process of loading environment variables from a .env file.
- **bcrypt**: A dependable package for hashing passwords securely.
- **body-parser**: Middleware that simplifies parsing of request bodies.
- **cors**: A package that allows cross-origin resource sharing, crucial for modern web applications.
- **jsonwebtoken**: A tool for generating and validating JSON Web Tokens (JWT) for user authentication.
- **nodemailer**: A solution for sending emails from your application.
- **nodemon**: A development utility that automatically restarts the server on code changes.
- **stripe**: A library that integrates with the Stripe payment platform.
- **winston**: A logging library that helps manage application logs effectively.
