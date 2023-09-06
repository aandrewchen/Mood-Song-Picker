import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/card';
import './Happy.css'

const CLIENT_ID = "ad2fcb1b0c354f51abf0b4462f76f0ef";
const CLIENT_SECRET = "39f54d332dbe4735a6e9f72802078959";

const Happy = () => {
  const { playlistID, titleMood } = useParams();
  const [accessToken, setAccessToken] = useState('');
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    var authParameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => setAccessToken(data.access_token))
  }, [])

  useEffect(() => {
    if (accessToken) {
      getPlaylistData()
    }
  }, [accessToken])

  async function getPlaylistData() {
    var authParameters = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    }
    var returnedPlaylistData = await fetch('https://api.spotify.com/v1/playlists/' + playlistID + '?fields=tracks.items.track(album.images,external_urls,name,id,artists)', authParameters)
        .then(result => result.json())
        .then(data => setSongs(data.tracks.items))
  }

  return (
    <div>
      <video src='/videos/background1.mp4' autoPlay loop muted />
      <h1 className="title">{titleMood} Songs</h1>
      {songs && (
        <div className="songs-container">
          {songs.slice(0,5).map((song) => (
            <Card key={song.track.id} song={song} />
          ))}
        </div>
      )}
    </div>

  )
}

export default Happy