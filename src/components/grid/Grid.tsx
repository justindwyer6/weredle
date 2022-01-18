import { CompletedRow } from "./CompletedRow";
import { CurrentRow } from "./CurrentRow";
import { EmptyRow } from "./EmptyRow";
import { werewolfSolution } from "../../lib/words";

type Props = {
  guesses: string[];
  currentGuess: string;
  currentWerewolfGuess: number;
  werewolfGuesses: number[];
  setCurrentWerewolfGuess: (letterIndex: number) => void;
};

export const Grid = ({
  guesses,
  currentGuess,
  currentWerewolfGuess,
  werewolfGuesses,
  setCurrentWerewolfGuess,
}: Props) => {
  const isWerewolfRevealed: boolean =
    werewolfGuesses?.some(
      (werewolfGuess: number) => werewolfGuess === werewolfSolution
    ) || false;

  const realWerewolfGuesses: number[] = werewolfGuesses.filter(
    (guess) => guess !== -1
  );

  const lastWerewolfGuess: number =
    realWerewolfGuesses[realWerewolfGuesses.length - 1] || -1;

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
          lastWerewolfGuess={lastWerewolfGuess}
          realWerewolfGuesses={realWerewolfGuesses}
        />
      ))}
      {guesses.length < 6 && (
        <CurrentRow
          rowNumber={guesses.length - 1}
          guess={currentGuess}
          werewolfGuess={currentWerewolfGuess}
          isWerewolfRevealed={isWerewolfRevealed}
          setCurrentWerewolfGuess={setCurrentWerewolfGuess}
          lastWerewolfGuess={lastWerewolfGuess}
          realWerewolfGuesses={realWerewolfGuesses}
        />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  );
};
