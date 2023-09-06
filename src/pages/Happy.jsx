import React, { useState, useEffect } from 'react'

const CLIENT_ID = "ad2fcb1b0c354f51abf0b4462f76f0ef";
const CLIENT_SECRET = "7231bd716c85421191380487104dff91";

const Happy = () => {
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
    var returnedPlaylistData = await fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DX3rxVfibe1L0?fields=tracks.items.track(album.images,external_urls,name)', authParameters)
        .then(result => result.json())
        // .then(data => console.log(data))
        .then(data => setSongs(data.tracks.items))
  }

  console.log(songs)

  // console.log("song photo url: " + songs[0].track.album.images[0].url)
  // console.log("song url: " + songs[0].track.external_urls.spotify)
  // console.log("song name: " + songs[0].track.name)

  return (
    <div>
      <h1>Happy Songs</h1>
    </div>

  )
}

export default Happy