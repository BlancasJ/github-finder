# Github Finder App

## Introduction
The Github Finder App is a web application that allows users to search for GitHub profiles using a username. Upon submitting a search query, the app displays the relevant GitHub profile information, utilizing GitHub's REST API.

This project is built with React, TypeScript, and Material-UI, and is bundled with Vite and Bun.js.

## Live Demo
You can access the live version of the app [here](https://blancasj.github.io/github-finder/).

## Mockup
The UI is based on the provided mockup which can be viewed [here](https://i.imgur.com/VRoAKP7.png).

## Features
- Search GitHub profiles by username
- View profile details including repositories, followers, and following counts
- Responsive design that works on desktop and mobile browsers
- Dark and light theme support

## API Reference
This application consumes the following GitHub API endpoint:
- GET https://api.github.com/users/{username}

## Prerequisites
Before running this project, make sure you have [Bun](https://bun.sh/) installed on your system.

## Installation
To set up the Evaluation App locally, follow these steps:

1. Clone the repository:
```sh
   git clone https://github.com/BlancasJ/github-finder.git
```

2. Navigate to the project directory:
```sh
   cd github-finder
```

3. Install dependencies with Bun:
```sh
   bun install
```

## Usage
To run the app in development mode, execute:
```sh
   bun run dev
```
This will start the development server, and you can view the app at http://localhost:5173.

## Building the App
To build the app for production, run:
```sh
   bun run build
```
The built static files will be available in the `dist` directory, ready to be deployed.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is open-source and available under the MIT License.
