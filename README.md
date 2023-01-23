# Dynamic cypress

## Installation

1. Clone the repository
2. Run `npm install` to install packages
3. Create a `.env.local` file in the root directory using the `.env.example` format
4. Run `npm run dev` to start local server
5. Run `npm test` to run e2e tests with Cypress

To use Github Actions:

1. Create an account on cypress
2. Create a project
3. Copy the project id and paste in your `cypress.config.ts` file
4. In your repository, navigate to Settings > Secrets and variables > Actions
5. Create a new repository secret named `CYPRESS_RECORD_KEY`
6. Copy the record key from your Cypress Dashboard and paste as the value of `CYPRESS_RECORD_KEY`
