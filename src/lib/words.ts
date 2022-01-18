import { WORDS } from "../constants/wordlist";
import { VALIDGUESSES } from "../constants/validGuesses";

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  );
};

export const isWinningWord = (word: string) => {
  return solution === word;
};

export const getWordOfDay = () => {
  const getWerewolfSolution = (word: string) => {
    const charCodeSum: number = word.split("").reduce((acc, char) => (acc || 0) + char.charCodeAt(0), 0);
    // Algorithm from https://www.geeksforgeeks.org/finding-sum-of-digits-of-a-number-until-sum-becomes-single-digit/
    return Math.floor(
      (
        (charCodeSum === 0)
        ? 0
        : (charCodeSum % 9 === 0)
        ? 9
        : (charCodeSum % 9)
      ) / 2
    );
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
