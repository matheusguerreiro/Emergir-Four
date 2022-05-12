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
  
  const pickCategoryAndWord = useCallback(() => {
    // pick random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    // console.log(category)

    // pick random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    // console.log(word)

    return {category, word}
  }, [words])

  // start game
  // usamos useCallback para consertar as dependencias do useEffect caso seja função
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates()

    const {category, word} = pickCategoryAndWord()
    // console.log(category, word)

    // create array letters
    let wordLetters = word.split("")
    wordLetters = wordLetters.map(l => l.toLowerCase())
    // console.log(wordLetters)

    setPikedCategory(category)
    setPikedWord(word)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickCategoryAndWord])

  // process letter input
  function verifyLetter(letter) {
    const normalizedLetter = letter.toLowerCase()

    // if letter has already been utilized
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter
      ])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
    // console.log(guessedLetters)
    // console.log(wrongLetters)
  }

  function clearLetterStates() {
    setGuessedLetters([])
    setWrongLetters([])
  }

  // fica monitorando a variável guesses a cada vez que ela muda
  // check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      // reset all states
      clearLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  // check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]
    
    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => actualScore += 100)
      // restart game with new word
      startGame()
    }
  }, [guessedLetters, letters, startGame])

  // restarts game
  function restartGame() {
    setScore(0)
    setGuesses(3)

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
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
        />}
      {gameStage === 'end' && <GameOver restartGame={restartGame} score={score}/>}
    </div>
  );
}

export default App;
