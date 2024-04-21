import Nav from "../components/Nav";
import { Spotify } from "react-spotify-embed";
import { LiaDrumSolid } from "react-icons/lia";
import { PiGuitarThin } from "react-icons/pi";
import { GiGuitarBassHead } from "react-icons/gi";
import { CiMicrophoneOn } from "react-icons/ci";
import { PiVinylRecord } from "react-icons/pi";
import { SiProtools } from "react-icons/si";
import { GiGClef } from "react-icons/gi";








const Music = () => {
  return (
    <>
      <Nav />
      <h1 className="page-title">Music</h1>

      <div className="playlist-container">
        <Spotify
          className="spotify-playlist"
          link="https://open.spotify.com/playlist/000EOmuzrZ7YYAnQ9NTzVD?si=918b6232d65f43ca"
        />

        <Spotify
          className="spotify-playlist"
          link="https://open.spotify.com/playlist/2ldcx8tqMeOqfHpkUZqJEq?si=abf8da7bc7c640b6"
        />
      </div>

      <div class="music-info-container">
        <div class="list-container">
          <h2>Instruments</h2>
          <ul class="instruments">
            <li>Drums
              <LiaDrumSolid/>
            </li>
            <li>Guitar
              <PiGuitarThin/>
            </li>
            <li>Bass
              <GiGuitarBassHead/>
            </li>
            <li>Vocals
              <CiMicrophoneOn/>
            </li>
          </ul>
        </div>
        <div class="list-container">
          <h2>Tech</h2>
          <ul class="music-tech">
            <li>Logic Pro
              <PiVinylRecord/>
            </li>
            <li>Pro-Tools
              <SiProtools/>
            </li>
            <li>Notion - Composer
              <GiGClef/>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Music;
