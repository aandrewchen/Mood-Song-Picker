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
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [selectedOption, setSelectedOption] = useState('click me');

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

    // const handleKeyDown = (event) => {
    //     if (event.key === 'Enter') {
    //         getArtist();
    //     }
    // }

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDropdownMenu(false); // Close the dropdown after selection
      };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && selectedOption === 'happy') {
            navigate('/Happy')
        }
        else if (event.key === 'Enter' && selectedOption === 'sad') {
            navigate('/Sad')
        }
        else if (event.key === 'Enter' && selectedOption === 'calm') {
            navigate('/Calm')
        }
        else if (event.key === 'Enter' && selectedOption === 'adventurous') {
            navigate('/Adventurous')
        }
        else if (event.key === 'Enter' && selectedOption === 'energized') {
            navigate('/Energized')
        }
        else if (event.key === 'Enter' && selectedOption === 'in love') {
            navigate('/InLove')
        }
    }

    return (
        <div className="container">
            <video src='/videos/background1.mp4' autoPlay loop muted />
            <h1 className='title'>i am feeling </h1>
            <div className='dropdown' onKeyDown={handleKeyDown} tabIndex={0}>
                <div className='dropdown-button' onClick={(e) => setDropdownMenu(!dropdownMenu)}>
                {selectedOption && <p>{selectedOption}</p>}
                </div>
                {dropdownMenu && (
                <div className='dropdown-menu'>
                    <div className='option' onClick={() => handleOptionClick('happy')}>happy</div>
                    <div className='option' onClick={() => handleOptionClick('sad')}>sad</div>
                    <div className='option' onClick={() => handleOptionClick('calm')}>calm</div>
                    <div className='option' onClick={() => handleOptionClick('adventurous')}>adventurous</div>
                    <div className='option' onClick={() => handleOptionClick('energized')}>energized</div>
                    <div className='option' onClick={() => handleOptionClick('in love')}>in love</div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Home