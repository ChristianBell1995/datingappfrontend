## Frontend

### Get started
#### If you already have a modern version of node installed:
- Install the dependencies `yarn`
- Start the app `yarn dev`
- This should start the app at http://localhost:3000 where you can go and log in to the app.
- Either sign up with a new account, or look in the `seed.go` file in the backend repo and use one of the seeded users email and password to log in.

#### If you need to install node and a node version manager:
- Install node and a node version manager (`brew install node && brew install nvm`).
- Set your node version to a modern version of node (`nvm install 16.10.0 && nvm use 16.10.0`).
- Install yarn `npm install --global yarn`
- Then follow the "If you already have a modern version of node installed" steps

### Architecture overview
This app follows a modular architecture, with the main codebase structured into several directories:

#### `pages`
This directory contains the top-level components for each page of the app. Each page is a separate route in the app, and is rendered by a corresponding component in the pages directory.

#### `contexts`
This directory contains the context providers for the app. Context is a way to pass data through the component tree without having to pass props down manually at every level.

#### `api`
This directory contains the hooks that connect the app to the backend. These hooks use the `axios` library to make HTTP requests to the backend and return the response data to the components that need it.

#### `components`
 This directory contains the reusable components that make up the UI of the app. The components are organized into three subdirectories: `atoms`, `molecules`, and `organisms`.
- `atoms` are the smallest, most basic components, such as buttons or inputs.
- `molecules` are combinations of `atoms` that form more complex UI elements, such as form fields or card layouts.
- `organisms` are even larger components that are composed of `molecules` and `atoms`, and represent different layouts of the app.

This app also makes use of the [Tailwind CSS](https://tailwindcss.com/) library for styling, and the [React Query](https://react-query-v3.tanstack.com/) library for data fetching and caching. It is also written in TypeScript, a typed superset of JavaScript that provides type-checking and other features to improve code quality and readability.

