# SwimSight
🏊‍♂️ Swimming Performance Tracker
A comprehensive Flutter mobile application for swimmers to track training sessions, analyze performance metrics, and monitor personal records. Built with Firebase backend for real-time data synchronization and user authentication.
📱 Features
Core Functionality

Training Session Management

Add, view, and manage swimming training sessions
Track multiple metrics: distance, time, pace, heart rate, laps
Support for different stroke types (Freestyle, Backstroke, Breaststroke, Butterfly)
Multiple pool lengths (25m, 50m)
Date-based session logging


Personal Records Tracking

Automatic detection of new personal bests
Real-time PR celebrations with animated dialogs
Performance history for each stroke/distance combination
Grouped view by stroke type
Trend analysis and improvement statistics


Performance Analytics

AI-powered swimmer insights
Turn and start analysis
Kick technique analysis
Injury risk prediction
Performance trends over time


User Profile

Personalized dashboard
Total sessions, distance, and hours tracked
Quick stats overview
Profile customization


Competition Tracking

Record competition results
Compare competition vs training performance
Competition history



🛠️ Technology Stack
Frontend

Flutter - Cross-platform mobile development
Dart - Programming language
Material Design - UI/UX components

Backend

Firebase Authentication - User authentication and authorization
Cloud Firestore - NoSQL database for real-time data storage
Firebase Storage - Media file storage

Architecture

Service Layer Pattern - Separation of business logic
Model-View Architecture - Clean code organization
Real-time Data Sync - Firebase real-time listeners
State Management - StatefulWidget with setState

📂 Project Structure
lib/
├── models/
│   ├── personal_best.dart          # Personal best performance model
│   ├── training_session.dart       # Training session data model
│   └── user_profile.dart           # User profile model
├── screens/
│   ├── home_screen.dart            # Main dashboard
│   ├── add_training_session_screen.dart  # Add new session
│   ├── personal_records_screen.dart      # View PRs
│   ├── swimmer_insights_screen.dart      # AI insights
│   ├── competitions_screen.dart          # Competition tracking
│   ├── turn_start_analysis_screen.dart   # Turn/start analysis
│   ├── injury_prediction_screen.dart     # Injury risk
│   └── kick_analysis_screen.dart         # Kick technique
├── services/
│   ├── personal_bests_service.dart       # PR calculation logic
│   ├── profile_service.dart              # User profile management
│   └── training_session_service.dart     # Session management
├── utils/
│   └── stroke_utils.dart                 # Stroke type utilities
└── main.dart                             # App entry point
🚀 Getting Started
Prerequisites

Flutter SDK (3.0 or higher)
Dart SDK (3.0 or higher)
Android Studio / VS Code with Flutter extensions
Firebase account
Android device/emulator or iOS device/simulator

Installation

Clone the repository

bashgit clone https://github.com/yourusername/swimming-app.git
cd swimming-app

Install dependencies

bashflutter pub get

Firebase Setup

Create a new Firebase project at Firebase Console
Add Android/iOS app to your Firebase project
Download google-services.json (Android) and GoogleService-Info.plist (iOS)
Place them in the appropriate directories:

Android: android/app/google-services.json
iOS: ios/Runner/GoogleService-Info.plist




Enable Firebase Services

Authentication (Email/Password)
Cloud Firestore
Storage (if using media files)


Configure Firestore Security Rules

javascriptrules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /training_sessions/{sessionId} {
      allow read: if request.auth != null && 
                     resource.data.userId == request.auth.uid;
      allow create: if request.auth != null && 
                       request.resource.data.userId == request.auth.uid;
      allow update, delete: if request.auth != null && 
                               resource.data.userId == request.auth.uid;
    }
    
    match /users/{userId} {
      allow read, write: if request.auth != null && 
                           request.auth.uid == userId;
    }
  }
}

Create Firestore Indexes

Go to Firebase Console → Firestore → Indexes
Create composite indexes:

training_sessions: userId (ASC) + strokeType (ASC) + trainingDistance (ASC) + pacePer100m (ASC)
training_sessions: userId (ASC) + date (DESC)
