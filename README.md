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