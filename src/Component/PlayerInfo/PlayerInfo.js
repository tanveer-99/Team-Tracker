import React, { useEffect, useState } from 'react';
import PlayerData from '../../data/fakedata.json';
import PlayerProfile from '../PlayerProfile/PlayerProfile';
import './PlayerInfo.css';


const PlayerInfo = () => {

    const [player, setPlayer] = useState(null);

    useEffect(() => {
        setPlayer(PlayerData);
    }, []);
    

    return (
        <div className="player-info">

            {
                player && <PlayerProfile player={player}></PlayerProfile>
            }
            
        </div>
    );
};

export default PlayerInfo;