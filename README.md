# Applied Programming Team Project Repository

This repository contains the codebase for the team project.

## GitHub Workflow Rules
- Work on individual branches.
- Perform Monday merges.
- Maintain a clean GitHub repository with descriptive comments.
- Attach Markdown documents to relevant sections.

### Monday
- Merge changes and plan for the week.

### Tuesday
- Conduct code reviews.

### Wednesday
- Utilize in-class time effectively.

### Thursday
- Every other week: Meet with Brother Grimmett.
- On alternate weeks: Utilize the career center.

### Friday
- Conduct virtual meetings and stand-ups.

### Saturday/Sunday
- Allocate time for personal study and family activities.
- Communication is only permitted for sharing memes.

## Codebase Overview
### `app.js` File (Backend)
- Configures the web server using Express.
- Connects to MongoDB using Mongoose.
- Handles Cross-Origin Resource Sharing (CORS).
- Implements basic security measures using Helmet.
- Defines API routes for handling requests.
- Includes configuration variables for PORT and MongoDB URL.
- Utilizes middleware for parsing JSON bodies and handling CORS.
- Connects to the MongoDB database.
- Defines routes for handling API requests.
- Implements error handling middleware for global errors.

This codebase provides a foundation for building a RESTful API with Node.js, Express, and MongoDB, including basic security measures and error handling.

### `config.js` File
- Defines the configuration variables:
  - `PORT`: Specifies the port number for the server, defaulting to 3000 if not specified in the environment variables.
  - `mongodbUrl`: Specifies the connection URL for MongoDB, including credentials, database name, and additional options like retryWrites and appName.
- These variables are exported for use in other parts of the application.



`jest.config.js`:
- Configures Jest, a JavaScript testing framework.
- Sets the testEnvironment property to 'node', indicating that tests will run in a Node.js environment.
`index.html`:
- Entry point for the client-side application.
- Includes necessary meta tags for character set and viewport.
- Sets the title of the page to "Know Your Worth" and specifies a favicon.
- Links to CSS files for styling the application.
- Contains a <div> element with the id "root" where the React application will be mounted.
- Includes a <script> tag to load the main JavaScript file (main.jsx) responsible for rendering the   React application.
`vite.config.js`:
- Configures Vite, a frontend build tool for modern web development.
- Imports `defineConfig` from Vite and the React plugin.
- Exports a configuration object using `defineConfig()`.
- The `plugins` array includes the `react()` plugin to enable React support in Vite.
- Additional configuration options can be added within the `defineConfig()` function to customize Vite's behavior further.
- These files collectively set up the testing environment, define the structure of the HTML page, and configure the development environment for a React application.