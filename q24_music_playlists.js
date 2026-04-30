//  Common Set
// Question 24: Music Playlist Manager

// 1. Insert 5 playlist documents
db.playlists.insertMany([
  {
    playlist_id: 1,
    user_name: "Amit",
    playlist_name: "Workout Hits",
    songs: [
      { title: "Song A", artist: "Artist 1" },
      { title: "Song B", artist: "Artist 2" }
    ],
    created_date: new Date("2025-01-01"),
    total_duration_minutes: 60,
    is_public: true,
    play_count: 150
  },
  {
    playlist_id: 2,
    user_name: "Priya",
    playlist_name: "Chill Vibes",
    songs: [
      { title: "Song C", artist: "Artist 3" },
      { title: "Song D", artist: "Artist 4" }
    ],
    created_date: new Date("2024-05-01"),
    total_duration_minutes: 45,
    is_public: true,
    play_count: 80
  },
  {
    playlist_id: 3,
    user_name: "Amit",
    playlist_name: "Party Mix",
    songs: [
      { title: "Song E", artist: "Artist 5" },
      { title: "Song F", artist: "Artist 6" }
    ],
    created_date: new Date("2022-12-01"),
    total_duration_minutes: 70,
    is_public: false,
    play_count: 200
  },
  {
    playlist_id: 4,
    user_name: "Rahul",
    playlist_name: "Romantic",
    songs: [
      { title: "Song G", artist: "Artist 7" }
    ],
    created_date: new Date("2025-03-01"),
    total_duration_minutes: 30,
    is_public: true,
    play_count: 120
  },
  {
    playlist_id: 5,
    user_name: "Priya",
    playlist_name: "Focus",
    songs: [
      { title: "Song H", artist: "Artist 8" }
    ],
    created_date: new Date("2023-02-01"),
    total_duration_minutes: 50,
    is_public: false,
    play_count: 60
  }
]);

// 2. Find public playlists with play_count > 100
db.playlists.find({
  is_public: true,
  play_count: { $gt: 100 }
});

// 3. Increment play_count by 1 for a specific playlist_id (example: 1)
db.playlists.updateOne(
  { playlist_id: 1 },
  { $inc: { play_count: 1 } }
);

// 4. Delete playlists before 2023-01-01 AND not public
db.playlists.deleteMany({
  created_date: { $lt: new Date("2023-01-01") },
  is_public: false
});

// 5. Average total_duration_minutes per user
db.playlists.aggregate([
  {
    $group: {
      _id: "$user_name",
      avg_duration: { $avg: "$total_duration_minutes" }
    }
  }
]);
