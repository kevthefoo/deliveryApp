# Delivery Operations App (Expo + React Native)

This repository is a starter scaffold implementing the PRD for the Delivery Operations App (drivers + admin). It provides a minimal Expo-based mobile app with screens for manifest, route, stops, SMS prompt, photo POD, and basic GPS wiring.

What this scaffold includes:

-   Basic Expo app manifest (`app.json`, `package.json`).
-   Screens: `Home`, `Route`, `Stop`, `POD` under `src/screens`.
-   Camera/photo capture using Expo ImagePicker (placeholder for real camera flows).
-   Foreground GPS tracking helper in `src/services/locationService.js` (15s interval).

Not included (next steps / backend required):

-   Supabase backend integration for routes, stops, and storage.
-   Twilio integration for SMS (call via secure backend endpoint).
-   Admin dashboard (web) for real-time map and reports.
-   Background geolocation & geofencing (requires native setup or EAS builds).

Quick start (Windows with bash):

1. Install dependencies:

```bash
cd "c:/Users/kevth/Desktop/deliveryApp"
npm install
```

2. Start Expo:

```bash
npm start
```

3. Run on device:

-   Scan the QR code with Expo Go (iOS/Android) or use an emulator.

Notes:

-   For SMS sending and file uploads, create a secure backend (Node/Express or Supabase Edge Function) that holds your Twilio and Supabase credentials — don't put secrets in the mobile app.
-   To enable reliable background tracking on iOS/Android, you'll need to configure platform-specific permissions and consider using a paid background location solution or EAS build.

If you'd like, I can:

-   Wire Supabase authentication and a simple routes API.
-   Implement Twilio SMS backend endpoints.
-   Add background location support and geofencing (native + EAS).
