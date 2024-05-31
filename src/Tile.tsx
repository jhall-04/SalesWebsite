import React from 'react'
import './Tile.css';

interface TileProps {
    imageSrc: string;
    text: string;
}

const Tile: React.FC<TileProps> = ({ imageSrc, text }) => {
    return (
        <div className='tile'>
            <img className="tile-image" src={imageSrc} alt={text} />
            <div className='tile-text'>{text}</div>
        </div>
    );
}

export default Tile;