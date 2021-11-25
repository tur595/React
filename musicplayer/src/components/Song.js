import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  const rotate = {
    animation: `rotation 70s infinite linear`,
  };
  return (
    <div className="song-container">
      <img
        style={isPlaying ? rotate : null}
        alt={currentSong.name}
        src={currentSong.cover}
      ></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
