import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const navigate = useNavigate()
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [selectedOption, setSelectedOption] = useState('click me');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDropdownMenu(false); // Close the dropdown after selection
      };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && selectedOption === 'happy') {
            var playlistID = '37i9dQZF1DX3rxVfibe1L0'
            var titleMood = 'Happy'
        }
        else if (event.key === 'Enter' && selectedOption === 'sad') {
            var playlistID = '37i9dQZF1DX7qK8ma5wgG1'
            var titleMood = 'Sad'
        }
        else if (event.key === 'Enter' && selectedOption === 'calm') {
            var playlistID = '37i9dQZF1DX7GTqMQDhOum'
            var titleMood = 'Calm'
        }
        else if (event.key === 'Enter' && selectedOption === 'dreamy') {
            var playlistID = '37i9dQZF1DX2PQDq3PdrHQ'
            var titleMood = 'Dreamy'
        }
        else if (event.key === 'Enter' && selectedOption === 'energized') {
            var playlistID = '37i9dQZF1DX0XUsuxWHRQd'
            var titleMood = 'Energized'
        }
        else if (event.key === 'Enter' && selectedOption === 'romantic') {
            var playlistID = '37i9dQZF1DX7rOY2tZUw1k'
            var titleMood = 'Romantic'
        }
        navigate('/' + titleMood + '/' + playlistID)
    }

    return (
        <div className="container">
            <video src='/videos/background1.mp4' autoPlay loop muted />
            <h1 className='home-title'>i am feeling </h1>
            <div className='dropdown' onKeyDown={handleKeyDown} tabIndex={0}>
                <div className='dropdown-button' onClick={(e) => setDropdownMenu(!dropdownMenu)}>
                {selectedOption && <p>{selectedOption}</p>}
                </div>
                {dropdownMenu && (
                <div className='dropdown-menu'>
                    <div className='option' onClick={() => handleOptionClick('happy')}>happy</div>
                    <div className='option' onClick={() => handleOptionClick('sad')}>sad</div>
                    <div className='option' onClick={() => handleOptionClick('calm')}>calm</div>
                    <div className='option' onClick={() => handleOptionClick('dreamy')}>dreamy</div>
                    <div className='option' onClick={() => handleOptionClick('energized')}>energized</div>
                    <div className='option' onClick={() => handleOptionClick('romantic')}>romantic</div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Home