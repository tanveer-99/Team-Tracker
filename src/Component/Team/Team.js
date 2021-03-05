import React, { useState } from 'react';
import './Team.css';

const Team = (props) => {
    const list = props.player;

    const [team, setTeam] = useState([]);


    const removeDuplicatePlayer = (list)=> {
        
        let uniqueList = list.filter((li, index) => {
            return list.indexOf(li) === index;
        });
        return uniqueList;
    }  
    
    const uniqueList = removeDuplicatePlayer(list);
    console.log(uniqueList);
    let totalPrice = 0;

    uniqueList.map((player) => {
        const price = parseFloat(player.price);
        totalPrice = totalPrice + price;
    });

    return (
        
        <div>

        <div className="team-list">
            <h3 className="title">Player List</h3>
            {
                uniqueList.map((player) => {
                    
                    return (
                   
                    <div className="cart">
                        <h3 className="player-list">{player.name}</h3>
                        <p className="price">${player.price} million</p>
                    </div>
                    
                    )
                })
            }
            
        </div>

        <div className="total">
            <h3>Total: </h3>
            <p>${totalPrice} million</p>
        </div>

        </div>

        
    );
};

export default Team;