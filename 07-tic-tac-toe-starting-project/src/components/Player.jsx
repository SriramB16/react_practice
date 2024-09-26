import { useState } from "react";


export default function Player({initialName, symbol, isActive}) {
    const[isEditing, setIsEditing] = useState(false);
    const[playerName, setPlayerName] = useState(initialName);

    function handleChange(e){
        setPlayerName(e.target.value);
    }
    function handleClick(){
        setIsEditing((editing) => !editing);
    }

    let playerInput = <span className='player-name'>{playerName}</span>
    let btnText = "Edit";

    if (isEditing){
        playerInput = <input type='text' value={playerName} onChange={handleChange}/>
        btnText = "Save"
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {playerInput}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleClick}>{btnText}</button>
        </li>
    )
}