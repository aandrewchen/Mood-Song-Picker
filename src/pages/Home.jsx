import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const CLIENT_ID = "ad2fcb1b0c354f51abf0b4462f76f0ef";
const CLIENT_SECRET = "7231bd716c85421191380487104dff91";

const Home = () => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState('')
    const [accessToken, setAccessToken] = useState('');
    const [spotifyURL, setSpotifyURL] = useState('');

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

    // async function getArtist() {
    //     var authParameters = {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer ' + accessToken
    //         }
    //     }
    //     await fetch('https://api.spotify.com/v1/artists/' + inputValue, authParameters)
    //         .then(result => result.json())
    //         .then(data => setSpotifyURL(data.external_urls.spotify))
    // }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            getArtist();
        }
    }

    return (
        <div className="container">
            <video src='/videos/background1.mp4' autoPlay loop muted />
            <h1 className='title'>i am feeling </h1>
            <div className='dropdown'>
                <select name="mood" id="mood">
                    <option value="happy">happy</option>
                    <option value="sad">sad</option>
                    <option value="calm" >calm</option>
                    <option value="energized" >energized</option>
                </select>
            </div>

            {/* <div className="searchbar">
                <input
                    className="center"
                    type="text"
                    value={inputValue}
                    placeholder="how are you feeling today?"
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div> */}
        </div>
    )
}

export default Home