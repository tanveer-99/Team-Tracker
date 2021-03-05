import React, { useState }  from 'react';
import './PlayerProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Team from '../Team/Team';

const PlayerProfile = (props) => {

    
    const [list, setList] = useState([]);
    
    const handleAddPlayer = (player) => {
        const newList = [...list, player];
        setList(newList);
    }
   
    

    
    return (
        
        <div className="row">
            

           <div className="col-md-8 player-profile">
               <div className="row">
                {
                    props.player.map((player) => {
                                                    
                            
                            
                            return (
                        
                            <div className="col-md-4">
                                <div className="player-card">
                                        <div className="player-img">
                                            <img src={player.image} alt=""/>
                                        </div>
                                        <div className="player-details">
                                            <p className="name">{player.name}</p>
                                            <p className="age">{player.Age}</p>
                                            <p className="role">{player.role}</p>
                                            <p className="price">${player.price} million</p>
                                            <button onClick={
                                                () => handleAddPlayer(player) 
                                            }
                                            className="buy-btn">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                             Buy</button>
                                        </div>
                                </div>
                            </div>

                            )
                                        }
                    )
                    
                }
                </div>
                </div>
                
            <div className="col-md-4 team-list">
                <Team player={list}></Team>
            </div>
            
        </div>
    );
};

export default PlayerProfile;