import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'

const Card = ({ song }) => {

    const navigate = useNavigate()

    const handleClick = (link) => {
        const newTab = window.open(link, '_blank')
        if (newTab) {
            newTab.focus()
          }
    }

  return (
    <div className='card-container' onClick={() => handleClick(song.track.external_urls.spotify)}>
      <div className='card-image-container'>
        <img src={song.track.album.images[0].url} />
      </div>
      <div className='card-title'>
        {song.track.artists[0].name} - {song.track.name}
      </div>
    </div>
  )
}

export default Card
