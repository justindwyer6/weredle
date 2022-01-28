<<<<<<< HEAD
import { WORDS } from "../constants/wordlist";
import { VALIDGUESSES } from "../constants/validGuesses";
import getNumberFromZeroToNine from '../utilities/getNumberFromZeroToNine';
=======
import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
>>>>>>> 58497a6b9fb28ba26b991295ab1e48a34d3ea928

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  const getWerewolfSolution = (word: string) => {
    const charCodeSum: number = word.split("").reduce((acc, char) => (acc || 0) + char.charCodeAt(0), 0);
    return Math.floor(getNumberFromZeroToNine(charCodeSum) / 2);
  };

  // January 1, 2022 Game Epoch
<<<<<<< HEAD
  const epochMs = 1641013200000;
  const now = Date.now();
  const msInDay = 86400000;
  const solutionIndex = Math.floor((now - epochMs) / msInDay);
  const solution = WORDS[solutionIndex].toUpperCase();
  const werewolfSolution = getWerewolfSolution(solution)

  return {
    solution,
    solutionIndex,
    werewolfSolution
  };
};

export const { solution, solutionIndex, werewolfSolution } = getWordOfDay();
=======
  const epochMs = 1641013200000
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)

  return {
    solution: WORDS[index].toUpperCase(),
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
>>>>>>> 58497a6b9fb28ba26b991295ab1e48a34d3ea928
