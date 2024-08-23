# Battleship Calibration

## Description

A React Vite UI providing the functionality to run calibration tests against Turret calibration settings.

## Dependencies
- yarn 1.2+ | npm 10+
- Node 21+

## Installation
```
npm install
```

alternatively...
```
yarn
```

## Usage

Ensure API is running at http://localhost:3000. You should see ```Hello World!``` if successfully running.

Check the ```   .env    ``` file is in your root directory and contains the API URL ```   VITE_APP_API_URL=http://localhost:3000   ```

Run UI development server
```
npm run dev
```
alternatively...
```
yarn dev
```

Once running, navigate to  http://localhost:5173.

## Technology

- React VIte was used due to ease of setup. Provides the bare essentials and Typescript support.
- Mantine UI for components and layout. Allows oerride and provides some useful functionality reducing the need to install more packages.

## Directions, Assumptions & Motivations

- Validation has not been applied to the UI to showcase the API validation
- Input form doesn't enforce min or max values provided
- UI has not been tested for responsiveness
- The rotations were assumed to be the number of times to test the calibration
- A context layer has been used to provide a simple layout and provide a central area for functionality and state
- The native ```fetch``` has been used for the API and for the sake of time used within the context layer.


## Improvements

- Create an API service/hook and move API config into a config
- Implement prettier and linting fix on save
- Enum for location
- Error and messaging config for reusablility
- Language support and language files for text, could add errors into that too
- Unit tests
- Responsiveness
- Add proxy for API to config
- Provide a Dockerfile for easier startup
