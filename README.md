# Book List Application

## Overview
This is a simple React application that allows users to view a list of books. Users can toggle between grid and list views, as well as search for specific books by title.

## Features
- Display books in either grid or list view.
- Search functionality to filter books by title.
- Each book includes details such as title, genre, publication date, description, and status.

## Components
### GridView
- Displays books in a grid layout.
- Each book is represented by a card with details like title, genre, publication date, description, and status.

### ListView
- Displays books in a tabular list format.
- Each row represents a book with columns for title, publication date, description, and status.

### App
- Main component that manages the application state.
- Includes a toggle button to switch between grid and list views.
- Provides a search input for filtering books by title.
- Passes filtered book data to either GridView or ListView based on the selected view mode.

## Usage
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.
4. Open the application in your web browser.

## Technologies Used
- React.js
- JavaScript
- CSS
