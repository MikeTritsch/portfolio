import Nav from "../components/Nav"
import { Spotify } from "react-spotify-embed"

const Music = () => {
  return (
    <>
      <Nav />
        <h1 className="page-title">Music</h1>
        
        <div className="playlist-container">
          <Spotify className="spotify-playlist" link="https://open.spotify.com/playlist/000EOmuzrZ7YYAnQ9NTzVD?si=918b6232d65f43ca"/>

          <Spotify className="spotify-playlist" link="https://open.spotify.com/playlist/2ldcx8tqMeOqfHpkUZqJEq?si=abf8da7bc7c640b6"/>
        </div>
    
    
    
    
    
    </>
  )
}

export default Music