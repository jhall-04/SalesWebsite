import React from 'react'
import './Tile.css';

interface TileProps {
    level: string;
    name: string;
    description: string;
}

const Tile: React.FC<TileProps> = ({ level, name, description }) => {
    return (
        <div className='tile'>
            <div className='tile-text'>{name}</div>
            <div className='level-text'>{level}</div>
            <div className='level-description'>{description}</div>
        </div>
    );
}

export default Tile;