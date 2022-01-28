import { InformationCircleIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { Alert } from "./components/alerts/Alert";
import { Grid } from "./components/grid/Grid";
import { Keyboard } from "./components/keyboard/Keyboard";
import { AboutModal } from "./components/modals/AboutModal";
import { InfoModal } from "./components/modals/InfoModal";
import { WinModal } from "./components/modals/WinModal";
import {
  isWordInWordList,
  isWinningWord,
  solution,
  werewolfSolution,
} from "./lib/words";
import { ChartBarIcon } from '@heroicons/react/outline'
import { StatsModal } from './components/modals/StatsModal'
import { addStatsForCompletedGame, loadStats } from './lib/stats'
import {
  loadGameStateFromLocalStorage,
  saveGameStateToLocalStorage,
} from './lib/localStorage'

function App() {
  const [isNotEnoughLetters, setIsNotEnoughLetters] = useState(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false)
  const [guesses, setGuesses] = useState<string[]>(() => {
    const gameState = loadGameStateFromLocalStorage();
    return gameState?.solution === solution ? gameState.guesses : [];
  });
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameWon, setIsGameWon] = useState(guesses.includes(solution));
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(!guesses.length);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isWordNotFoundAlertOpen, setIsWordNotFoundAlertOpen] = useState(false);
  const [stats, setStats] = useState(() => loadStats())
  const [isGameLost, setIsGameLost] = useState(false);
  const [shareComplete, setShareComplete] = useState(false);

  // Werewolf state
  const [currentWerewolfGuess, setCurrentWerewolfGuess] = useState(-1);
  const [werewolfGuesses, setWerewolfGuesses] = useState<number[]>(() => {
    const gameState = loadGameStateFromLocalStorage();
    return gameState?.solution === solution ? gameState.werewolfGuesses : [];
  });
  const [isWerewolfGuessedAlertOpen, setIsWerewolfGuessedAlertOpen] =
  useState(false);
  const isWerewolfRevealed: boolean =
    werewolfGuesses?.some(
      (werewolfGuess: number) => werewolfGuess === werewolfSolution
    ) || false;

  useEffect(() => {
    saveGameStateToLocalStorage({
      guesses,
      werewolfGuesses,
      solution,
      werewolfSolution,
    });
  }, [guesses, werewolfGuesses]);

  useEffect(() => {
    if (isGameWon) {
      setIsWinModalOpen(true)
    }
  }, [isGameWon])

  const onChar = (value: string) => {
    if (currentGuess.length < 5 && guesses.length < 6 && !isGameWon) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  }

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1))
  }

  const onEnter = () => {
    if (
      currentWerewolfGuess === -1 &&
      !isWerewolfRevealed &&
      werewolfGuesses.length > 0
    ) {
      setIsWerewolfGuessedAlertOpen(true);
      return setTimeout(() => {
        setIsWerewolfGuessedAlertOpen(false);
      }, 2000);
    }

    if (!isWordInWordList(currentGuess)) {
      setIsWordNotFoundAlertOpen(true);
    if (!(currentGuess.length === 5)) {
      setIsNotEnoughLetters(true)
      return setTimeout(() => {
        setIsNotEnoughLetters(false)
      }, 2000)
    }

    if (!isWordInWordList(currentGuess)) {
      setIsWordNotFoundAlertOpen(true)
      return setTimeout(() => {
        setIsWordNotFoundAlertOpen(false)
      }, 2000)
    }

    const winningWord = isWinningWord(currentGuess)

    if (currentGuess.length === 5 && guesses.length < 6 && !isGameWon) {
      setGuesses([...guesses, currentGuess]);
      setWerewolfGuesses([...werewolfGuesses, currentWerewolfGuess]);
      setCurrentGuess("");
      setCurrentWerewolfGuess(-1);

      if (winningWord) {
        setStats(addStatsForCompletedGame(stats, guesses.length))
        return setIsGameWon(true)
      }

      if (guesses.length === 5) {
        setStats(addStatsForCompletedGame(stats, guesses.length + 1))
        setIsGameLost(true)
        return setTimeout(() => {
          setIsGameLost(false)
        }, 2000)
      }
    }
  }

  return (
    <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <Alert message="Not enough letters" isOpen={isNotEnoughLetters} />
      <Alert message="Word not found" isOpen={isWordNotFoundAlertOpen} />
      <Alert
        message={`You lost, the word was ${solution}`}
        isOpen={isGameLost}
      />
      <Alert
        message="Game copied to clipboard"
        isOpen={shareComplete}
        variant="success"
      />
      <Alert
        message="Click a tile to guess the Werewolf"
        isOpen={isWerewolfGuessedAlertOpen && !isWerewolfRevealed}
      />
      <div className="flex w-80 mx-auto items-center mb-8">
        <h1 className="text-xl grow font-bold">🐺 Weredle</h1>
        <InformationCircleIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <ChartBarIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => setIsStatsModalOpen(true)}
        />
      </div>
      <Grid
        guesses={guesses}
        currentGuess={currentGuess}
        currentWerewolfGuess={currentWerewolfGuess}
        werewolfGuesses={werewolfGuesses}
        isWerewolfRevealed={isWerewolfRevealed}
        setCurrentWerewolfGuess={setCurrentWerewolfGuess}
      />
      <Keyboard
        onChar={onChar}
        onDelete={onDelete}
        onEnter={onEnter}
        guesses={guesses}
        isWerewolfRevealed={isWerewolfRevealed}
      />
      <WinModal
        isOpen={isWinModalOpen}
        handleClose={() => setIsWinModalOpen(false)}
        guesses={guesses}
        werewolfGuesses={werewolfGuesses}
        handleShare={() => {
          setIsWinModalOpen(false)
          setShareComplete(true)
          return setTimeout(() => {
            setShareComplete(false)
          }, 2000)
        }}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
      />
      <StatsModal
        isOpen={isStatsModalOpen}
        handleClose={() => setIsStatsModalOpen(false)}
        gameStats={stats}
      />
      <AboutModal
        isOpen={isAboutModalOpen}
        handleClose={() => setIsAboutModalOpen(false)}
      />

      <button
        type="button"
        className="mx-auto mt-8 flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setIsAboutModalOpen(true)}
      >
        About this game
      </button>
      {isGameWon ? (
        <button
          type="button"
          className="mx-auto mt-8 flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsWinModalOpen(true)}
        >
          Share
        </button>
      ) : null}
    </div>
  )
}}

export default App;
