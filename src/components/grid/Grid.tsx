import { CompletedRow } from "./CompletedRow";
import { CurrentRow } from "./CurrentRow";
import { EmptyRow } from "./EmptyRow";

type Props = {
  guesses: string[];
  currentGuess: string;
  currentWerewolfGuess: number;
  werewolfGuesses: number[];
  isWerewolfRevealed: boolean;
  setCurrentWerewolfGuess: (letterIndex: number) => void;
};

export const Grid = ({
  guesses,
  currentGuess,
  currentWerewolfGuess,
  werewolfGuesses,
  isWerewolfRevealed,
  setCurrentWerewolfGuess,
}: Props) => {
  const trimmedWerewolfGuesses: number[] = werewolfGuesses.filter(
    (guess) => guess !== -1
  );

  const empties =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : [];

  return (
    <div className="pb-6">
      {guesses.map((guess, i) => (
        <CompletedRow
          key={i}
          rowNumber={i}
          guess={guess}
          werewolfGuess={werewolfGuesses[i]}
          isWerewolfRevealed={isWerewolfRevealed}
          trimmedWerewolfGuesses={trimmedWerewolfGuesses}
        />
      ))}
      {guesses.length < 6 && (
        <CurrentRow
          rowNumber={guesses.length}
          guess={currentGuess}
          werewolfGuess={currentWerewolfGuess}
          isWerewolfRevealed={isWerewolfRevealed}
          setCurrentWerewolfGuess={setCurrentWerewolfGuess}
          trimmedWerewolfGuesses={trimmedWerewolfGuesses}
        />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  );
};
