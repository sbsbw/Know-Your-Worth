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

### `jobs.js` File

- This code is a Node.js application utilizing the Mongoose library to interact with a MongoDB database. Below is a summary of its functionality:

- Dependencies: The code requires the mongoose library for database connection and uses a configuration file (presumably named config.js) to obtain the MongoDB URL.

- Schema Definition: A Mongoose schema named jobSchema is defined, specifying the structure of job documents to be stored in the database. Each job document contains fields such as userId, jobTitle, company, salary, location, createdAt, and updatedAt.

- Model Creation: The schema is compiled into a Mongoose model named Job using mongoose.model(). This model will be used to perform CRUD (Create, Read, Update, Delete) operations on job documents.

- Database Connection: The code establishes a connection to MongoDB using the URL obtained from the configuration file. It utilizes the mongoose.connect() method, passing in options for connection settings like { useNewUrlParser: true, useUnifiedTopology: true }.

- Querying Database: Upon successful connection to MongoDB, the code queries the database to retrieve all job documents using Job.find(). The retrieved jobs are then processed, although in the provided code, the result is not printed to the console due to the line being commented out.

- Error Handling: Error handling is implemented using catch blocks to log any errors that occur during database connection or query execution.

- Exporting Model: Finally, the Job model is exported from the module to be used in other parts of the application.

### `api.js` File

- This code is an Express.js router module responsible for defining API routes related to job data. Below is a summary of its functionality:

- Dependencies: The code requires the express library to create a web server and define routes. It also requires the Job model from the ../models/jobs module to interact with job data stored in the database.

- Router Creation: An Express router named router is created using express.Router(). This router will handle all API routes related to job data.

- Route Definition: The router defines a GET route at /jobs using router.get(). This route is responsible for retrieving all jobs from the database. It utilizes Job.find() to fetch all job documents.

- Asynchronous Handling: Route handlers are implemented using asynchronous functions (async/await syntax) to handle asynchronous operations like database queries. This ensures non-blocking behavior and improved performance.

- Response Handling: Upon successfully retrieving jobs from the database, the router sends a JSON response with status code 200 containing the retrieved jobs. If an error occurs during the retrieval process, the router forwards the error to the error handling middleware using next(error).

- Error Handling Middleware: An error handling middleware function is defined using router.use(). This middleware catches any errors that occur during route processing and sends an appropriate error response with status code 500 containing the error message.

- Export Router: Finally, the router module is exported to be used in other parts of the application.

### client side review

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

## Know Your Worth Web Application

## README Summary

This HTML file represents the front-end structure of the "Know Your Worth" web application. Below is a brief overview of its key components:

### Header Section

- Displays the website logo and navigation menu.
- Navigation links include "Home", "Job Search", "Job Help", and "About Us".

### Main Content

#### About Us Section

- Introduces the purpose and mission of the platform.
- Provides information about the team and their dedication to helping users find their dream job.

#### Our Team Section

- Displays team members' profiles with their names and images.
- Each team member's profile includes a brief description.

### Footer Section

- Contains social media icons for Facebook, Twitter, and Instagram.
- Displays the navigation menu with the same links as the header for easy access.

### Copyright Notice

- Indicates the copyright ownership of the content.

### Script (Commented Out)

- Contains a commented-out script tag that likely links to additional JavaScript functionality.

This HTML file serves as the foundation for the "Know Your Worth" website, providing users with information about the platform, its mission, and the team behind it.

## Know Your Worth Web Application - index.html

## README Summary

This HTML file serves as the main landing page for the "Know Your Worth" web application. Here's a concise overview of its structure and content:

### Header Section

- Displays the website logo and navigation menu.
- Navigation links include "Home", "Job Search", "Job Help", and "About Us".

### Main Content

#### Introduction Section

- Displays the website title ("Know Your Worth") and a call-to-action ("Get started Today").

#### Sections

1. **Job Search**:
   - Explains how users can utilize the platform to compare salaries based on education and work experience.

2. **Location Matters**:
   - Highlights the database's capability to provide accurate salary information from various locations.

3. **Job Help**:
   - Offers guidance on finding jobs, becoming a relevant candidate, and taking initiative in career pursuits.

#### Additional Resources Section: (Placeholder)

- Mentions the availability of clickable link boxes for additional resources (not yet implemented).

### Footer Section

- Contains social media icons for Facebook, Twitter, and Instagram.
- Displays the navigation menu with the same links as the header for easy access.

### Copyright Notice

- Indicates the copyright ownership of the content.

- This HTML file serves as the main entry point for users visiting the "Know Your Worth" website, providing them with essential information about the platform's features and functionalities.

# Job Help Page - job-help.html

## README Summary

This HTML file represents a page dedicated to providing job interview resources and assistance on the "Know Your Worth" website. Here's a concise overview of its structure and content:

### Header Section

- Displays the website logo and navigation menu.
- Navigation links include "Home", "Job Search", "Job Help", and "About Us".

### Main Content

#### Job Interview Resources Section

- Provides information and resources for job interview preparation.
- Includes an image related to job interviews.

#### Job Help Section

- Offers assistance for job seekers.
- Lists services such as resume preparation and interview assistance.

#### Resume Preparation and Writing Strategies Section

- Outlines steps for creating a professional resume and applying for jobs.

#### Interview Preparation Section

- Provides tips and steps for preparing for job interviews.
- Includes a cited source for additional information.

#### Contact Us Form Section

- Displays a form for users to submit inquiries or request quotes.

### Footer Section

- Contains social media icons for Facebook, Twitter, and Instagram.
- Displays the navigation menu with the same links as the header for easy access.

### Copyright Notice

- Indicates the copyright ownership of the content.

- This HTML file serves as a valuable resource for users seeking assistance with job interviews, providing detailed information and guidance on interview preparation, resume writing, and contacting the platform for further assistance.

# Job Search Interface - job-search.html

## README Summary

This HTML file serves as a form-based search interface for job seekers on the "Know Your Worth" website. Here's a concise overview of its structure and functionality:

### Header Section

- Displays the website logo and navigation menu.
- Navigation links include "Home", "Job Search", "Job Help", and "About Us".

### Main Content

#### Search Criteria Section

- Allows users to input job search criteria such as job title, location, years of experience, and education level.
- Provides options for selecting the location from a dropdown list and education level from a predefined list.

### Footer Section

- Contains social media icons for Facebook, Twitter, and Instagram.
- Displays the navigation menu with the same links as the header for easy access.

### Copyright Notice

- Indicates the copyright ownership of the content.

- This HTML file provides an intuitive interface for users to specify their job search preferences and initiate a search to discover their worth in the job market.
