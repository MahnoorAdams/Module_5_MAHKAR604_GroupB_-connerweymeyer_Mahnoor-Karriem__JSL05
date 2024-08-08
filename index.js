// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    {
      title: "Escape (The Piña Colada Song)",
      artist: "Rupert Holmes",
      genre: "Pop",
    },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    {
      title: "Ain't No Mountain High Enough",
      artist: "Marvin Gaye & Tammi Terrell",
      genre: "R&B",
    },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    {
      title: "Fooled Around and Fell in Love",
      artist: "Elvin Bishop",
      genre: "Rock",
    },
   
  ];
  // console.log(songs);
  
  // Object containing each Guardian's preferred genre
  const guardians = {
    "Star-Lord": "Rock",
    Gamora: "Pop",
    Drax: "R&B",
    // Add preferences for Drax, Rocket, and Groot
  };
  // console.log(guardians);

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  // Use the map() function to create playlists for each Guardian
  // Your code here
  const guardiansNames = Object.keys(guardians);
  console.log(guardiansNames);

  // Getting each guardians genre's song/song's
  Object.keys(guardians).map((guardian) => {
    const guardianGenre = guardians[guardian];
    const guardianSongGenre = songs.filter(
      (songs) => songs.genre === guardianGenre
    );

    // Displaying on HTML
    // Container div for playlist
    const playlistDiv = document.createElement("div");
    playlistDiv.classList.add("playlist");

    const guardianName = document.createElement("h2");
    guardianName.textContent = `${guardian}'s Playlist`;
    playlistDiv.appendChild(guardianName);

    guardianSongGenre.forEach((songs) => {
      const songDiv = document.createElement("div");
      songDiv.classList.add("song");
      const title = document.createElement("span");
      title.textContent = `${songs.title} - ${songs.artist}`;
      title.classList.add("title");

      const artistName = document.createElement("span");
      songDiv.appendChild(title, artistName);

      playlistDiv.appendChild(songDiv);

      playlists.appendChild(playlistDiv);
    });

    // const title = document.createElement("span");
    // title.classList.add("title");
    // let artistName = document.createElement("span");
    // songDiv.appendChild(title, artistName);

    // playlistDiv.appendChild(songDiv);

    // playlists.appendChild(playlistDiv);
  });
}
// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);