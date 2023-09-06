import React from 'react'
import './Card.css'

const Card = ({ song }) => {
  return (
    <div className='card-container'>
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
