import React, { useState } from 'react';
import Board from './components/Board';
import { RefreshCw } from 'lucide-react';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    if (winner || board[i]) {
      return;
    }
    const newBoard = [...board];
    newBoard[i] = xIsNext ? '❌' : '⭕';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every(square => square)) {
    status = 'Draw!';
  } else {
    status = `Next player: ${xIsNext ? '❌' : '⭕'}`;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-600"><span role="img" aria-label="Tic-Tac-Toe">🕹️</span> Tic-Tac-Toe</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="text-xl mb-4">{status}</div>
        <Board board={board} onClick={handleClick} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline" onClick={resetGame}>
          <RefreshCw className="h-4 w-4 mr-2 inline-block" />
          Reset Game
        </button>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
