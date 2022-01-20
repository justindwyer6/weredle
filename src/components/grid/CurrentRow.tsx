import { Cell } from "./Cell";

type Props = {
  rowNumber: number;
  guess: string;
  werewolfGuess?: number;
  isWerewolfRevealed?: boolean;
  trimmedWerewolfGuesses?: number[];
  setCurrentWerewolfGuess: (letterIndex: number) => void;
};

export const CurrentRow = ({
  rowNumber,
  guess,
  werewolfGuess,
  isWerewolfRevealed,
  trimmedWerewolfGuesses,
  setCurrentWerewolfGuess,
}: Props) => {
  const splitGuess = guess.split("");
  const emptyCells = Array.from(Array(5 - splitGuess.length));

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell
          key={i}
          letterIndex={i}
          rowNumber={rowNumber}
          rowType="current"
          value={letter}
          isWerewolfRevealed={isWerewolfRevealed}
          isWerewolfGuess={werewolfGuess === i}
          trimmedWerewolfGuesses={trimmedWerewolfGuesses}
          onClick={setCurrentWerewolfGuess}
        />
      ))}
      {emptyCells.map((_, i) => {
        const letterIndex = splitGuess.length + i;

        return (
          <Cell
            key={letterIndex}
            letterIndex={letterIndex}
            rowNumber={rowNumber}
            rowType="current"
            isWerewolfRevealed={isWerewolfRevealed}
            isWerewolfGuess={werewolfGuess === letterIndex}
            trimmedWerewolfGuesses={trimmedWerewolfGuesses}
            onClick={setCurrentWerewolfGuess}
          />
        );
      })}
    </div>
  );
};
