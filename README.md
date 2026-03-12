<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Weather Dashboard 🌤️

A simple React application that fetches and displays real-time weather data using a public weather API. The project demonstrates API integration, React hooks, and dynamic UI updates.

## Features
- Fetches real-time weather data from a public API
- Displays current weather details:
  - Time
  - Temperature
  - Wind Speed
- Shows a loading message while data is being fetched
- Updates the UI dynamically using React state

## Technologies Used
- React
- JavaScript
- Fetch API
- HTML
- CSS

## API Used
Weather data is fetched from the **Open-Meteo API**.

Example API endpoint:

https://api.open-meteo.com/v1/forecast?latitude=12.87&longitude=74.88&current_weather=true

## Concepts Practiced
- React Hooks (`useState`, `useEffect`)
- API data fetching
- Asynchronous JavaScript
- Conditional rendering
- Component-based UI

## How It Works
1. The React component loads.
2. The `useEffect` hook fetches weather data from the Open-Meteo API.
3. The response is stored in state using `useState`.
4. The UI updates automatically and displays the weather details.

## Example Output
Weather Dashboard  
Current Weather  
Time: 2026-03-12T12:45  
Temperature: 30°C  
Wind Speed: 5 km/h
>>>>>>> e2a39c4b5b2a24cb8217b4f88c63b3fa0a6e7139
