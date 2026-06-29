# Movie Database

## Description

Movie Database is a React single page application that allows users to browse, organize, and manage a collection of movies. Users can view a curated list of top movies, browse all movies in the database, search for movies by title, sort the collection alphabetically, add new movies, and delete movies from the database.

## Features

* View a curated list of Top Movies.
* Browse all movies in the database.
* Search movies by title.
* Sort movies alphabetically (A–Z).
* Add a new movie using a controlled form.
* Delete movies from the collection.
* Display movie posters with descriptive alt text.

## Technologies Used

* React
* React Router
* JavaScript
* HTML
* CSS
* json-server

## Installation

Clone both the frontend and backend repositories.

### Frontend

```bash
npm install
npm start
```

### Backend

```bash
json-server --watch db.json --port 3000
```

## API

The application uses a custom `json-server` backend with a `movies` resource.

Example movie object:

```json
{
  "id": 1,
  "title": "Interstellar",
  "genre": "Sci-Fi",
  "rating": 5,
  "image": "https://...",
  "description": "A science fiction film directed by Christopher Nolan."
}
```

## Future Improvements

* Edit existing movies
* Filter by genre
* Display average movie rating
* Responsive mobile layout
* Favorite movies feature
