import React from 'react'
import './Tile.css';

interface TileProps {
    name: string;
    description: string;
    progress: number;
}

const Tile: React.FC<TileProps> = ({ name, description, progress }) => {
    return (
        <div className='tile'>
            <div className='tile-info'>
            <div className='tile-name'>{name}</div>
            <div className='tile-summary'>{description}</div>
            </div>
            <div className='tile-progress'>
            <div className='bar'>
              <progress className="tile-score-bar" value={progress} max={30}></progress>
            </div>
            <div className='labels'>
            <div className='lines'>
              <hr className='tile-advanced-line' />
              <hr className='tile-basic-line' />
            </div>
            <div className='titles'>
              <h2 className="tile-score-text-adv">Advanced</h2>
              <h2 className="tile-score-text-bsc">Basic</h2>
              <h2 className="tile-score-text-emg">Emerging</h2>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Tile;