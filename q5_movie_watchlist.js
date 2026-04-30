// Common Set
// Question 5: Movie Watchlist System

// 1. Insert one movie document (collection auto-created)
db.watchlist.insertOne({
  movie_id: 1,
  title: "Inception",
  genre: "Sci-Fi",
  release_year: 2010,
  imdb_rating: 8.8,
  watched: false
});

// 2. Insert multiple movie records
db.watchlist.insertMany([
  {
    movie_id: 2,
    title: "Titanic",
    genre: "Romance",
    release_year: 1997,
    imdb_rating: 7.9,
    watched: true
  },
  {
    movie_id: 3,
    title: "Avengers: Endgame",
    genre: "Action",
    release_year: 2019,
    imdb_rating: 8.4,
    watched: false
  },
  {
    movie_id: 4,
    title: "3 Idiots",
    genre: "Comedy",
    release_year: 2009,
    imdb_rating: 8.4,
    watched: true
  },
  {
    movie_id: 5,
    title: "Interstellar",
    genre: "Sci-Fi",
    release_year: 2014,
    imdb_rating: 8.6,
    watched: false
  },
  {
    movie_id: 6,
    title: "Dangal",
    genre: "Drama",
    release_year: 2016,
    imdb_rating: 8.3,
    watched: true
  }
]);

// 3. Retrieve movies where watched is false
db.watchlist.find({ watched: false });

// 4. Display only title, genre, and imdb_rating
db.watchlist.find(
  {},
  { _id: 0, title: 1, genre: 1, imdb_rating: 1 }
);

// 5. Delete a movie based on movie_id
db.watchlist.deleteOne({ movie_id: 6 });
