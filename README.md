# Weather Dashboard 🌦️

A simple React application that fetches and displays real-time weather information using a public weather API. The application demonstrates API integration, React state management, and dynamic UI updates.

## Live Demo
https://mushrifa-hussain.github.io/Weather-Dashboard

## Features
- Fetches real-time weather data from a public API
- Displays current weather details such as:
  - Temperature
  - Wind Speed
  - Time
- Shows a loading message while data is being fetched
- Dynamic UI updates using React state

## Screenshot
<img width="1919" height="1029" alt="image" src="https://github.com/user-attachments/assets/a60a71bc-afa0-427d-8b0f-76495dc73dbe" />

## Technologies Used
- React
- JavaScript
- HTML
- CSS
- Vite
- Fetch API

## API Used
Weather data is fetched from the **Open-Meteo API**.

Example API endpoint:

https://api.open-meteo.com/v1/forecast?latitude=12.87&longitude=74.88&current_weather=true

## Concepts Practiced
- React Hooks (`useState`, `useEffect`)
- Fetching data from APIs
- Asynchronous JavaScript
- Conditional rendering
- Building interactive UI components

## How It Works
1. When the application loads, the `useEffect` hook triggers an API request.
2. Weather data is fetched from the Open-Meteo API.
3. The response is stored in React state.
4. The UI updates automatically to display the current weather details.

## Example Output
Weather Dashboard  
Current Weather  
Temperature: 30°C  
Wind Speed: 5 km/h  

## Project Structure
