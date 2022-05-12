// css
import './App.css';

// react
import { useState, useEffect, useCallback } from 'react';

// data
import {wordsList} from './data/words'

// components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedCategory, setPikedCategory] = useState('')
  const [pickedWord, setPikedWord] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)
  
  function pickCategoryAndWord() {
    // pick random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    // console.log(category)

    // pick random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    // console.log(word)

    return {category, word}
  }

  // start game
  function startGame() {
    const {category, word} = pickCategoryAndWord()
    console.log(category, word)

    // create array letters
    let wordLetters = word.split("")

    wordLetters = wordLetters.map(l => l.toLowerCase())
    console.log(wordLetters)

    setPikedCategory(category)
    setPikedWord(word)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }

  // process letter input
  function verifyLetter() {
    setGameStage(stages[2].name)
  }

  // restarts game
  function restartGame() {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game 
        verifyLetter={verifyLetter}
        pickedCategory={pickedCategory}
        pickedWord={pickedWord}
        letters={letters}
        />}
      {gameStage === 'end' && <GameOver restartGame={restartGame} />}
    </div>
  );
}

export default App;
