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