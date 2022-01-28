import { WORDS } from "../constants/wordlist";
import { VALIDGUESSES } from "../constants/validGuesses";
import getNumberFromZeroToNine from '../utilities/getNumberFromZeroToNine';

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
