# Getting Started with Create React App

This project is a sophisticated React-based application designed to exemplify the implementation of a selected subset of advanced functionalities. [Swagger Pet Store v3 API](https://github.com/swagger-api/swagger-petstore).

## Prerequisites

Prior to commencing, please verify that the following prerequisites are satisfied:

-Node.js: This application necessitates Node.js version 16 or later. You can download the required version from the official (https://nodejs.org/en/download) Node.js website.


## Installation

To install the React app, follow these steps:

1. Clone the repository to your local machine or download the source code archive.

Open a terminal and navigate to the root directory of the project.

Execute the following command to install all necessary dependencies.

    ````
    npm install
    ```

Upon successful installation of the dependencies, you should be able to run and test the application. Note that you can use any username and password to log into the app.

# Local Development

There are two primary methods to run this app locally for development purposes:


### Run With Built-in Mock Data Locally

This project utilizes [Mirage.js](https://miragejs.com/) to seed mock data, which is derived from the sample data provided by the [Swagger Pet Store API's Docker image](https://github.com/swagger-api/swagger-petstore#to-run-via-docker). When the app is executed in development mode, this mock data is automatically seeded using the Webpack development server.

To run the app with built-in mock data, execute the following command (runs at http://127.0.0.1:3000 by default):
```
npm run start
```

### Run With a Real Backend Server Locally

This project facilitates local integration with a real backend server. It includes an Express server configuration designed to forward all network requests prefixed with /api/v3/ to http://127.0.0.1:8080. The default address is customizable via the SWAGGER_PET_STORE_API_SERVER_ADDRESS environment variable.

Moreover, the package.json file includes a proxy field, which instructs the Webpack development server to route any non-HTML requests to the specified Express server during development. For further details on this setup, please consult the Create React App documentation.


Integrating these features allows you to exploit the Webpack development server's hot reload capability while connecting the application to a live backend server, thus avoiding reliance on mock data.

To run the app with a real backend server locally, follow these steps:

Initiate the Swagger Pet Store API server locally using either Docker or Maven at http://127.0.0.1:8080. For comprehensive instructions, please refer to the Swagger Pet Store GitHub repository.

Note: By default, the Swagger Pet Store API server operates at http://127.0.0.1:8080.
Start the development environment by executing npm run dev. This command will configure and launch the application automatically at http://127.0.0.1:4000.

Note: If the Swagger Pet Store API server is running on a different address or port than http://127.0.0.1:8080, you must set the correct server address by configuring the SWAGGER_PET_STORE_API_SERVER_ADDRESS environment variable before executing the command.


## Production Deployment

When you're ready to deploy the app in a production environment, follow these steps:

### Building the App

First, you'll need to compile and optimize the React app for production. This can be accomplished by running:
```
npm run build
```

This command builds the app for production and outputs it to the build folder.

### Serving the App

For serving the built app, you have multiple options:

#### Using Your Preferred HTTP Server

You can serve the production build using any HTTP server of your choice.

#### Using the Included Express Server

Alternatively, the project includes a production-grade Express server which you can use to serve the app.

To test this locally, perform the following steps:

1. Ensure that the app is built using `npm run build` as described above.

2. Start the Swagger Pet Store API server locally via Docker or Maven at http://127.0.0.1:8080. For detailed instructions, visit the [Swagger Pet Store GitHub repository](https://github.com/swagger-api/swagger-petstore/tree/master#to-run-with-maven).

   - Note: by default, the Swagger Pet Store API server runs at http://127.0.0.1:8080.

2. Start the included Express server (runs at http://127.0.0.1:4000 by default) by running:
   ```
   npm run server
   ```
   - Note: In case you run the Swagger Pet Store API server on a different address or port rather than http://127.0.0.1:8080, provide the correct server address by setting the **SWAGGER_PET_STORE_API_SERVER_ADDRESS** environment variable prior to running the command.

By following these steps, your React app should be up and running in a production environment.

## Testing

### Unit Test

This project leverages [Jest](https://jestjs.io/) as the test runner and [Testing Library](https://testing-library.com/) for testing utilities in unit tests.

#### Interactive Mode

You can launch the unit test runner in interactive watch mode. This mode allows you to see test results in real-time as you make changes to the code. To enter interactive mode, run:
```
npm run test
```


### End-to-end test

This project uses [Cypress](https://docs.cypress.io/guides/overview/why-cypress#Who-uses-Cypress) for end-to-end testing.

#### Interactive Mode

Execute `npm run cy:open` to open Cypress in interactive mode. Choose "E2E Testing", select your browser, and run your tests from the "Specs" tab.

Remember to terminate the process in the terminal with "Ctrl+C" after completion to avoid background processes.
