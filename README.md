# Front-end Test - E-commerce Education Platform

This is a project submitted for the Front-end Intern test. The goal is to build a user interface for an e-commerce education platform where users can search, filter, view details, and favorite courses. The project simulates a real-world user experience with a modern, responsive design and integrated smart suggestion (AI) features.

## Live Demo

You can view a live demo of the project here:

[**https://your-demo-link.vercel.app**](https://www.google.com/search?q=https://your-demo-link.vercel.app)  *(Please replace this with your Vercel/Netlify link)*

## Features Implemented

This project successfully implements all the required functional and technical specifications.

### Core Requirements

  - [x] **Display Product List**: Renders a list of courses from mock data.
  - [x] **Search and Filter**:
      - [x] Dynamic search by course name.
      - [x] Filter courses by price range, category, and level.
  - [x] **Smart AI Suggestions**:
      - [x] A dedicated button to fetch simulated API suggestions.
      - [x] Suggestions are based on "user behavior" (e.g., popular courses).
  - [x] **Product Detail Modal**:
      - [x] Opens a modal with comprehensive course information upon clicking "View Details".
  - [x] **Favorites/Wishlist**:
      - [x] Allows users to add or remove courses from their favorites.
      - [x] Displays a dedicated section for all favorited items.
      - [x] Provides toast notifications to confirm user actions.

### Bonus Features & Enhancements

  - [x] **View History Integration**: Displays a section for recently viewed courses.
  - [x] **Loading Skeletons**: Shows a skeleton UI while waiting for AI suggestions to load.
  - [x] **API Error Handling**: Displays a notification if the API call for suggestions fails.
  - [x] **Modern UI/UX Design**: A clean interface with an optimized user experience, including smooth hover and transition effects.
  - [x] **Responsive Design**: The layout works seamlessly across all devices (desktop, tablet, mobile).

## Technology Stack

  - **HTML5**
  - **CSS3** & **Tailwind CSS** (via CDN)
  - **JavaScript (ES6+)**
  - **React** (via CDN)
  - **Babel** (to transpile JSX directly in the browser)
  - **Font Awesome** (for icons)

## How to Run This Project

This project is built as a single HTML file and does not require a complex build process (like `npm install`).

### Method 1: Open the File Directly (Easiest)

1.  Clone this repository to your local machine.
2.  Open the `index.html` file directly in your web browser (e.g., Google Chrome, Firefox).

### Method 2: Use a Live Server (Recommended)

This is the best way to experience the project if you are using Visual Studio Code.

1.  Open the project folder in **Visual Studio Code**.
2.  If you don't have it, install the **Live Server** extension from the Marketplace.
3.  Right-click on the `index.html` file and select **"Open with Live Server"**. Your browser will automatically open the page and reload upon changes.

## Project Structure

The entire source code is contained within the `index.html` file:

  - **`<head>`**: Contains the CDN links to load React, TailwindCSS, Font Awesome, and other basic configurations.
  - **`<body>`**: Contains the `<div id="root"></div>` element where the React application is rendered.
  - **`<script type="text/babel">`**:
      - Holds the entire React (JSX) source code.
      - **Mock Data**: `mockCourses`, `categories`, and `levels` are predefined.
      - **Components**: React components (`App`, `CourseCard`, `CourseModal`, `SkeletonCard`, `Toast`, etc.) are defined to build the UI.
      - **Render**: The final line, `ReactDOM.render(<App />, document.getElementById('root'));`, boots up the application.

## Author

  - **Your Name**
  - **Email**: your.email@example.com
  - **LinkedIn**: [linkedin.com/in/yourprofile](https://www.google.com/search?q=https://linkedin.com/in/yourprofile)# antoree-fetest
