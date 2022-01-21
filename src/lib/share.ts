import { getGuessStatuses } from "./statuses";
import { solutionIndex } from "./words";
import { werewolfSolution } from "./words";

export const shareStatus = (guesses: string[], werewolfGuesses: number[]) => {
  navigator.clipboard.writeText(
    "🐺 Weredle " +
    solutionIndex +
    " " +
    guesses.length +
    "/6\n\n" +
    generateEmojiGrid(guesses, werewolfGuesses) +
    "\n\nhttps://weredle.netlify.app/"
  );
};

export const generateEmojiGrid = (guesses: string[], werewolfGuesses: number[]) => {
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
