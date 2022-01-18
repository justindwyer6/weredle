import { getGuessStatuses } from "../../lib/statuses";
import { Cell } from "./Cell";

type Props = {
  rowNumber: number;
  guess: string;
  werewolfGuess?: number;
  lastWerewolfGuess: number;
  realWerewolfGuesses?: number[];
  isWerewolfRevealed?: boolean;
};

export const CompletedRow = ({
  rowNumber,
  guess,
  werewolfGuess,
  lastWerewolfGuess,
  realWerewolfGuesses,
  isWerewolfRevealed,
}: Props) => {
  const statuses = getGuessStatuses(guess);

  return (
    <div className="flex justify-center mb-1">
      {guess.split("").map((letter, i) => (
        <Cell
          key={i}
          letterIndex={i}
          rowNumber={rowNumber}
          rowType="completed"
          value={letter}
          status={statuses[i]}
          isWerewolfGuess={werewolfGuess === i}
          isWerewolfRevealed={isWerewolfRevealed}
          lastWerewolfGuess={lastWerewolfGuess}
          realWerewolfGuesses={realWerewolfGuesses}
        />
      ))}
    </div>
  );
};
