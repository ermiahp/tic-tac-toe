import React, { useState } from 'react';
import Box from './Box';
import './TicBoard.css';

const winMap = [123, 456, 789, 147, 258, 369, 357, 159]

const TicBoard = () => {
    const [playerType, setPlayerType] = useState(false);
    const [playerA, setPlayerA] = useState([]);
    const [playerB, setPlayerB] = useState([]);
    
    const slectedCell = (index) => {
        if(playerType){
            setPlayerA([...playerA, index]);
        }else{
            setPlayerB([...playerB, index]);
        }
        checkWinner();
        setPlayerType(!playerType);
    }

    const checkWinner = () => {
        if(playerType){
            for (let i = 0; i < winMap.length; i++) {
                const element = playerA[i];
                
            }
        }else{
            
        }
    };

    return(
        <div className='tic-tac-toe'>
            {[...Array(9)].map((i, index) => {
                return (
                    <Box 
                        index={index} 
                        playerType={playerType? 'o': 'x'} 
                        cellSelecting={() => slectedCell(index + 1)}
                    />
                )
            })}
        </div>
    )
}

export default TicBoard;