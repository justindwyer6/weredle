import { getGuessStatuses } from "./statuses";
import { solutionIndex } from "./words";
import { loadGameStateFromLocalStorage } from "./localStorage";
import { werewolfSolution } from "./words";

export const shareStatus = (guesses: string[]) => {
  navigator.clipboard.writeText(
    "Wordle " +
      solutionIndex +
      " " +
      guesses.length +
      "/6\n\n" +
      generateEmojiGrid(guesses)
  );
};

const werewolfGuesses = loadGameStateFromLocalStorage()?.werewolfGuesses || [];

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess, guessIndex) => {
      const status = getGuessStatuses(guess);
      return guess
        .split("")
        .map((letter, i) => {
          const werewolfGuessEmoji = werewolfGuesses[guessIndex] === werewolfSolution ? "🐺" : "🥸";
          const showWerewolfGuess = (i === 4 && werewolfGuesses[guessIndex] !== -1) ? werewolfGuessEmoji : "";
          switch (status[i]) {
            case "correct":
              return "🟩" + showWerewolfGuess;
            case "present":
              return "🟨" + showWerewolfGuess;
            default:
              return "⬜" + showWerewolfGuess;
          }
        })
        .join("");
    })
    .join("\n");
};
