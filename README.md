# Netflix GPT

- Install and setup Vite - npm create vite@latest
- Configure TailwindCSS
- Header
- Routing
- Login Form
- Signup Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create Signup User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implement Sign out
- Update profile
- Fetch from TMDB Movies
- BugFix : Sign up user displauName and profile picture update
- bugFix: if the user is not logged in redirect /browse to login Page vice-versa
- Unsubescribed to the onauthStateChange callback
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create MovieSlice
- Update Store with movies Data
- Plaining for MainContainer & secondary container
- Fetch Data for Trailer Video Data
- Embedded the youtube Video and make it autoplay and mute
- Tailwind Classes to make main Container Look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse page amazing with tailwind css
- usePopularMovies Custom Hook
- GPT Search Page
- GPT Search Bar
- Multi-Langauage Feature in our App
- Integrate GPT APIS

# Features

- Login/Signup Page

  - Sign In / Sign Up Form
  - redirect to browse page

- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestions
      - Movie List \* N
- NetflixGPT

  - Seach Bar
  - Movie Suggestions

  # Steps for Deployment on Firebase

  1. Install Firebase CLI - "npm install -g firebase-tools"
  2. Firebase Login - "firebase login"
  3. Initilize Firebase - "firebase init" then select Hosting
  4. Deploy command - "firebase deply"

  # Reading Documentation is a Superpower of a Developer

  # TMDB API Credential

  API Key - 27a9049800c6caa0e75499e995f469b4

  API Read Access Token -
  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E5MDQ5ODAwYzZjYWEwZTc1NDk5ZTk5NWY0NjliNCIsIm5iZiI6MTcyMzEyMTU2OS4xMTYwMzcsInN1YiI6IjY2YjRiZDY2Y2YxMGJlZThhOGM1Y2ZmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7KRq5XHn2GDSBa3C7KQZz021BnJTIwusUcYtX2WNiw

Documentation URL : https://developer.themoviedb.org/docs/getting-started
