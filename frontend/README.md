# Frontend Documentation

The frontend of this application is built using React, with additional styling provided by the Tailwind CSS library and DaisyUI. Redux Toolkit and React-Redux are used for state management. Below is an overview of the key aspects of the frontend.

## Project Structure

The project follows a standard React project structure. Key directories and files include:

- **`src/`**: Main source code directory.
  - **`components/`**: Reusable React components.
  - **`features/`**: Functionalities implemented as features.
  - **`pages/`**: Main application pages.
  - **`assets/`**: Static assets like images.
  - **`app/`**: Redux or context API setup (if applicable).
  - **`index.tsx`**: Entry point for the application.
- **`public/`**: Public assets and HTML template.
- **`package.json`**: Node.js package configuration.

## Components

### `AnnouncementCard`

- Description: Renders an individual announcement.
- Props:
  - `announcement`: Data for the announcement.

### `Announcements`

- Description: Displays a list of announcements.
- Uses: `AnnouncementCard` component.

### `QuizCard`

- Description: Renders an individual quiz.
- Props:
  - `quiz`: Data for the quiz.

### `Dashboard`

- Description: Main dashboard page.
- Uses: `Announcements` and `QuizCard` components.

### `Login`

- Description: Login page.

### `ExamTime`

- Description: Exam time pane.

## State Management

The application uses Redux Toolkit and React-Redux for state management. Two reducers are employed:

- **`announce` reducer**:
  - **State**:
    - `announcements`: Array of announcements.
    - `isLoading`: Boolean indicating if data is being loaded.
    - `isError`: Boolean indicating if an error occurred.
    - `isSuccess`: Boolean indicating if the operation was successful.
    - `message`: Additional information or error message.

- **`quizzes` reducer**:
  - **State**:
    - `quizzes`: Array of quizzes.
    - `isLoading`: Boolean indicating if data is being loaded.
    - `isError`: Boolean indicating if an error occurred.
    - `isSuccess`: Boolean indicating if the operation was successful.
    - `message`: Additional information or error message.

## Data Fetching

Data is fetched from the backend API, which is hosted at [https://anyware-challenge-server.vercel.app/](https://anyware-challenge-server.vercel.app/).

## Styling

The styling of the application is done using the Tailwind CSS library with DaisyUI. The styling might be basic, and improvements can be made as needed.

ps : I'm not quite good at colors choosing :grinning: 

## Deployment

The frontend is deployed on Vercel and can be accessed at [https://anyware-challenge.vercel.app/](https://anyware-challenge.vercel.app/).

## Dependencies

Key dependencies include:

- `react`: JavaScript library for building user interfaces.
- `tailwindcss`: A utility-first CSS framework.
- `daisyui`: A UI component library for Tailwind CSS.
- `@reduxjs/toolkit`: A set of tools for efficient Redux development.
- `react-redux`: Official React bindings for Redux.

## Scripts

To run the project locally, use the following npm scripts:

First of all run `npm install` to install all dependencies

- **Start the project:** `npm start`
- **Build the project:** `npm run build`
- **Run tests:** `npm test`

## Note

Make sure your backend server is running at [https://anyware-challenge-server.vercel.app/](https://anyware-challenge-server.vercel.app/) for proper data fetching.
