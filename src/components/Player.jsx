import { useState } from "react";
export default function Player({InitialName,symbol,isActive})
{
    const[PlayerName ,setPlayerName] = useState(InitialName)
    const [isEditing,setIsEditing] = useState(false);

    const  handleEditClick= () => 
    {
        setIsEditing((editing) => !editing);
    }

    const handleNameChange = (event) =>
    {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{PlayerName} </span>;

    if(isEditing)
    {
        editablePlayerName = <input type="text" Value={PlayerName} required onChange={handleNameChange} />;
    }
    return (
        <li className={isActive ? 'active': undefined}>
          <span className = 'player'>
            {editablePlayerName}
          <span className="player-symbol">
          {symbol}
          </span>
          </span>
          <button onClick={ handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>

    );
}