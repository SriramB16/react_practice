import Player from './components/Player.jsx'
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";

function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSelectSquare(){
        setActivePlayer(actPlayer => actPlayer === 'X' ? 'O' : 'X');
    }
  return (
      <div id='game-container'>
          <ol id='players' className="highlight-player">
            <Player initialName="player 1" symbol='X' isActive={activePlayer === 'X'}/>
            <Player initialName="player 2" symbol='O' isActive={activePlayer === 'O'}/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
  )
}

export default App
